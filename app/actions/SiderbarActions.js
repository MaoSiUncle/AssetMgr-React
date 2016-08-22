/**
 * Created by v-yunjia on 2016/8/22.
 */
import alt from '../alt'

class SiderbarActions{
    constructor(){
        this.generateActions(
            'getMenu'
        )
    }
        getCurMenu(){
         $.get('/api/menu/load').done((data)=>{
             this.actions.getMenu(data);
         })
        }

}
export default alt.createActions(SiderbarActions);