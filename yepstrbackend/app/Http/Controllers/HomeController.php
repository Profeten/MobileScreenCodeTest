<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    private function _getSVGCode(Request $request)
    {

        return file_get_contents($request->svg->path());
    }

    public function addNewCategory(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'svg' => 'required|mimetypes:image/svg+xml',
            'name' => 'required|string'
        ]);

        if ($validator->fails()) {
            return redirect('home')
                ->withErrors($validator)
                ->withInput();
        }

        if (!$request->hasFile('svg')) {
            return redirect('home')
                ->withErrors(['Please choose a file for uploading'])
                ->withInput();
        }

        if (!$request->file('svg')->isValid()) {
            return redirect('home')
                ->withErrors(['Invalid file.'])
                ->withInput();
        }

        $svg = file_get_contents($request->svg->path());

        $c = new Categories();
        $c->svg = $svg;
        $c->name = $request->name;
        $c->save();

        return view('home')
            ->with('success', 'You\'ve successfully added a new category!');
    }

    public function remoteOneCategory()
    {
        return true;
    }
}
