class chat{
    constructor() {
        this.socket = null;
        this.messages=new Map();
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
        this.socket.send(
            {
                sendId:　this.sid,
                content: msg,
                type: type,
            }
        )
    }

    revMsg(ChatRecord){
        this.context.state.tacker+=1;
        let {id, type, content} = ChatRecord;
        if (this.messages.has(id)){
            this.messages.get(id).push(ChatRecord);
        }else {
            this.messages.set(id, [ChatRecord]);
        }

    }

    test(){

    }
}

export default chat
