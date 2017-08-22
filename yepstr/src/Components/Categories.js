import React, { Component } from 'react';
import axios from 'axios';
import '../css/Categories.css';

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/categories')
      .then(data => {
        let svg = [];
        data.data.map((item, key) => {
          let parser = new DOMParser();
          svg.push({name: item.name, svg: parser.parseFromString(item.svg, 'image/svg+xml')});
        })
        this.setState({
          isLoaded: true,
          data: svg
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="container">
          <div className="row">
            <h1>Loading...</h1>
            </div>
        </div>
      );
    }
    let createMenu = () => {
      let rows = [];
      for (var i = 0; i < this.state.data.length; i = i += 3) {
          rows.push(
            <div key={i} className="row">
              <div className="column">
                <div  className="box">
                  <div dangerouslySetInnerHTML={{ __html: new XMLSerializer().serializeToString(this.state.data[i].svg)}}></div>
                  <h4>{this.state.data[i].name}</h4>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <div dangerouslySetInnerHTML={{ __html: new XMLSerializer().serializeToString(this.state.data[i + 1].svg)}}></div>
                  <h4>{this.state.data[i + 1].name}</h4>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <div dangerouslySetInnerHTML={{ __html: new XMLSerializer().serializeToString(this.state.data[i + 2].svg)}}></div>
                  <h4>{this.state.data[i + 2].name}</h4>
                </div>
              </div>
            </div>
          );
      }
      return rows;
    };
    return (
      <div className="container">
        {createMenu()}
      </div>
    );
  }
}

export default Categories;
