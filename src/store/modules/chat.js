import chat from "@/utils/chat";

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

        test(context){

        }
    }
}

export default chatter;
