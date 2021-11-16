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
        this.socket = new WebSocket("ws://10.17.106.147:8000/chat/one2one/"+sid)

        this.socket.onerror = function(error) {
            console.log(`[error] ${error.message}`);
        };
        this.socket.onmessage = function(event) {
            console.log(`[message] Data received: ${event.data}`);
            this.revMsg(event.data);
        };
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

    }
}

export default chat
