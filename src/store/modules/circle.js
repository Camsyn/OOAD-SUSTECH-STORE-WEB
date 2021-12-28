import {post, postComment, Delete, commentDelete, AllgetLatest, sbGetLast, sbGetPage} from '../../api/circle'

const circle = {
  state: {
    myInfo:{
      avatar:'',
      name:'钟离',
      moto:'起风了，唯有努力生存',
      constellation:'双鱼座',
      selfIntroduce:'云村达人',
      career:'自由职业-行政',
      hobby:'健身，旅游，运动',
    },

    evaluate: [
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0409%2F568ae17fj00qr9hws0023c000hs00hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639828185&t=d4d66f12c74a28ca55c83c2834b63b74",
        name: '胡桃',
        subtitle:"mdash Wish I could come, but I'm out of town this weekend."

      },
      {
        avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.rtQNUWTWbvZam02cGcv5lQHaHa?pid=ImgDet&rs=1",
        name: '刻晴',
        subtitle: `<span class="font-weight-bold">Ali Connors</span>
        &mdash; I'll be in your neighborhood doing errands this weekend.`
      },
      {
        avatar: "https://img.139y.com/m00/c4/0a/58275efbe26d92b42233aaeae14ef6bd.jpg",
        name: '莹',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://upload-bbs.mihoyo.com/upload/2020/11/15/11833340/d87515e3a221729d405cbb12d8c35336_2686882829853950575.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg",
        name: '温迪',
        subtitle: '<span class="font-weight-bold">Sandra Adams</span> ' +
            '&mdash; Do you have Paris recommendations? Have you ever been?'
      },
    ],

    followList:[],
    unfollowList: [
      {
        id:86,
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0502%2Fafee7261p00q9pcjh005kc000eb009ec.png&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639827538&t=97d9adb998c30b205201a0b3369ee39d",
        name: '冯宝儿',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        id:87,
        avatar: "https://img2.baidu.com/it/u=2341390205,843145067&fm=26&fmt=auto",
        name: '张楚岚',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        id:88,
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0409%2F568ae17fj00qr9hws0023c000hs00hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639828185&t=d4d66f12c74a28ca55c83c2834b63b74",
        name: '胡桃',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        id:1,
        avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.rtQNUWTWbvZam02cGcv5lQHaHa?pid=ImgDet&rs=1",
        name: '刻晴',
        subtitle: `<span class="font-weight-bold">Ali Connors</span>
        &mdash; I'll be in your neighborhood doing errands this weekend.`
      },
      {
        id:2,
        avatar: "https://img.139y.com/m00/c4/0a/58275efbe26d92b42233aaeae14ef6bd.jpg",
        name: '莹',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        id:3,
        avatar: "https://upload-bbs.mihoyo.com/upload/2020/11/15/11833340/d87515e3a221729d405cbb12d8c35336_2686882829853950575.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg",
        name: '温迪',
        subtitle: '<span class="font-weight-bold">Sandra Adams</span> ' +
            '&mdash; Do you have Paris recommendations? Have you ever been?'
      },
    ],

    grassList:[
      {
        id:11,
        avatar_src:"https://tse2-mm.cn.bing.net/th/id/OIP-C.l-lpk0LiE1aXYTsyZNnSogHaEo?pid=ImgDet&rs=1",
        img_src:"https://img2.baidu.com/it/u=4042668463,1760762779&fm=26&fmt=auto",
        username:"Tifa",
        titel:"《最终幻想7重制版》",
        subtitle:"在塔罗牌里，Tiferet的图案是红心，而有时则是天使（Tifa的酒吧是“Seventh Heaven”），" +
            "而她的4级Limit技则是“Final Heaven”），" +
            "她的姓“Lockheart”，表示她善于把心事锁在心里，又或者她可以解锁真正的克劳德",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Sally',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
        ],
      },
      {
        id:12,
        avatar_src:"https://img0.baidu.com/it/u=223280774,3532649295&fm=26&fmt=auto",
        img_src:"https://img1.baidu.com/it/u=1753918686,2222541224&fm=26&fmt=auto",
        username:"2B",
        titel:"《尼尔：机械纪元》",
        subtitle:"外星人突然入侵地球，他们制造了名为“机械生命体”的军队。在外星人势不可挡的力量面前，人类逃往月球。为了重新夺回地球，" +
            "人类建立了由“战斗型机器人”所组成的战斗抵抗组织。为了打破战场的僵局，人类设计了“尤尔哈（另译：寄叶）”作战单位——最新型的先进的机器人战士。" +
            "在一片贫瘠荒凉、渺无人烟的地球上，机械生命体与机器人战士展开了大战，这场战争将会成为打开未知奥秘的关键",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },
    ],
    hotsharingList:[
      {
        id:21,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.mRKNiPb8sgjJKmpTI5A8SAAAAA?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.3rwfLbGH72Qa0MMoGnqqcwHaHU?w=196&h=194&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"Babel",
        titel:"柴犬",
        subtitle:"柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },
      {
        id:22,
        avatar_src:"https://tse2-mm.cn.bing.net/th/id/OIP-C.l-lpk0LiE1aXYTsyZNnSogHaEo?pid=ImgDet&rs=1",
        img_src:"https://img2.baidu.com/it/u=4042668463,1760762779&fm=26&fmt=auto",
        username:"Tifa",
        titel:"《最终幻想7重制版》",
        subtitle:"在塔罗牌里，Tiferet的图案是红心，而有时则是天使（Tifa的酒吧是“Seventh Heaven”），" +
            "而她的4级Limit技则是“Final Heaven”），" +
            "她的姓“Lockheart”，表示她善于把心事锁在心里，又或者她可以解锁真正的克劳德",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Sally',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
        ],
      },
      {
        id:23,
        avatar_src:"data:image/jpeg;base64,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",
        img_src:"https://tse3-mm.cn.bing.net/th/id/OIP-C.DCP5cR24V7N_2WOImceBbQHaEP?w=304&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"亚托莉",
        titel:"《ATRI -MY DEAR MOMENTS-》",
        subtitle:"背景设定在因为不明原因导致全球海平面上升之后的未来，在全球大多数地方都被海洋淹没城市才是相对环境的情况下，" +
            "在一场事故失去了一条腿的男主斑鸠夏生却选择了放弃城市，转而搬家到海边去生活，一切故事也由此展开",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Sally',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
        ],
      },
      {
        id:24,
        avatar_src:"https://img0.baidu.com/it/u=223280774,3532649295&fm=26&fmt=auto",
        img_src:"https://img1.baidu.com/it/u=1753918686,2222541224&fm=26&fmt=auto",
        username:"2B",
        titel:"《尼尔：机械纪元》",
        subtitle:"外星人突然入侵地球，他们制造了名为“机械生命体”的军队。在外星人势不可挡的力量面前，人类逃往月球。为了重新夺回地球，" +
            "人类建立了由“战斗型机器人”所组成的战斗抵抗组织。为了打破战场的僵局，人类设计了“尤尔哈（另译：寄叶）”作战单位——最新型的先进的机器人战士。" +
            "在一片贫瘠荒凉、渺无人烟的地球上，机械生命体与机器人战士展开了大战，这场战争将会成为打开未知奥秘的关键",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },
    ],

    dynamicPool:[
      {
        tag:"carton",
        id:31,
        avatar_src:"data:image/jpeg;base64,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",
        img_src:"https://tse3-mm.cn.bing.net/th/id/OIP-C.DCP5cR24V7N_2WOImceBbQHaEP?w=304&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"亚托莉",
        titel:"《ATRI -MY DEAR MOMENTS-》",
        subtitle:"背景设定在因为不明原因导致全球海平面上升之后的未来，在全球大多数地方都被海洋淹没城市才是相对环境的情况下，" +
            "在一场事故失去了一条腿的男主斑鸠夏生却选择了放弃城市，转而搬家到海边去生活，一切故事也由此展开",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Sally',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
        ],
      },
      {
        tag:"carton",
        id:32,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/R-C.e327dcb2dd9db44a1607a3b13111f78a?rik=oJot6i%2bTXry0Sw&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2f63ae2ec06857623f4bfaece65213dedec122577b.jpg&ehk=WflxyU3DFuzhDWlB81IjmF%2bLAQ7%2bEJb2uh1%2boLhyj9E%3d&risl=&pid=ImgRaw&r=0",
        img_src:"https://tse4-mm.cn.bing.net/th/id/OIP-C.oqs32PJr_k-Zj7C8iFLJGAHaLL?w=203&h=307&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"薇尔莉特·伊芙加登",
        titel:"《紫罗兰永恒花园》",
        subtitle:"在战争中、作为军人而战斗的薇尔莉特·伊芙加登离开了军队，来到了大港口城市。怀抱着战场上一个对她而言比谁都重要的人告诉了她“某个话语”――",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },

      {
        tag:"pet",
        id:41,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.6QZc9ezh-imkA3vvqXzThQHaHa?w=205&h=205&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse1-mm.cn.bing.net/th/id/R-C.4340d96931a05015a367d8b2e6c970fa?rik=WTQ7cOnnZ8WD1g&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190904%2fef66988e6ef5403d80f6d04c9b05703b.jpeg&ehk=0K%2f%2fO2kTHE2Be0ucED4GQ1BMniLbKNGIZxFBexmpMg8%3d&risl=&pid=ImgRaw&r=0",
        username:"Lisa",
        titel:"威尔士柯基犬",
        subtitle:"威尔士柯基犬（welsh corgi pembroke）是一种小型犬，它们的胆子很大，也相当机警，能高度警惕地守护家园，是最受欢迎的小型护卫犬之一。",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
        ],
      },
      {
        tag:"pet",
        id:42,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.mRKNiPb8sgjJKmpTI5A8SAAAAA?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.3rwfLbGH72Qa0MMoGnqqcwHaHU?w=196&h=194&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"Babel",
        titel:"柴犬",
        subtitle:"柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },

      {
        tag:"food",
        id:51,
        avatar_src:"https://tse3-mm.cn.bing.net/th/id/OIP-C.FKtgH07plIFz0k8ozq4_9gHaHa?w=196&h=195&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://img.mp.itc.cn/upload/20161204/038bc0b3d52a4beb886c2f1742b055b3_th.jpg",
        username:"Alice",
        titel:"法式蜗牛ESCARGOTS",
        subtitle:"法国蜗牛Escargots是一种可食用的蜗牛，特别是勃艮第蜗牛（Les escargots de Bourgogne）是作为法国传统的菜肴的食材。 其中，法式焗蜗经典法式大餐的开胃菜，也是法国的国宴名菜。" +
            " 很多小伙伴刚到法国的时候，对蜗牛这道菜是拒绝的。 如果你吃过螺蛳肉，那么蜗牛肉也不难接受。 在慢慢接触和品尝之后都渐渐地喜欢上它。",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
        ],
      },
      {
        tag:"food",
        id:52,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.28gUOK0GI_CXZRii59Yy5wHaGl?w=219&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse1-mm.cn.bing.net/th/id/R-C.32efe0814b70ae891e7fb2dc0d105a65?rik=Ap5L8nMuqXZUcA&riu=http%3a%2f%2fwww.juimg.com%2ftuku%2fyulantu%2f130820%2f328475-130R022204738.jpg&ehk=ijSPahuSDQwj5Vb0lF2cBJuhemPbUJElronW%2b5P8JNY%3d&risl=&pid=ImgRaw&r=0",
        username:"Sam",
        titel:"寿司",
        subtitle:"寿司是一种很健康的食物，口味佳、热量低（平均120大卡）、营养丰富、配比合理，同时又方便制作和携带，对于有健康意识的上班族来说是很不错的选择。",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },

      {
        tag:"game",
        id:61,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.Bx2S_Cvetd7XaMndAS_clQAAAA?w=142&h=187&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse2-mm.cn.bing.net/th/id/OIP-C.nX-MIUpi4nZikcPXYLQX1QHaEK?w=310&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"Tina",
        titel:"《Pragmata》",
        subtitle:"《Pragmata》是由卡普空制作的一款充满科幻色彩的冒险游戏，" +
            "它试图为玩家提供一个前所未有的令人窒息和身临其境的科幻场景，游戏将于2023年发售，登陆PS5。",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Sally',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
        ],
      },
      {
        tag:"game",
        id:62,
        avatar_src:"https://tse2-mm.cn.bing.net/th/id/OIP-C.l-lpk0LiE1aXYTsyZNnSogHaEo?pid=ImgDet&rs=1",
        img_src:"https://img2.baidu.com/it/u=4042668463,1760762779&fm=26&fmt=auto",
        username:"Tifa",
        titel:"《最终幻想7重制版》",
        subtitle:"在塔罗牌里，Tiferet的图案是红心，而有时则是天使（Tifa的酒吧是“Seventh Heaven”），" +
            "而她的4级Limit技则是“Final Heaven”），" +
            "她的姓“Lockheart”，表示她善于把心事锁在心里，又或者她可以解锁真正的克劳德",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Sally',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
        ],
      },
      {
        tag:"game",
        id:63,
        avatar_src:"https://img0.baidu.com/it/u=223280774,3532649295&fm=26&fmt=auto",
        img_src:"https://img1.baidu.com/it/u=1753918686,2222541224&fm=26&fmt=auto",
        username:"2B",
        titel:"《尼尔：机械纪元》",
        subtitle:"外星人突然入侵地球，他们制造了名为“机械生命体”的军队。在外星人势不可挡的力量面前，人类逃往月球。为了重新夺回地球，" +
            "人类建立了由“战斗型机器人”所组成的战斗抵抗组织。为了打破战场的僵局，人类设计了“尤尔哈（另译：寄叶）”作战单位——最新型的先进的机器人战士。" +
            "在一片贫瘠荒凉、渺无人烟的地球上，机械生命体与机器人战士展开了大战，这场战争将会成为打开未知奥秘的关键",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },

      {
        tag:"tour",
        id:71,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.JC7Hbj0TrFxg3jYc7vMlIwHaHa?w=191&h=191&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://img1.qunarzz.com/travel/d0/1701/5d/b503b72937a228b5.jpg",
        username:"Henry",
        titel:"威尼斯",
        subtitle:"威尼斯（Venice）是意大利东北部著名的旅游与工业城市，也是威尼托地区（威内托大区）的首府。威尼斯曾经是威尼斯共和国的中心，被称作“亚得里亚海明珠”，十字军进行十字军东征时也曾在这里集结，堪称世界最浪漫的城市之一。 威尼斯市区涵盖意大利东北部亚得里亚海沿岸的威尼斯潟湖的118个人工岛屿和邻近一个人工半岛，" +
            "更有117条水道纵横交叉。这个咸水潟湖分布在波河与皮亚韦河之间的海岸线。",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
        ],
      },
      {
        tag:"tour",
        id:72,
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/R-C.e327dcb2dd9db44a1607a3b13111f78a?rik=oJot6i%2bTXry0Sw&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2f63ae2ec06857623f4bfaece65213dedec122577b.jpg&ehk=WflxyU3DFuzhDWlB81IjmF%2bLAQ7%2bEJb2uh1%2boLhyj9E%3d&risl=&pid=ImgRaw&r=0",
        img_src:"https://tse1-mm.cn.bing.net/th/id/R-C.b431fd8838712ccf4c155bac8e71e70a?rik=vgbkz02KYa39QQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190526%2fcfd9b5df7b4f468ab423456f501b3f69.jpeg&ehk=r50eKLB7NH9TIWAsV5857WgaZXRxo1lbUiucBduaZQg%3d&risl=&pid=ImgRaw&r=0",
        username:"Tony",
        titel:"挪威",
        subtitle:"挪威王国（挪威语：Kongeriket Norge或 Kongeriket Noreg），简称“挪威”（挪威语：Norge 或Noreg），意为“通往北方之路”，是北欧五国之一，位于斯堪的纳维亚半岛西部。挪威领土南北狭长，海岸线漫长曲折，沿海岛屿很多，被称为“万岛之国”，" +
            "领土与瑞典、芬兰、俄罗斯接壤，属地还包括斯瓦尔巴群岛和扬马延岛。首都为奥斯陆。",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },

      {
        tag:"teasing",
        id:81,
        avatar_src:"https://tse3-mm.cn.bing.net/th/id/OIP-C.tFxRVXHWbascR0vC8lfwPwHaHZ?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"data:image/jpeg;base64,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",
        username:"范思哲",
        titel:"工作ing",
        subtitle:"我经常跳槽，国内不少城市我都待过，每当朋友问我在何处就职时，我都会说在“中国移 动”。",
        show1:false,
        heatColor:"gray",
        heartNum:256,
        show2: false,
        messageColor:"gray",
        messageNum:666,
        show3:false,
        sharingColor:"gray",
        sharingNum:486,
        textarea:'',
        repy_items: [
          {
            text: 'Adam',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
        ],
      },
      {
        tag:"teasing",
        id:82,
        avatar_src:"https://tse4-mm.cn.bing.net/th/id/OIP-C.7By3AWpq-4diM6uZhohfWgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse2-mm.cn.bing.net/th/id/OIP-C.QvTU6IKsqy4eg79EzZnyYgAAAA?w=161&h=169&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"Jason",
        titel:"考试周",
        subtitle:"每次老师说：“请把和考试无关的东西放到讲台上。”我就很想把自己放到讲台上……",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
                '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
                '\n' +
                '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
                '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },

    ]
  },
  getters: {
    all_followers:state=> state.followList,
    all_unfollowers:state=>state.unfollowList,

    hotsharingList:state=>state.hotsharingList,
    grassList: state=>state.grassList,

    dynamicPool:state=>state.dynamicPool,

    cartonList(state){
      return state.dynamicPool.filter(n=>n.id>30)
    },
    gameList(state){
      return state.dynamicPool.filter(n=>n.tag==="game")
    },
    foodList(state){
      return state.dynamicPool.filter(n=>n.tag==="food")
    },
    petList(state){
      return state.dynamicPool.filter(n=>n.tag==="pet")
    },
    tourList(state){
      return state.dynamicPool.filter(n=>n.tag==="tour")
    },
    teasingList(state){
      return state.dynamicPool.filter(n=>n.tag==="teasing")
    }


  },
  mutations:{
    UAdd(state, { item }){
      let record=state.unfollowList.find(n=>n.id===item.id)

      if(!record){
        let new_item={}
        new_item['id']=item.id
        new_item['avatar']=item.avatar
        new_item['name']=item.name
        new_item['subtitle']=item.subtitle

        state.unfollowList.push(new_item)
      }
      state.followList.forEach((n,i)=>{
        if(n.id===item.id){
          console.log("i:",i)
          state.followList.splice(i, 1)
        }
      })
    },
    FAdd(state, { item }){
      let record=state.followList.find(n=>n.id===item.id)
      if(!record){
        let new_item={}
        new_item['id']=item.id
        new_item['avatar']=item.avatar
        new_item['name']=item.name
        new_item['subtitle']=item.subtitle
        state.followList.push(new_item)
      }
      state.unfollowList.forEach((n,i)=>{
        if(n.id===item.id){
          console.log("i:",i)
          state.unfollowList.splice(i, 1)
        }
      })
    },

    HotClick1(state, { item }){
      let editItem=state.hotsharingList.find(n=>n.id===item.id)
      editItem.show1=!editItem.show1
      if(editItem.show1){
        editItem.heatColor="pink";
        editItem.heartNum=editItem.heartNum+1;
      }
      else{
        editItem.heatColor="gray";
        editItem.heartNum=editItem.heartNum-1;
      }
    },
    HotClick2(state, { item }){
      let editItem=state.hotsharingList.find(n=>n.id===item.id)
      editItem.show2=!editItem.show2
      if(editItem.show2){
        editItem.messageColor="orange";
      }
      else{
        editItem.messageColor="gray";
      }
    },
    HotClick3(state, { item }){
      let editItem=state.hotsharingList.find(n=>n.id===item.id)
      editItem.show3=!editItem.show3
      if(editItem.show3){
        editItem.sharingColor="blue";
      }
      else{
        editItem.sharingColor="gray";
      }
    },
    Hotreply_click(state, { item }){
      let editItem=state.hotsharingList.find(n=>n.id===item.id)
      editItem.repy_items.push({
        text:'Me',
        icon: 'mdi-account' ,
        message:item.textarea,
      })


    },

    GrassClick1(state, { item }){
      let editItem=state.grassList.find(n=>n.id===item.id)
      editItem.show1=!editItem.show1
      if(editItem.show1){
        editItem.heatColor="pink";
        editItem.heartNum=editItem.heartNum+1;
      }
      else{
        editItem.heatColor="gray";
        editItem.heartNum=editItem.heartNum-1;
      }
    },
    GrassClick2(state, { item }){
      let editItem=state.grassList.find(n=>n.id===item.id)
      editItem.show2=!editItem.show2
      if(editItem.show2){
        editItem.messageColor="orange";
      }
      else{
        editItem.messageColor="gray";
      }
    },
    GrassClick3(state, { item }){
      let editItem=state.grassList.find(n=>n.id===item.id)
      editItem.show3=!editItem.show3
      if(editItem.show3){
        editItem.sharingColor="blue";
      }
      else{
        editItem.sharingColor="gray";
      }
    },
    Grassreply_click(state, { item }){
      let editItem=state.grassList.find(n=>n.id===item.id)
      editItem.repy_items.push({
        text:'Me',
        icon: 'mdi-account' ,
        message:item.textarea,
      })


    },

    dynamicClick1(state, { item }){
      let editItem=state.dynamicPool.find(n=>n.id===item.id)
      editItem.show1=!editItem.show1
      if(editItem.show1){
        editItem.heatColor="pink";
        editItem.heartNum=editItem.heartNum+1;
      }
      else{
        editItem.heatColor="gray";
        editItem.heartNum=editItem.heartNum-1;
      }
    },
    dynamicClick2(state, { item }){
      let editItem=state.dynamicPool.find(n=>n.id===item.id)
      editItem.show2=!editItem.show2
      if(editItem.show2){
        editItem.messageColor="orange";
      }
      else{
        editItem.messageColor="gray";
      }
    },
    dynamicClick3(state, { item }){
      let editItem=state.dynamicPool.find(n=>n.id===item.id)
      editItem.show3=!editItem.show3
      if(editItem.show3){
        editItem.sharingColor="blue";
      }
      else{
        editItem.sharingColor="gray";
      }
    },
    dynamicreply_click(state, { item }){
      let editItem=state.dynamicPool.find(n=>n.id===item.id)
      editItem.repy_items.push({
        text:'Me',
        icon: 'mdi-account' ,
        message:item.textarea,
      })
    },
    MyInfoUpload(state,{form}){
      state.myInfo=form
    },
    PublishCircle(state,data){
      console.log("form:",data)
      // form['tag']='game'
      state.dynamicPool.push(data)
    }
  },
  actions: {

    addfollow( {commit} , { item } ){
      commit('FAdd',{ item })
    },
    addunfollow( {commit} , { item } ){
      commit('UAdd',{ item })
    },
    postMsg(context, msg) {
      return new Promise((resolve, reject)=>{
        post(msg).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },


    postComment(context, msg) {
      return new Promise((resolve, reject)=>{
        postComment(msg).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },


    Delete(context, msg) {
      return new Promise((resolve, reject)=>{
        Delete(msg).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },

    commentDelete(context, msg) {
      return new Promise((resolve, reject)=>{
        commentDelete(msg).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },

    AllgetLatest(context, msg) {
      return new Promise((resolve, reject)=>{
        AllgetLatest(msg).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },

    sbGetLatest(context, {sid, count}) {
      return new Promise((resolve, reject)=>{
        sbGetLast(sid, count).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },

    sbGetPage(context, {sid, page, limit}) {
      return new Promise((resolve, reject)=>{
        sbGetPage(sid, page, limit).then(res=>{
          resolve(res.data);
        }).catch(err=>{
          reject(err);
        });
      });
    },

  }
}

export default circle;
