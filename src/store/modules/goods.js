import {search, push} from "../../api/goods";

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
        },

        sbPushed(context){
          let sch = {
              searchStrategy: 4,
              page:0,
              limit:99,
              publishers: [context.state.name],
              firstOrder: "update_time",
              isFirstOrderAsc: true,
          }

          return search(sch);
        },
    }
}

export default goods;
