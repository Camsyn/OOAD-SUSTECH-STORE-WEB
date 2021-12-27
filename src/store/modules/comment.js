import {getUserComment} from '../../api/comment'
const comment = {
    actions : {
        getUserComment(context, data){
            return new Promise((resolve, reject)=>{
                getUserComment(data).then(res=>{
                    resolve(res.data);
                }).catch(err=>{
                    reject(err);
                });
            });
        },
    }
}
export default comment