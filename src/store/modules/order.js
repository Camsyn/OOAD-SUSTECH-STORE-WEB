import {getPush, confirmPush, confirmPull, getPull,rollback,getRequest} from "../../api/order";

const order = {
    state:{

    },

    getters: {

    },

    mutations:{

    },

    actions: {
        getPush(context, {page, size}) {
            return getPush(page, size);
        },

        getPull(context, {page, size}) {
            return getPull(page, size);
        },

        confirmPush(context, id) {
            return confirmPush(id);
        },

        confirmPull(context, id) {
            return confirmPull(id);
        },
        rollbackOrder(context,id) {
            return rollback(id)
        },
        getRequest(context,id){
            return  getRequest(id)
        }
    }
}

export default order;
