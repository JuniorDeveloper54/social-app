import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './Components/Banner/Banner';
import Post from './Components/Post/Post';
import Categorys from './Components/Categorys/Categorys';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comments from './Components/Comments/Comments';
import Allpost from './Components/AllPost/Allpost';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar/PrimarySearchAppBar';


function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/Home">
            <Banner></Banner>
            <div className="wrapper d-flex " >
              <div className="postComponent w-75 mt-4">
                <Post></Post>
              </div>
              <div className="categoryComponent" >
                <Categorys></Categorys>
              </div>
            </div>
          </Route>
          <Route path="/Post">
            <Banner></Banner>
            <Allpost></Allpost>
          </Route>
          <Route path="/comment/:id">
            <Comments></Comments>
          </Route>
          <Route path="/About Project">
            <h1>I made this page for practice after this assignment.</h1>
          </Route>
          <Route exact path="/">
            <div className="wrapper d-flex " >
              <div className="postComponent w-75  ">
                <Post></Post>
              </div>
              <div className="categoryComponent" >
                <Categorys></Categorys>
              </div>
            </div>
          </Route>
          <Route path="*" >
            <img src="https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln" alt="" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
