
<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      flat
      height="72"
    >
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      width="300"
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        color="grey lighten-3"
        mini-variant
      >
<!--        <v-avatar-->
<!--          class="d-block text-center mx-auto mt-4"-->
<!--          color="grey darken-1"-->
<!--          size="36"-->
<!--        ></v-avatar>-->
        <div style="position: center;padding-top: 10px;padding-left: 10px">
          <v-icon
            large
            color="green darken-2"
          >
            mdi-home
          </v-icon>
        </div>


        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar
          v-for="n in 6"
          :key="n"
          class="d-block text-center mx-auto mb-9"
          color="grey lighten-1"
          size="28"
        ></v-avatar>
      </v-navigation-drawer>

<!--      <v-sheet-->
<!--        color="grey lighten-5"-->
<!--        height="128"-->
<!--        width="100%"-->
<!--      >-->
<!--      </v-sheet>-->

      <v-list
        class="pl-14"
        shaped
      >
        <div style="position: center;padding-top: 10px;padding-left: 10px;padding-bottom: 10px">
          <v-icon
            style="font-size: 60px; color: #eea57e"
          >
            mdi-zigbee
          </v-icon>
          <span class="font-weight-black" style= "color: coral;font-size: 30px">
              Circle
            </span>
        </div>
        <v-list-item
          v-for="item in items_1"
          :key="item.title"
          dense
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      clipped
      right
    >
      <v-list>
        <v-list-item
          v-for="item in items_2"
          :key="item.title"
          dense
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <div style="padding: 10px">
          <v-card
            class="mx-auto"
          >
            <v-col>
              <v-avatar>
                <img src="../../assets/CC.png" alt="CC" />
              </v-avatar>
              <span class="font-weight-bold" style= "display:inline">
              Davis Antonia
            </span>
              <span style="float:right">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right" style="font-size: 20px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮上头条</el-dropdown-item>
                <el-dropdown-item>收藏</el-dropdown-item>
                <el-dropdown-item>屏蔽此条信息</el-dropdown-item>
                <el-dropdown-item>屏蔽该博主</el-dropdown-item>
                <el-dropdown-item>投诉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </span>
            </v-col>

            <div style="padding-top: 10px;padding-bottom: 10px;padding-left: 20px;padding-right: 20px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
            </div>



            <v-card-title>
              用了它，每天穿新衣！
            </v-card-title>

            <v-card-subtitle>
              天呐！这款爆炸盐太好用了！再也不怕把衣服弄脏啦，去污除味，就用它！
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>
                  mdi-message-text
                </v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>

        <div style="padding: 10px">
          <v-card
            class="mx-auto"
          >
            <v-col>
              <v-avatar>
                <img src="../../assets/CC.png" alt="CC" />
              </v-avatar>
              <span class="font-weight-bold" style= "display:inline">
              Davis Antonia
            </span>
              <span style="float:right">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right" style="font-size: 20px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮上头条</el-dropdown-item>
                <el-dropdown-item>收藏</el-dropdown-item>
                <el-dropdown-item>屏蔽此条信息</el-dropdown-item>
                <el-dropdown-item>屏蔽该博主</el-dropdown-item>
                <el-dropdown-item>投诉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </span>
            </v-col>

            <div style="padding-top: 10px;padding-bottom: 10px;padding-left: 20px;padding-right: 20px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
            </div>



            <v-card-title>
              用了它，每天穿新衣！
            </v-card-title>

            <v-card-subtitle>
              天呐！这款爆炸盐太好用了！再也不怕把衣服弄脏啦，去污除味，就用它！
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>
                  mdi-message-text
                </v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>

        <div style="padding: 10px">
          <v-card
            class="mx-auto"
          >
            <v-col>
              <v-avatar>
                <img src="../../assets/CC.png" alt="CC" />
              </v-avatar>
              <span class="font-weight-bold" style= "display:inline">
              Davis Antonia
            </span>
              <span style="float:right">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right" style="font-size: 20px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮上头条</el-dropdown-item>
                <el-dropdown-item>收藏</el-dropdown-item>
                <el-dropdown-item>屏蔽此条信息</el-dropdown-item>
                <el-dropdown-item>屏蔽该博主</el-dropdown-item>
                <el-dropdown-item>投诉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </span>
            </v-col>

            <div style="padding-top: 10px;padding-bottom: 10px;padding-left: 20px;padding-right: 20px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
            </div>



            <v-card-title>
              用了它，每天穿新衣！
            </v-card-title>

            <v-card-subtitle>
              天呐！这款爆炸盐太好用了！再也不怕把衣服弄脏啦，去污除味，就用它！
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>
                  mdi-message-text
                </v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>

        <div style="padding: 10px">
        <v-card
          class="mx-auto"
        >
          <v-col>
            <v-avatar>
              <img src="../../assets/CC.png" alt="CC" />
            </v-avatar>
            <span class="font-weight-bold" style= "display:inline">
              Davis Antonia
            </span>
            <span style="float:right">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right" style="font-size: 20px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮上头条</el-dropdown-item>
                <el-dropdown-item>收藏</el-dropdown-item>
                <el-dropdown-item>屏蔽此条信息</el-dropdown-item>
                <el-dropdown-item>屏蔽该博主</el-dropdown-item>
                <el-dropdown-item>投诉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </span>
          </v-col>

          <div style="padding-top: 10px;padding-bottom: 10px;padding-left: 20px;padding-right: 20px">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
          </div>



          <v-card-title>
            用了它，每天穿新衣！
          </v-card-title>

          <v-card-subtitle>
            天呐！这款爆炸盐太好用了！再也不怕把衣服弄脏啦，去污除味，就用它！
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>
                mdi-message-text
              </v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>

        <div style="padding: 10px">
        <v-card
          class="mx-auto"
        >
          <v-col>
            <v-avatar>
              <img src="../../assets/CC.png" alt="CC" />
            </v-avatar>
            <span class="font-weight-bold" style= "display:inline">
              Davis Antonia
            </span>
            <span style="float:right">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right" style="font-size: 20px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮上头条</el-dropdown-item>
                <el-dropdown-item>收藏</el-dropdown-item>
                <el-dropdown-item>屏蔽此条信息</el-dropdown-item>
                <el-dropdown-item>屏蔽该博主</el-dropdown-item>
                <el-dropdown-item>投诉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </span>
          </v-col>

          <div style="padding-top: 10px;padding-bottom: 10px;padding-left: 20px;padding-right: 20px">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
          </div>



          <v-card-title>
            用了它，每天穿新衣！
          </v-card-title>

          <v-card-subtitle>
            天呐！这款爆炸盐太好用了！再也不怕把衣服弄脏啦，去污除味，就用它！
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>
                mdi-message-text
              </v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>




    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Circle",
  data: () => ({
    drawer: null,
    loading: false,
    selection: 1,
    items_1: [
      { icon: "mdi-fire-circle", title: "热门分享", route: "/myspace/publish" },
      { icon: "mdi-account-reactivate-outline", title: "热门榜单", route: "/myspace/sold" },
      { icon: "mdi-alien-outline", title: "话题榜", route: "/myspace/bought" },
      { icon: "mdi-magnify", title: "热搜榜", route: "/myspace/nextsell" },
    ],
    items_2: [
      { icon: "mdi-incognito", title: "发会玩圈子", route: "/myspace/publish" },
      { icon: "mdi-email-multiple", title: "互动消息", route: "/myspace/sold" },
      { icon: "mdi-flower-tulip", title: "已种草", route: "/myspace/bought" },
      { icon: "mdi-emoticon-cool", title: "我的酷玩圈", route: "/myspace/nextsell" },
      { icon: "mdi-star", title: "收藏", route: "/myspace/collection" },
    ],
    messages:[
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify!',
        excerpt: 'Thank you for joining our community...',
      },
    ]
  }),

}
</script>

