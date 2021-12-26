import {add,getItem,deleteItem} from "../../api/cartltem";

const cartItem = {
    state : {},
    actions: {
        addInfo(context,addIo){
            return add(addIo)
        },
        getCart(context) {
            return new Promise((resolve, reject)=>{
                getItem().then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },
        deleteItem(context,cartItemId) {
            return new Promise((resolve, reject)=>{
                deleteItem(cartItemId).then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        }
    }
}
export default cartItem;