/**
 * Created by v-yunjia on 2016/8/22.
 */
import alt from '../alt.js'
import SiderbarActions from '../actions/SiderbarActions'

class SiderbarStore{
    constructor(){
        this.bindActions(SiderbarActions);
        this.menu=[];
    }
    onGetMenu(data){
        this.menu.push(data);
    }



}
export default alt.createStore(SiderbarStore);