/**
 * Created by v-yunjia on 2016/8/18.
 */
import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';import Siderbar from './Siderbar'

class App extends React.Component{
    render(){
        return (
              <div className="wrapper">
                  <Navbar />
                  <Siderbar />
                  <RouteHandler/>
              </div>


        );
    }


}
export default App;