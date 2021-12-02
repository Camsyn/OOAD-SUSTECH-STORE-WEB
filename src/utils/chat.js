import service from "./request";
import axios from "axios";
import store from "../store";

class chat{
    constructor() {
        this.socket = null;
        this.unConfirmed = new Map();
        this.context = null;
        this.sid = "";
    }

    setup(context, sid){
        this.context = context;
        this.sid = sid;
        new Promise((resolve, reject)=>{
            let token = context.getters.token;
            console.log(token);
            if (token!==undefined&&token!==null){
                this.socket = new WebSocket("ws://120.77.145.246:8000/chat/websocket/one2one?token="+token);
                resolve();
            }else {
                reject("Invalid token! Please login!");
            }
        })
        .then(res=>{
            let rev = this.revMsg;
            this.socket.onopen = function (){
                console.log("ws open");
            };
            this.socket.onerror = function(error) {
                console.log(`[error] ${error.message}`);
            };
            this.socket.onmessage = function(event) {
                console.log(`[message] Data received: ${event.data}`);
                if (event.data.state!==undefined)
                    rev(event.data)
            };
            this.socket.onclose = function(event) {
                if (event.wasClean) {
                    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
                } else {
                    console.log('[close] Connection died');
                }
            };
        }).catch(error=>{
            console.log(error);
        });
    }

    //todo 超时
    sendTo(recvId, msg, type){
        return new Promise((resolve, reject)=>{
            this.socket.send(
                {
                    recvId: recvId,
                    content: msg,
                    type: type,
                }
            );
            resolve();
        })
    }

    revMsg(ChatRecord){
        this.context.commit("REV_MSG", ChatRecord);
    }

    test(){
        this.socket.send("My name is abc");
    }
}

export default chat

export function addTime(chatRecords){

}
