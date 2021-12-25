import service from "../../utils/request";
import {upload, download} from "../../api/file";

const circle = {
  state: {
    follow:[
      [
        {
          header: 'Today'
        },
        {
          avatar: "https://img1.baidu.com/it/u=3361849135,1935470780&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          name: 'Brunch this weekend?',
          buttontype:'primary',
          notice:true,
          buttontext:'取消关注',
          subtitle: `<span class="font-weight-bold">Ali Connors</span>
        &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0409%2F568ae17fj00qr9hws0023c000hs00hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639828185&t=d4d66f12c74a28ca55c83c2834b63b74",
          name: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          buttontype:'primary',
          notice:true,
          buttontext:'取消关注',
          subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: "https://img1.baidu.com/it/u=3894253077,938650472&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
          name: 'Oui oui',
          buttontype:'primary',
          notice:true,
          buttontext:'取消关注',
          subtitle: '<span class="font-weight-bold">Sandra Adams</span> ' +
            '&mdash; Do you have Paris recommendations? Have you ever been?'
        },
      ],
    ],
    unfollow:[
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0502%2Fafee7261p00q9pcjh005kc000eb009ec.png&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639827538&t=97d9adb998c30b205201a0b3369ee39d",
        name: '冯宝儿',
        buttontype:'plain',
        notice:false,
        buttontext:'+关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://img2.baidu.com/it/u=2341390205,843145067&fm=26&fmt=auto",
        name: '张楚岚',
        buttontype:'plain',
        notice:false,
        buttontext:'+ 关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0409%2F568ae17fj00qr9hws0023c000hs00hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639828185&t=d4d66f12c74a28ca55c83c2834b63b74",
        name: '胡桃',
        buttontype:'plain',
        notice:false,
        buttontext:'+关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
    ],
  },
  getters: {

  },
  actions: {
    upload(context, {files, mul}){
      return upload(files, mul);
    },

    download(context, name){
      return download(name);
    },
  }
}

export default circle;
