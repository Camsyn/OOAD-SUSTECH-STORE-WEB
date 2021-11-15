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

                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                    })
            })
        },

        download(context, name){
            return new Promise((resolve, reject)=>{
                download(name).then(res => {

                }).catch(err => {

                })
            })
        },
    }
}

export default file;
