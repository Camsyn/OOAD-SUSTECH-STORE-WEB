import service from "../../utils/request";
import {upload, download} from "../../api/flie";

const file = {
    state: {

    },
    getters: {

    },

    actions: {
        upload(context, files){
            const sid = context.state.name;
            return new Promise((resolve, reject)=>{
                upload(files).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            })
        },

        download(context, name){
            return new Promise((resolve, reject)=>{
                download(name).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
            })
        },
    }
}

export default file;
