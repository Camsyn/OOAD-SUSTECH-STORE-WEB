import {forgetPwd, getUserInfo, getMyInfo, login, updateMyInfo, randomUser, modifyPwd} from "../../api/user";
import {register, exist} from "../../api/register";
import head from "../../assets/head.jpeg";
import {search} from "../../api/goods";

const user = {
  state: {
    followInfo: [],
    follow: [],
    name: null,
    email: null,
    avatar: null,
    token: null,
    tokenHead: null,
    refreshToken: null,
    liyuan: 0,
    credit: 0,
    description: null,
    nickname: null,
    paycode:null,
    userInfos: new Map(),
    tracer: 0,
    ObserverId:11910215
  },

  getters:{
    token: state => {
    return state.token;
  },
    tokenHead: state => {
      return state.tokenHead;
    },
    refresh_token: state => {
      return state.refreshToken;
    },
    myInfo: state=>{
      let t = state.tracer;
      return state.userInfos.get(state.name.toString());
    },
    infoOf: state=>id=>{
      let t = state.tracer;
      return state.userInfos.get(id.toString());
    }
  },
  mutations: {
    TRACE: (state)=>{
      state.tracer++;
    },
    SET_NAME: (state, name) => {
      state.name = parseInt(name);
      // console.log(state.name)
    },
    SET_USER_INFO: (state, {sid, liyuan, credit, email, headImage, payCode, description, nickname , follow})=>{
      state.name = sid;
      state.nickname = nickname;
      state.liyuan = liyuan;
      state.credit = credit;
      state.email = email;
      state.avatar = headImage;
      state.payCode = payCode;
      state.description = description;
      state.follow = follow
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_TOKEN_HEAD: (state, token) => {
      state.tokenHead = token;
    },
    SET_REFRESH_TOKEN: (state, token) => {
      state.refreshToken = token;
    },
    SET_INFO_OF: (state, info) => {
      state.userInfos.set(info.sid.toString(), info)
      state.tracer++;
    },
  },

  actions: {
    // 登录
    Login(context, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password.trim())
          .then((response) => {
            //登录成功，更新用户信息
            let data = response.data;
            context.commit("SET_TOKEN", data.token);
            context.commit("SET_TOKEN_HEAD", data.tokenHead);
            context.commit("SET_REFRESH_TOKEN", data.refreshToken);
            sessionStorage.setItem("token", context.state.tokenHead+context.state.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    LogOut(context) {
      context.commit("SET_TOKEN", undefined);
      context.commit("SET_TOKEN_HEAD", undefined);
      context.commit("SET_REFRESH_TOKEN", undefined);
    },

    Register(context, userInfo) {
        const sid = parseInt(userInfo.sid.trim());
        const password = userInfo.password.trim();
        const email = userInfo.email.trim();
        return register(sid, password, email);
    },

    update(context, info){
      info.sid = context.state.name;
      updateMyInfo(info).then(res=>{
        context.dispatch("getMyInfo").then().catch(err=>{console.log(err);});
      }).catch(err=>{
        console.log(err);
      });
    },
    updateCode(context, info){
      info.sid = context.state.name;
      updateMyInfo(info).then(res=>{
        context.dispatch("getMyInfo").then().catch(err=>{console.log(err);});
      }).catch(err=>{
        console.log(err);
      });
    },

    forgetPwd(context, data){
      return new Promise((resolve, reject)=>{
        forgetPwd(data).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },

    modifyPwd(context,data) {
      return new Promise((resolve, reject)=>{
        modifyPwd(data).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },

    getMyInfo(context){
      getMyInfo().then(res => {
        res = res.data;
        if (!res.headImage){
          res.headImage = head;
        }
        if (!res.nickname){
          res.nickname = res.sid.toString();
        }

        context.commit("SET_USER_INFO", res);
        context.commit("SET_INFO_OF", res);
      }).catch(err => {
        console.log(err);
      });
    },

    getInfoOf(context, id){
      return new Promise((resolve, reject)=>{
        if (context.state.userInfos.has(id.toString())){
          resolve(context.getters.infoOf(id));
        }else{
          getUserInfo(id).then(res => {
            res = res.data;
            if (!res.headImage){
              res.headImage = head;
            }
            if (!res.nickname){
              res.nickname = res.sid.toString();
            }
            context.commit("SET_INFO_OF", res);
            resolve(res);
          }).catch(err => {
            console.log(err);
          });
        }
      });
    },

    getRandomUser(context,size){
      return new Promise((resolve, reject) => {
        randomUser(size)
            .then((res) => {
              resolve(res.data);
            })
            .catch((error) => {
              reject(error);
            });
      });
    },

    test1(context){
      return 123131;
    }
  },
};

export default user;
