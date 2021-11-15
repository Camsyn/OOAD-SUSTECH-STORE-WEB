import chat from "../../utils/chat";

const chatter = {
    state:{
        chat: null,
        messages: null,
        tracer: 0,
    },

    getters: {
        msgAll: state => {
            let _ = state.tracer;
            return state.messages;
        },

        msgOf: state => sid => {
            let _ = state.tracer;
            if (state.messages === null||state.messages.get(sid)===null)
                return null;
            else{
                return state.messages.get(sid);
            }
        }
    },

    actions: {
        setupChat(context, sid){
            context.state.chat = new chat();
            context.state.chat.setup(context, sid);
        },

        renew(context){
            
        },

        sendMsg({state}, recvId, msg){
          state.chat.sendTo(recvId, msg, 0);
        },

        sendPicture({state}, recvId, url){
            state.chat.sendTo(recvId, url, 1)
        },

        sendFile({state}, recvId, url){
            state.chat.sendTo(recvId, url, 2)
        },

        test(context){

        }
    }
}

export default chatter;
