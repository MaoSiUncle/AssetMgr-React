/**
 * Created by v-yunjia on 2016/8/18.
 */
import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore{
    constructor(){
        this.bindActions(NavbarActions);
        this.user="";
    }
    onGetUser(data){
        this.user=data;
    }


}
export default alt.createStore(NavbarStore);
