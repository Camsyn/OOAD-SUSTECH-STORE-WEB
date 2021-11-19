import service from "./request";
import axios from "axios";

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
        console.log(123);
        service({
            method: "get",
            url: "http://camsyn.cn:8000/hello",
        }).then(res=>{
            console.log(res.data);
            this.socket = new WebSocket("ws://camsyn.top:8000/chat/websocket/one2one/"+sid);
            this.socket.onopen = function (){
                alert("ws open");
            };
            this.socket.onerror = function(error) {
                console.log(`[error] ${error.message}`);
            };
            this.socket.onmessage = function(event) {
                console.log(`[message] Data received: ${event.data}`);
                // this.revMsg(event.data);
            };
            this.socket.onclose = function(event) {
                if (event.wasClean) {
                    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
                } else {
                    alert('[close] Connection died');
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
