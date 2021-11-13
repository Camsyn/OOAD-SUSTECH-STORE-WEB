class chat{
    constructor(sid) {
        this.sid = sid
        this.socket = new WebSocket("ws://chat/websocket/chat/one2one/11911626")
        this.socket.onerror = function(error) {
            console.log(`[error] ${error.message}`);
        };
        this.socket.onmessage = function(event) {
            console.log(`[message] Data received: ${event.data}`);
            this.revMsg(event.data);
        };

        this.messages = new Map()

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
        let {id, type, content} = ChatRecord;
        if (this.messages.has(id)){
            this.messages.get(id).push(ChatRecord);
        }else {
            this.messages.set(id, [ChatRecord]);
        }

    }
}