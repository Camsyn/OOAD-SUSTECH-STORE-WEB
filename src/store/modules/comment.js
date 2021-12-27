import {getUserComment} from '../../api/comment'
const comment = {
    actions : {
        getUserComment(context, name){
            return new Promise((resolve, reject)=>{
                getUserComment().then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },
    }
}
export default comment