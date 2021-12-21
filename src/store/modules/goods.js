import {search, push} from "@/api/goods";

const goods = {
    state:{
        searchHistory:[]
    },

    getters: {

    },

    mutations:{
        updateHistory(state, info){
            let newInfo = {
                queryStr: info.queryStr,

            }
        },
    },

    actions: {
        search(context, searchInfo) {
            // return new Promise((resolve, reject)=>{
            //     search(searchInfo).then(res=>{
            //
            //     }).catch(err=>{
            //         reject(err);
            //     });
            // });
            context.commit("updateHistory", searchInfo);
            return search(searchInfo);
        },

        push(context, info){
            return push(info);
        }
    }
}

export default goods;
