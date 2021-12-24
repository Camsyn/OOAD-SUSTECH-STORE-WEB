import {search, push} from "@/api/goods";

const goods = {
    state:{
        searchHistory:[],
        current: null,
    },

    getters: {

    },

    mutations:{
        updateHistory(state, info){
            let newInfo = {
                queryStr: info.queryStr,

            }
        },
        setCur(state, request){
            state.current = request;
        }
    },

    actions: {
        search(context, searchInfo) {
            context.commit("updateHistory", searchInfo);
            return new Promise((resolve, reject)=>{
                search(searchInfo).then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
            // return search(searchInfo);
        },

        push(context, info){
            return push(info);
        }
    }
}

export default goods;
