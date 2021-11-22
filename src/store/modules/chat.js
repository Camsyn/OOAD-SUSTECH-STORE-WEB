import chat from "../../utils/chat";
import {parseTime, sortUp} from "@/utils/date";
import {getLastOfEach} from "@/api/chat";
import da from "element-ui/src/locale/lang/da";

const chatter = {
    state:{
        chat: new chat(),
        messages: null,
        messagesOfEach: null,
        tracer: 0,
        mock: {
            1: [
                {
                sendId: "11910620",
                type: 1,
                content: "https://picsum.photos/id/11/500/300",
                sendTime: "1",
                isRead: false,
                },
                {
                    sendId: "11910620",
                    type: 1,
                    content: "https://picsum.photos/id/11/500/300",
                    sendTime: "2",
                    isRead: false,
                },
            ],
            2: [{
                sendId: "11910621",
                type: 0,
                content: "hello again",
                sendTime: "2",
                isRead: false,
            }],
        },
    },

    getters: {
        msgAll: state => {
            let _ = state.tracer;
            return state.messages;
        },

        msgOf: state => sid => {
            let _ = state.tracer;
            if (state.messages === null||state.messages.get(sid)===null)
                return state.mock;
            else{
                return state.messages.get(sid);
            }
        },

        msgEach: state=>{
            let _ = state.tracer;
            return state.messagesOfEach;
        }
    },

    mutations:{
        TRACE(state){
            state.tracer++;
        },
        SET_UP (state, {context, sid}){
            state.tracer++;
            state.chat.setup(context, sid);
        },
        MSG_EACH_SET(state, msg){
            state.tracer++;
            state.messagesOfEach = msg;
        },
        MSG_SET(state, msg){
            state.tracer++;
            state.messages = msg;
        },

        SORT_UP_MSG(state){
            state.tracer++;
            let tmp = Array.from(state.messages);
            tmp.sort((t1, t2)=>{
                return sortUp(parseTime(t1[0][0]), parseTime(t2[0][0]));
            });
            let mp = new Map(tmp.map((i)=>[i[0], i[1]]));
            state.messages = mp;
            console.log(state.messages);
        },
        REV_MSG(state, ChatRecord){
            state.tracer++;
            let {sendId, sendTime, recvTime, type, content} = ChatRecord;
            if (state.messages.has(sendId)){
                state.messages.get(sendId).push(ChatRecord);
            }else {
                state.messages.set(sendId, [ChatRecord]);
            }

            for (let i = 0; i<state.messagesOfEach.length; i++){
                if (state.messagesOfEach[i].sendId === ChatRecord.sendId){
                    state.messagesOfEach.pop(i);
                    state.messagesOfEach.unshift(ChatRecord);
                    // state.messagesOfEach[i] = ChatRecord;
                    break;
                }
            }
        },
        SEND_MSG(state, {recvId, msg, type}){
            state.tracer++;
            state.chat.sendTo(recvId, msg, type);
        }
    },

    actions: {
        setupChat(context, sid){
            context.commit("SET_UP", {context, sid});
        },
        //取得每个用户发来的最后一条消息
        renew(context){
            context.commit("TRACE");
            return new Promise((resolve, reject)=>{
                getLastOfEach(context.state.name)
                    .then((res)=>{
                        // const data = res.data;
                        const data = context.state.mock;

                        let each = [];
                        for (let val in data.values()){
                            if (Array.isArray(val))
                                each.push(val[0]);
                        }

                        context.commit("MSG_EACH_SET", each);
                        context.commit("SORT_UP_MSG");
                    })
            })
        },

        test(context){
            context.state.chat.test();
        }
    }
}

export default chatter;
