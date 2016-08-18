/**
 * Created by v-yunjia on 2016/8/18.
 */
import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state=NavbarStore.getState();
        this.onChange=this.onChange.bind(this);
    }
    componentDidMount(){
        NavbarStore.listen(this.onChange);
        NavbarActions.getCurUser();
    }
    onChange(state) {
    this.setState(state);
    }

    render() {
        let user=this.state.user;
        return (
           <header className='main-header'>
               <nav className='navbar navbar-static-top'>
                <div className='navbar-custom-menu'>
                  <ul className='nav navbar-nav'>
                      <li className="dropdown user user-menu">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <img src="/imgs/guest.jpg" className="user-image" alt="User Image"/>
                                  <span className="hidden-xs">{user.name}</span>
                              </a>
                      </li>

                  </ul>
                </div>
               </nav>
           </header>
        );
    }
}

export default Navbar;