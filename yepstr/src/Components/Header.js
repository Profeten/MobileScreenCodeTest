import React, { Component } from 'react';
import '../css/Header.css';

class Categories extends Component {
  render() {
    return (
      <div className="header">
        <div className="navigation">
          <div>
            &lsaquo;
          </div>
          <div>
            Yeppa Täby
          </div>
          <div>
            &#10006;
          </div>
        </div>
        <div className="title">
          <h3>Vad fick du hjälp med?</h3>
        </div>
      </div>
    );
  }
}

export default Categories;
