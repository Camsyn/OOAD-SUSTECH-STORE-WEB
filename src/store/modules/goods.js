import {search, push, close, open, update} from "../../api/goods";

const goods = {
    state:{
        current: {
            test:1
        },
        labels: ["食品","书籍","手机","服饰","电子","洗护","优惠券",],
        search: false,
        payList: [],
    },

    getters: {
        labels(state){
            return state.labels;
        },
        search(state){
            return state.search;
        }
    },

    mutations:{
        setpayList(state,list) {
          state.payList = list;
        },
        setCur(state, request){
            state.current = request;
        },
        setSearch(state, sch){
            state.search = sch;
        }
    },

    actions: {
        search(context, searchInfo) {
            return new Promise((resolve, reject)=>{
                search(searchInfo).then(res=>{
                    let url = "https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto"
                    for (let i = 0; i <res.data.length ; i++) {
                        if(res.data[i].images.length === 0) {
                            res.data[i].images = [url]
                        }
                    }
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },

        push(context, info){
            return push(info);
        },

        updateRq(context, info){
            return update(info);
        },

        close(context, id) {
            return new Promise((resolve, reject)=>{
                close(id).then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },

        open(context, id) {
            return new Promise((resolve, reject)=>{
                open(id).then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },

        sbPushed(context, name){
            let my = {
                page: 0,
                limit: 99,
                searchStrategy: 4,
                firstOrder: "update_time",
                isAmbiguous: false,
                publishers: [name],
            };
            console.log(my)
            return new Promise((resolve, reject)=>{
                search(my).then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },
    }
}

export default goods;
