/**
 * Created by v-yunjia on 2016/8/18.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Navbar from './components/Navbar';

export default (
    <Route handler={App}>
        <Route path='/' handler={Navbar} />
    </Route>
);