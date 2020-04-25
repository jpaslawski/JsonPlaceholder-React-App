import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Users from "./Users";
import PostDetails from './PostDetails';
import UserDetails from './UserDetails';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/:postId" component={PostDetails}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/users/:userId" component={UserDetails}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();