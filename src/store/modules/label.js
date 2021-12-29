import {requestLabel,frequencyLabel} from "../../api/label";
import * as res from "core-js";

const label= {
    state:{
        lable:"",
        pullfrequency:null,
        pushFrequency:null,
    },

    getters: {

    },

    mutations:{

    },

    actions: {
      ReturnFreqLabel(context,{pages,pagesize,isPush}){
          // let data={"page":pages,"pagesize":pagesize,"isPush":isPush}
          return new Promise((resolve,reject)=>{
              frequencyLabel({pages,pagesize,isPush}).then(res=>{
                  console.log(res.data)
                  resolve(res.data);
              }).catch(err=>{
                  reject(err)
              })

          })


      }

    }
}

export default label;
