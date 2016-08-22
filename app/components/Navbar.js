/**
 * Created by v-yunjia on 2016/8/18.
 */
import React from 'react';
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
               <a href="#" className="logo">
                   <span className="logo-mini"><b>A</b>LT</span>
                   <span className="logo-lg"><b>Admin</b>LTE</span>
               </a>
               <nav className='navbar navbar-static-top' role="navigation">
                   <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                       <span className="sr-only">Toggle navigation</span>
                   </a>
                <div className='navbar-custom-menu'>
                  <ul className='nav navbar-nav'>
                      <li className="dropdown user user-menu">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <img src="/imgs/guest.jpg" className="user-image" alt="User Image"/>
                                  <span className="hidden-xs">{user.name}</span>
                              </a>
                      </li>
                      <li>
                          <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                      </li>
                  </ul>
                </div>

               </nav>
           </header>
        );
    }
}

export default Navbar;