import {search, push, close} from "../../api/goods";

const goods = {
    state:{
        searchHistory:[],
        current: null,
        labels: ["食品","书籍","手机","服饰","电子","洗护","优惠券",],
        search: false,
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
        updateHistory(state, info){
            let newInfo = {
                queryStr: info.queryStr,
            }
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
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },

        push(context, info){
            return push(info);
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
