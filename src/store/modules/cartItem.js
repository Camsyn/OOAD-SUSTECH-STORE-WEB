import {add,getItem} from "../../api/cartltem";

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
            // return search(searchInfo);
        },
    }
}
export default cartItem;