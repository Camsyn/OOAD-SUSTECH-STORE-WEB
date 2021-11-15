class chat{
    constructor() {
        this.socket = null;
        this.messages=new Map();
        this.unConfirmed = new Map();
        this.context = null;
        this.sid = "";
    }

    setup(context, sid){
        this.context = context;
        this.sid = sid;
        this.context.state.messages = this.messages;

        this.socket = new WebSocket("ws://10.17.106.147:8000/chat/one2one/"+sid)

        this.socket.onerror = function(error) {
            console.log(`[error] ${error.message}`);
        };
        this.socket.onmessage = function(event) {
            console.log(`[message] Data received: ${event.data}`);
            this.revMsg(event.data);
        };
    }

    sendTo(recvId, msg, type){
        return new Promise((resolve, reject)=>{
            this.socket.send(
                {
                    recvId: recvId,
                    content: msg,
                    type: type,
                }
            )

        })

    }

    revMsg(ChatRecord){
        this.context.state.tacker+=1;
        let {sendId, sendTime, recvTime, type, content} = ChatRecord;
        if (this.messages.has(sendId)){
            this.messages.get(sendId).push(ChatRecord);
        }else {
            this.messages.set(sendId, [ChatRecord]);
        }
    }

    test(){

    }
}

export default chat
