import React from 'react';
import SiderbarStore from  '../Stores/SiderbarStore'
import SiderbarActions from '../actions/SiderbarActions';
class Siderbar extends React.Component{
    constructor(props){
        super(props);
        this.state=SiderbarStore.getState();
        this.onChange=this.onChange.bind(this);
    }
    componentDidMount(){
       SiderbarStore.listen(this.onChange);
       SiderbarActions.getCurMenu();
   }
    onChange(state){
        this.setState(state);
    }

    render(){
        let menuJson=this.state.menu;
        let menu=menuJson.map(function(item,index){
            return (
                <li  key={index}><a href={"#Device?opr="+item.opr}><i className="fa fa-lemon-o"></i><span>{item.text}</span></a></li>
            )
        });
        return(
            <aside className="main-sidebar">

                <section className="sidebar">
                        <ul className="sidebar-menu">
                            <li className="header">ControlPanel</li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i>
                                    <span>Dashboard</span>
                                    <i className="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul className="treeview-menu" >
                                    <li><a href="../../index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                    <li><a href="../../index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                </aside>
        );
    }
}
export default Siderbar;