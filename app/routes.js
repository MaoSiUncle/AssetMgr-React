/**
 * Created by v-yunjia on 2016/8/18.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
export default (
    <Route handler={App}>
        <Route path='/' handler={Home}/>
    </Route>
);