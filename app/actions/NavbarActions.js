/**
 * Created by v-yunjia on 2016/8/18.
 */
import alt from '../alt';
class NavbarActions{
    constructor(){
        this.generateActions(
            'getUser'
        )
    }
    getCurUser(){
        $.get('/api/user/login').done((data)=>{
            this.actions.getUser(data);
        });
    }
}
export default alt.createActions(NavbarActions);