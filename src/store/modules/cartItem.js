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
                    let url = "https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto"
                    for (let i = 0; i <res.data.length ; i++) {
                        if(res.data[i].images.length == 0) {
                            res.data[i].images = [url]
                        }
                        res.data[i].updateTime = res.data[i].updateTime.substr(0,10)
                        res.data[i].cartItemCreateTime  = res.data[i].cartItemCreateTime.substr(0,10)
                    }
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