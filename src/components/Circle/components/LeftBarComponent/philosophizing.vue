<template>
  <div id="main">

    <div style="padding: 10px">
      <v-card
        class="mx-auto"
        v-for="(item,i) in hotsharing"
        :key="i"
      >
        <v-col>
          <v-avatar>
            <img v-bind:src="item.avatar_src" alt="CC" />
          </v-avatar>
          <span class="font-weight-bold" style= "display:inline">
              {{item.username}}
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

        <div style="padding: 10px 20px;">
          <v-img
            max-height="800px"
            max-width="600px"
            v-bind:src="item.img_src"
          ></v-img>
        </div>



        <v-card-title>
          {{item.titel}}
        </v-card-title>

        <v-card-subtitle>
          {{item.subtitle}}
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="handleClick(item)"
            :color="item.heatColor"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <span class="subheading mr-2">{{item.heartNum}}</span>
          <v-btn
            icon
            @click="handleClick2(item)"
            :color="item.messageColor"
          >
            <v-icon>
              mdi-message-text
            </v-icon>
          </v-btn>
          <span class="subheading">{{ item.messageNum }}</span>

          <v-btn
            icon
            @click="handleClick3(item)"
            :color="item.sharingColor"
          >
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
          <span class="subheading">{{ item.sharingNum }}</span>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="item.show2">
            <v-divider></v-divider>
            <div style="padding: 6px">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 12}"
                placeholder="快速回复"
                class="MyInput"
                v-model="item.textarea">
              </el-input>
            </div>

            <v-spacer></v-spacer>
            <div style="padding: 10px">
              <el-button type="primary" @click="reply_click(item)">发送</el-button>
            </div>


            <v-list-item
              v-for="(item2, i) in item.repy_items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item2.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item2.text"></v-list-item-title>

                <v-card-text>
                  {{item2.message}}
                </v-card-text>
                <v-divider
                >

                </v-divider>
              </v-list-item-content>
            </v-list-item>



          </div>
        </v-expand-transition>
      </v-card>
    </div>





  </div>
</template>

<script>
export default {
  name: "philosophizing",
  data: () => ({
    hotsharing:[
      {
        avatar_src:"https://tse3-mm.cn.bing.net/th/id/OIP-C.tFxRVXHWbascR0vC8lfwPwHaHZ?w=165&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAFQAcgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAQQFAgMI/8QATxAAAQMDAwIEAwQGBQcICwAAAQACAwQFEQYSITFBBxMiURRhcSMygZEVFkJSocEzYnKx8BckJTSSstEmNTZDU2Oi4URUVXN0goSTpNLx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACIRAQACAgIDAQEBAQEAAAAAAAABAgMRBCESEzFBIjIFUf/aAAwDAQACEQMRAD8AtxERAREQEREBERAREQEREBERAREQEREBERAREQERCgIvJK8SzQwsL5pY4mDkukc1ox+JCD6oojcdf6Mt5kY6u8+Vufs6Zpdz7Z6fxUYqvF+jBcKS1SuxwwzyAZ/2UFqoqPqfFvUcvFPRUUA9yHSH/wAS5E/iPreZ2RXtiHtDGAP4oP0Oi/OP+UDXP/tWX8moPEDXOR/pWU47EN5Qfo5FQNN4nayhI8yWlnHfzoece2QQu1TeL1e3Aq7VA/3ML3NJ+gJQXIirmh8V9OVGBV01VSknGeJGD67eVL7dqHT90aHUNxp5SeNm9rXj6tdyg66LA/weFlAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFglatdXUNBTyVVZURQ08bS5z5Djgew7oNolca86lsFjaTcK2Nkm0lsLSHSvI7Bqq/UfijcKp0tPYWupYAXAVLm5neDkZaO3yVcVFTVVcr5qmWSaZ5Jc+UlziT9UJWTdPFOqfVE2umfFTg4+2c3c/57RwodetQVt5kklqZ6suPDGOk+zaD1G1vC4zIZX8gAD5hbUdNG3G71HA6KJhbz1Hxo4J6ZK9thnPRp+pXQDGNyAB/Nb9JS0VQMS1rad56bmE8/gom3j9VlxW0cp5LgF6+D45f/AAUlFjjfzHcKZ4zyScE/gVrTWxsJcDUROx+6Qf7ll7qz1C2tuGKMd3n8lk0bf3z+S234Yduc88HssLaJ2iY01RSgHO7PywtllPSEAPy1x4z/AOSyFk4WlbeP4tW3j+PqLbb38irEZ7l44XuO10sZ8yK+UsTm+rIMjXZHPRq1uO4z8l4dFGc5YBn6KbzE9wt51mEitmv9TWSTyBVMuEDDtAn3H0j91x5Vi2HxLsFzDIq8ihqiQ0NfkxuPuHqj5KU9YyMe2Vrlr2H1cY7rNk/WMUjJWMkjc18b2hzHNOQ4HuF9F+b7HrbUljdTxxVT5qON2TSzEuYWns3PKubTetLNqJjWRvFPWhv2lPK4ZzxnYSglSLwHY/4L2EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFg9vr/wCayVH9T6lodNUXxNR655S5lNACMvdjqfkEGdQ6ntGnaZ01ZKHTubugpmEeZKe3B7KgtQalu2oauSoq5X+SXHyacOPlxtycAALVvN3r73Xz19a8ulkPp9mMH3Wt+i1IoXSYJ4b7e6DzHHJI4Yzg9St1kEcfbJ7lfVrWtADRgALPXlB9KaNkk0bHY2k8hdyp0+58fn0Zy0Ny5h6k/JcAOc0tc04IIIKkdtvcm3ypQTxtbjjI+iytWZncOjDFbdWR18b4y5sjS1w7FeeDg4Urq6ehrWZ2lr8ff+aj89BPC4geto5BHUrp9U63MJyce0dw1MkcglCT7nJ+aYOTkc9D8kKymkMPjA/is88LAx36d11Kamszhuqat2T0aBtwr0x7/UxG3LyOndbUNDWTDLYnbcZ3Y4XVFTYKUgQsD3N5BLcnP1KPvsYyIYRjGBnIGfwW0YojuZcmWbx/lpC3NaMSEkj24C1KiONhw13Py54+q+lRXVU5Jc4NB7NxhavOepPflUyTX8Riref9MAfIc8ZWHMY4EEA9l6Q5WTpaMtK8csOR8+v0XyimqKaVksUj4po3BzHsOHNI7hdMZyPovhNAx4y0er3QWfozxFbIY7df5triAIK12SHHjiQlWnHLHIxskbmOje0PY5hy0g9CF+Ty17CQ4Hj2VjaG12bZ5Vquj3Ooy9vkzucfsM9Afkgu8dAi+UUscsbJI3NdG9ocxzTw4HnIX1CAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiLy5wHXoOST2AGcoNG73Ojs9BVXGsdtgp27sDq937LR8yvzhqK/wBfqG4TV1USGk7YIwTtijBOAAe6kviHqx93uEtuo5sW2jJj9HSWUH1OKg8MZleAfu5yfllBmKLed7vuA4Oe632lu1objAHH0WjO/Dgxn3Rxx0JW3AwsjYD1xlB9UREAoCQcg4I6IiJiddw6FNcZGANe7v1IW/8AEwy4IcMrgZHdZDnj7pI/BdmHkeH2HXj5Ux1MOjPHC9xJAB+S03wFv3fUAjZ3YAPKOl9ifx6LXJfHfta80v2+OORlMDJWHPGenPdAc915+oj447R4/GeOE90xkLZjrHxAhsUBOOHSMy4fRVm0wjprf45RenvfI4veRnnOGgAd+yRsllc1kTS57selvXBVd9f1KJ6ec46nC2qOgq66VscDM7iRud91vzK6VvsE1Rh9SdsYP3R+0pEZKG3RNbHDt8sYJA/mqRmrM6hy5ckx1CPVlphoqR4cQZm+p7j0z7NXBz1OSfbK6t0uktZI9oyyPJGG9x81y+/zXRM7XxeWu3xmhEgPuBlaDmOYS13+AuqteohEjRj7zQqt1i+HmtTC+CyXN32bsMo5nnkHoIz/ACVxAg9Of8dl+S2PdE5r2kh8bg5pHZwOVf2gNU/p23fD1L2/H0Y2PGeZYxjDggm6LAOf/NZQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAOVC9f6kFitD4IXj4+4NfDAATlkZ4c8f3fipm5zWtc5xAa0FziegA5JK/N2tL0+8324TiTfTwyup6YA+kRs44QRvkuOcknOTzknPUrdwIIc9HEL4UzC6Tf+y1eqt2XNaOwBKDxA3zJCXfX8V0cAdFr0rMM3d3LYQEREBOARnpnlCsZUfqJb0UFvnHE5if7OHCw+hLWvc2pp3hv7r+Vpfl+GcoDnoCf4q82jRWk7ZPXHssLJa5vLmkfMghYyPcKkStP068JtCZHuPzTI91KGT0wjWue4NaMkpkL7007IcnB39ieAFS29dDbp7Y52Hyu9A+8O5+S79tioqYFzWta53Bc7qcBcJtwhZne5zndeB6fyXzmutQ/+jIjAGAcLzsuPJlnW1ZjaV1NzoKWIbZQ1waSQBySopX3KascQ1zhH7E8lcisqaje1xe4k8knuvcbzIwOxzjkLbBxow9yr4VjuX04yeoCH5FbtDa624E+SB5Y5e95wPwXSFotED2MqrgHPc4AxxEHn5uV78mtZ1Dmvy6U6iHBa1zyAxrnE9mjJ+uAvsKKvOSKac5Gf6NwOApNV1VvsjRFRU7HVDmg73AOwCOpK5DtQ3hwIErW5OfQxucfisq5cmWd1hz05GbLO6R0jdXC+N5y0j3BByD8109LXeSyXu3VgcRE2XZUDOGvjdwQf4Ldd5V2jcyeMtqwMxzRMzGT7SYXJktF0jc8fDSkM5yxriAD3GF10yx8n67a5o+W+v0/BJHNHHLE4OZI1r2kdC1wyF9VCPDi6y11ibS1Bd8TbZTSv3/eMY5apvlat4nYiIiRERAREQEREBERAREQEREBERAREQEREBERAREQEREBD056Ih6IIprq9NstgrHtx8RVtNLAO+XcOP8Aj3X505ccftEnJz7lWP4s3N093pLc0/Z0dOHvH9eTnKrynbvkAPQclBuRMDI/4laLj5kn1dgLoyemN577SudAAZW5OAOUHTaA1rWjsOVlaz6pjchvJz1Ws6WaQhvPOAGjJJz7AIN188LM5dk/1V8DWA9Gfmu5Z9D6rvBY6KjfBA7GZ6sGNobxyAeVOKPwggwPjrtKTjltMwAfgXIKoNVKegAHutmOalIHmyyH5Ad/qropfCvR8BBk+Nqffz5QOfl5YaF1maD0RH0tEHAxlznkn8yiYtpRDK21RDHw8shB+8XYH4o69Pb/AKtTwQ9twaC7688K+/1K0Z1/RFNn6OP819Bo/SAxi0Uhx/VKr4w19kvzhPW1dQ7dNK5x+RwB+AXw3PPd38V+nYtNaYgwY7TRDnjdCx3+8tkWeyDkW2gH/wBNF/wVtMpnb8tZf7v/AIp5kg/adhfpmtsduk2yQUlI1zR9wwR7XfUYWk2PT8Z8uutNEwggB/wsZa759FS2SK/We+9PzoJZezyvoKqYcEgr9Fy6Z0VcgHOttE/gH7JoZ/uFcuo8MtGVJftgqIMknMMuOvtuyrReLLqLFY4Y3M/JfZlVC7g8fVWtU+ENncHGluVaw/siVsbx+JACjFz8LdT0YL6N0FZGBn0nZJ/slWgQyq2ua1zSCAtm1U01TIyGNuS49fYcBa9ZbrpbpHQ19NPTvB6Ssc0H6FSnT7GUFtnuTgC958qIADsuXkX8KuPl5PXTcNm7VrbdTstVH1DWiZ4GC5xHIUafFU/efHIAckuLTnjnKldJT0tbUy3SQ7mxN8x0eORI0d/kufPqSuMrw2KnEYd6WFgPHbJXn4b9zER28nBkj5WNy04TNc2w0roy+dg+ylbkFo/7xbclio6UAVdyhjkd+ztJAIXThlhpLfJdWQsbUzsLSIiNrDnqQonPPLUPfLK4ueSSS4+/sFpj88ttV6b4pyZL6jqHdpYpaLe62XGnqXuBLoSC0nHs0rl1Oo7+yV7TNtwRloY0Zx8vktNj3Rua9hIc3GM/Iro3umjnoKO6MaGmQeVUNHPqb0K3rWtb6s6a461v/fe/1LNAakmfV1cU7GEyRb5ZWNDdzQ5rcuA78hW5G9r2hzDkEA5+RC/PugJWNv7IH/cqqSohJ/dJAd/JXTYquSaOSGTrC4x/gDgZWvn67+P/AK29nryRSfku9kcYWV5A6L0ul2CIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICwTgZPQck+wwsrn3ioFLarrUl2PKpJnZ9jtICD866trjcNRXqoDtzfipI4zn9lp2jC59IwhpJ79Fquc6SR7z9573OP1cSV0YxtY1uO3KBLkxPHyK5eCSMdeAuueQcjK8CNjTkADPPRBzXMc3h3BIyr18PLJZDYLbXuoad9XIHvfNIwPdkHAIyqQq8iQZ7tV/8Ahwc6UtXy80f+JBLgOAPYLy58bAXOcAB1JIA/MrMpIY8jqAVErzT1dfQva+qNPGXEl/TABIzlBLGyRP5Y9jvm0g/3L0MdMhUfVXK5acmd8BXOq4yzjD3HafwWxYvEOudVf6VkIaXDAOcAH3ygunhAR2IUag1Lba+Msp5GmUgbcO+WeMrW/WOloquOKoeecF2QeM8dUEvWM89lDLtr+yUMTjTl08pDg0N4buHZQeo8QrvVu8tkjafzOhy47AgukkDqQvjPS01Q0tmja7245/iqutdHqi65nZfmCHIcA6TaXE9sKV08moLQGGoLa2H7pMbsnj3UTWJ+wNiTS0QmbNSXCqpnB4fhmHNODnBB7LvxmduGybZAAMPHBz8wtOjutNUlrSDHKTyw9V0xjt3Va0ivwPZDhZQ9FdDiajpaSotF186COUtpJjGS1rnNdt4IKq0SUNqtNA2piEhLPTE4AbiOeVbl3GbdXD/uH9PoqYvxo56iClqJ/hnxxteyQgmNweP2sLzeTE3vWn48nm1nLkrSZ6bVPX0slsuFRHC2nMZ2ObCGk7uoOFGaqvkq42MljjMjXkiZjQHOHbIHGV1KG31kInZCYqmlqQIpTE8cN7OAK8u03XCR2HxshB3MkkcG4HfKxxRjxWntjgthwXnts2enhqLTVskqGtZIQX558kA9Svn5GkqUnzah9S8ddoO3I9sLWNtmgiliprhBK6bAfDG/HmDt1XI8mUSmAtDZQ7yyHceo9s9FfHSJtMxZOPD7JmYt07L2WGu+wo45IJ/WY3vzseRzjlfepZFNZWW+CRjqmN5LonHEmc5xj5L5UViuDJoppjFFHE9jy90jTwDntwudf3wfG1b6aTILgS5pIG/uppXeTUSmlIvkiu/j1pdk9Lf6CQs2yROk4dwSS0jAVyacLmz1DCCN32hB65JVT6clfcaqhEjs1VFPHOJXcl0QIyHlXBY9stRcKgDDXPa1ntgeyjLuc9Y2jN5X5Vd/iSDt9FlYHVZXqQ9wREUgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICi2vKj4bSt7cOskTYh8t7sKUqGeJX/RK4/8AvoP94oPz/C1xkZjseV0S9rSAXDK0YC1pc49hx9cr5l5fKD/WH96DpkIsjKINGrxvGfZX/wCHTCzStqB/a8xw+hcvz7UuzK75L9D6AIOlbJ8onD/xIJPICWkDuFHNRWKsvFsko6acQvdwCe557hSbsvOOQgqvTunaTS8851HJDI6UfYFxLmhvc8qN63tlomr46myyxvZKDvZHjDXfgrkutlt12Zsq2k+ktaQeR9FyqbROnaNpJa93cGR3dBV2l7PfvjqIxZLfMbvOTgN7q2a7TNFXU72SBgqXMwH9g7391v2630lIHOijbk/dceuPbK3/AFbsoKRvWi7xbIamdrmyNLnFu3JIH4rZ0nYtLPpY6m+1MbKoyEeRK8NLRng8q4Z4oKiN0Uzd7DxjHZRu56HsFx2uw+Fzf3Dg/wAEEP1dp5rm0k+mKjcW4DoKeR24ZPUYWjb9N+J0ZZKyqkYHtGWyyk+n5glTu16PjtUpkiqpngH7rySpS0va1jR24P4II1p20XaFzJbqWunYBgsOQT0UsAwvLM8r0gLBWUKDl317Y7TcnuOGtp3ZPtnAVLXGiFyu0ce7ZGaVr2kYxwCe6tfXFR8Ppi+PHXyGsH1c4KtNOllZBDVvIMtPEaZ4/exjb/evO5kzjr7IeR/0Leqvtj8eaWNljt9RUv2unkcWxZzzngLVpWVd3M1VVzujpo+HOyRwOMMCzqiY7qWlaQGxsMhA65PC+1LM+msdIadoe6Sd0bgRlru5a5ebWJmnsn7LyaRNsXun7aXxhGnTURR0/wAW57ZGhj+MF2ep7rbulkdV1RnErIYvKYHvkPq3NPJGVm126Pzn1wjcw4OyFwwWydz9PZfW/srJqSJkTHk7iZA3ss7Zt5YrWWNuTPvilJcqanszR5LbpOZAMfvRkjjnsuHcqWWjDmyYcHhro5G8h4PcLy5krXFha8OyRgg5OFK5LU642u0sfgSRgtLiP2HdF6ftrx5i1nr2z04kxa07iWhoulmNRNUAeh7BAMjqS4HP8FdtppW01LG0EFxGXH3KgNooooTT0dO3a3OA49SRwSp1aJX7JqaU5fTu289S3ssuPf255vplw80Z+TOSfn467cr0vI9l6XsvoRERAREQEREBERAREQEREBERAREQEREBERAREQEREA9Cob4kt3aTuQ/dlgd+TsqZHjkrhaqoZbnp+80cLC+aWnd5LG9XPaQ4AIPzN7jJwsM+836hWVpjw7rqiC5Vl5p3xOFPOyjppM73TFuA5wHb/ioNUWW+wSSRyW6sa6N72nbBIW5acEggdEHtrgR978Flzg1pORwPdaTqS4x/fpqpuP3opBhfJzZmEtkDmng7X5aefkUAB0sgawZfI4NaOpLnHAC/TumqH9HWOz0eAHQ0sQk9/MIy7Kp3w40zJdLnHc6mM/o+gcHsLhhss7TwPwV7tGB0we4QelhxAGScAdVleXt3NLffhB8nVVMGvcJG+kEkd+FxKinuV1qIZIpjFSMcDgn72CuJf5KigmcGFxDhkAd+VsW/9ZZ6F80OWNEZdG12NxOOgQTFrdjWtGTtAQ5PZVPDr/UdqrZKa90EgjD9rSW8gDuF9arxQlJeyjpJJX5w1rWDv2KC0gHZ6fQrg3evulvqGSMaX0zhy1rc4zwoXT6n8RbqY46a1zQsceZNuBsPdWDbaarjpozcHB8rm/aBwzz80Hm23mhuDQxr9k3QsccHPToumQ3PUfLkKA6mtNUZ2XC0tcyVpyWxcB3boubb7/e56htLVukbKGjh+ARg+yC0B6f7+q+g6fVcq3SVEjG73E4wcrrBAWHZx+I/vWVg9EEG8TZmxaXqIyfVUVMEY/A5VY6Qqo45p4Xy7RKwbQTwXDjCm3i9M5tBY4Q44kqJXkD+q0KoaeXypA8Eg9QR1BWOfF7KTVy8nB78U0Tq8W2Wvq3SwyxCRgbH5cjgzgDjC+VDb9RUu1rGMdFuzh72uYMdxleaS8Cpp4tjYZqmNobIyX+kkHsCvErbpUVLPh6asgieWjY5xLGnvj5LyIpkpTws8Pwy0x+u3yEs3eXCZZhzHHukazBbn5YUUqNTV4nl8lrPJztaxw5IHdduvlljoTBE4Oq2MaJGjlzsDnIUeZV2F+f0hQyRzgAF8W8bh3yAQsOLg7m1ocnB40RabZI23aK9GulliNLTNqvKc+GQN5GwZIyVuz3WsjtfxbWtE5lMeAMj6gHhc6mrtN08hlo6Wc1Bbti39A48dyVvXe5ut1JRjyo3VE53GItJwT93hXyU8skRFWuXF5ZYrFWxo2uuEt1nrbk6UU1PSShjS0gGRzwOB+asG0Plqa2sqQwshkDNoI6kEjlaul7POLdT1N0jY6tn+3Ldu0RNP3W4UpjiZE3DA0f2RwvSpgt5ROtPYx8a0zHWoh9B1XpY7hZXdD1BERSCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgHoVjHHRZRB424OQRhZLGkngc/Ie3zXpEGpUNo4oZpp4oSyGN8r9zGEYaM91+brtVTagv1RJDG0OrKryKaOMAAN3bW4wr013UyUulr1JG7a90TYgfbeccKqvDG2xV+oxPK0ObQU5qAD3kJADkFy6es8FltNBb4gB5Ue6Q93SuwXErrgYCD+PdZQFh3QrKFByZ6Okqa1pmaHENGAVv5ghaGAxxsAGAThac9XDFP6hgkYyuTdtOG7uZLFcaiAEZIYT9fdB2Ky32e4D/ADqKnkdyGudtz+fVcao0zbI3CShpqZj2kO3HBwR7kqKP0TrA3BrI7zJ8CHA5c478HqOqkLdJXNoZH+mZ/Kzl49QJ/Hcg7dLWbNtNLPTNkYA07HNwtw1dE3PmVUA7ffaFDT4dxGV836Xq95PpOT6e/HK8u8PrS8sNTdat5YegkLcn58oJVPdLPTgM86N8jgS1rCCSuIaNlbWx1bYQ3bjnb/NIdKWmhe2aF00haMAyuJAx+K7VKxrfSB2H+Ag6EDGBjdrdpwAeOq2MLxGMNHC9oCwc4+nKyiCO6n0vb9TU0ENVI+N9O8vhkj6tJ9wqtr/CvU8MrhQyU1VByWOc8xyAexaeFehWMIPzVPpbWFumIdbKsOY4EOiaXAkdwWrMtz1dQxD4j4yCNx8sOnYW5I7ZcF+kzn+KprxXurJa2gtEZG2kYaifGP6SThVtStvsKWx1t9hX0dbdHzmaJ8z5gdxMeXEfgF1mX3LWsuVuZOf3y18cmBz2CnvhRZmCjuF2mY13xLhTQte1pw2M8uGfdWQ+322U7n0VK4joTDHk/jhVnFSVbYaWjSk5auy2umoK59sLJq2J81O127LQCMEkrraTsF01Fdae/XSDZbad3mQRzAjzngcbW+w65VlXLTdhuzqR1fRRymkx5HG0NAOduB2XVjiZGxsbGhrIwGsDRgBoGAAq0wVpO4Upx6VnyZY3H8sdPwXrBWQi2dAMoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgh3iRn9U7pj/tIP99QHwkljZernG4gOkoPT88PGVa+o7e27WW7UP7U1O/Z77m+oYX5+09c5dOX+kqpWuAgldFO3AB8s+k5yg/TA/wD4srVo6ylrqaGqpZGyQStDmOaQeoBwV6qquko4ZKiqmjhhjbukdIQG4690Gwiig1/oncW/pRuc4zsdt/DC6dLqTTVa3dT3SkcPnKxhz9HYQe6+3umcyWM8ggleql81PR7oRmaNhOCSOR9FuNqaOQAsqKdwPdkrCP4Fe8wPGMsdnsHA57IK9PiTSUlTJTXKnkje13Ba0jIHGV9JPFLTLXEBkzgBn7vsuxqGwaTnhlrrlHDH5LHOMmWtc7aCcAHuqPlpnX+8GkslH9k5+yBsbDhsY43yY4QTar8WaqScsp6FrKbdw8n7Tb7ge6n2naq3XuhguUEz5NziHtfw6N/cKr9U6dsOlrLb6WRvnXutcJZJd2WxtHUNHspR4S01Wy13Gd4LaeapHkZzztGCQgn85GQwNwBwfn80ijO5uAFuFjT1GT0WWtDOGgAIMjpj2WURAREQEKFcu73u02SlkqbhOyMNaS2PcPNk9g1vVBm93Wns1srbhO9rRBG8xhxGXyYIDRlfnaGO46pv7GPJdU3KpaXuyfRGTz+QWzqnVFy1PWuleXspI3baSnactaCcdB1JVk+GulXW6ldeK6HbW1bdsDJBzFFnrjsSgnVptlLaaCjt1K3ENLHsBPVzs5JK6AzhAiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPPXP+PzVP+JGkJxPJfLdE58cm41rGN+4f3sBXEvnIxkjXse1rmOaWua77rgeMFB+fdI61uGnJGU0u6a2vfmSA53M3cEx5Un8Q7zS3uyWyqtVY2WlZMTWRB/2jHOHDXtWzqrwyNTJNXWIxse4OfJSvyA5w/cIVU1lJcbbLLR1kUtPK04fFIC3JHcjofkgl2lNEU2pqGaoFwbDURyFjosNJDSeuOq3Kvwp1FC+X4Spp54252k5Y5wHTIyoXarxdbNUsqbfO+J7cZGfS/H7wVu6V8SaO4mOjvGymqzhrJh/RPJ90ED/UTxCid5cdPKBnjZUkN+owV7GkfE6I7WxV3HdtS4j/AHlf7Hse1r2EOa4Atc05aR7gr2EFAnRPiVcfKZVsnMW4NAq6kkMHQnaSVa2k9KUGmaMMaBJWzNBqpyPvHs1vyUoWMIPztqmprL/q2qp3OGPjRQwDsxgfsOFfNot1NarfRUFO0Njp4WM44y4D1EqmNd6duNmvMl5pmvdSVE/xTJI2kiGXduw7H0U10p4iWu5RQ0l1kbTVzGtG9/EUpHp4J7oLDCLnOvFkY0OfcqIAjvNGtOo1ZpKlH212pB8mv3H+CDuplQSt8T9H0uBDJPVOJIPks2j83cKOXHxednFrtY28gvrH8k+4DOEFvHsufcLtZ7ZGZLhXU1OB/wBq9u4/RvVURcfEXWVxDmCsbTRuGNtIwM49t3VRWaoqal5fUTSSye8r3OPP9pBcGovFOip2GCwMFROR/rM7SImfNrTyVV1RPf8AUdwc95qK2smfw1oLiOwAaPSAu5pDRjtTmaQ18dPDTyBksYGajHXOFddj05ZdPQMgoKdoccGWeQAzSOH7T3IITo7w4bRuprlfG7qppEkVLu9MThyC/HGVZ4HTt0WQsoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBhc25WWzXWN8VfRQzB42lzmDePo4crpIgrOv8JrJI2V1vrKmCRwJa2TEkYPtk8qGXDw01dQ+qGOOsbnI+GJD/8AZPKv44UZ1pfxp+y1E8Th8ZOPIpBxkOdn1fggq/Tuu7vpt7rbdIXz08UuyQSE+dCW8ENz7K2LZq3TFzjY+nuUAe4AmOZwjkafYhyo6zWQ3uC+XSvqHsZTsfJ5h9RfMfUfwXAhpppjJ5IJ8sFxLcg4HdB+rWva9oc1wc09HMIc0/iFnOOufyX5fo79qamLIqO41zPV6WRSvdkj5ZUgovELW1ska2rlfUM3AOjrI+S3v80F9T09PUxvhniZLE4YcyQAtdnjuq61B4X22p+Kq7Q98FSRvbA71Ql3J47qXab1FQait7Kqne0Stwyoi6ujcOxC7mOnH48oPytXUVfb6iWmq45I5o3FrhIXA8cZGf4LU4zzz8uc5X6Zv2mrNfoHxVlOzzi0tjnaAJGH3BVD6j0xdNN1jm1EbnUvmA084GWPAOQMoORWW+voPI+LhdEZ4hNGHddjuhXQsmnLhfGzOp3xsZC9rXuf1556L1qO8xXmS3SxsMfk0jIHs7BzABx9VL/Dxjf0fXv/AGnVTd34NQZo/D62RiN1ZUzTSAgubHhjD8uVv3fStsmtc9Pb6WGGoia6SJwHJwMkE/NSfjJPTk8LIJB/hx/NBTmm73W6Zu7JhuawvEFXEeA5mcHI9x1C/R1JUw1cFPUwuDoqhjZGOByMEBUJr21x0ldBXQtxHXNcHgDjzW8fmp/4WXU1lmmoJHky2+bDWuPIhf8Ad/mgsRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGCqB8RbzJeL9LSQOc+noHfCxNYctdLnBOFdeoK8WuzXeuzg09LI5p/rEbR/eqD0nRvu9/ZNNy2Fz62c+7i7IQSO5RDTujoqRpDaqs2iQj7xLxl35KJ21hgt1bUnLd7HtaT2A9K7viJUF1Zb6MPGIoDMW553SHgBcapcIbNTx8jzGtBB5dzzlDp9tDUZqr3HK4ZjpI3TPzjA3cBWXdLPbLpE+KogYSR6ZGtG9p45BUX8PqIQ01XXOkjJqnmKNufU0RcnKnH4Hn391bWkRaJnSsWOvGhLzHPE9zqKVx3bSdskXs8fvK77Td6C80cNZRStex7W7xkbmOxkhwURuVuo7pTSU1TG1zXNyxxGXMf+8Cq+L9QaGrhNR1D3Uz5MObyY3tHPqHTKqtD9AdcHuVq19voLlBJTVtPHPC4fdkbnn5Lnad1Fb9Q0MdVSvHmNa1tTESN8cmOchdzsEQofWGgqyz1Bq7XFLPb5C5xDMufC45JBA7LX0dqCmtZfb6xvlMml3+Y4FpY48evKv9zA4EOAIIwQehHzUA1X4d0F5L6q2mOlruS4EHy5T2zhBtxyRSsbJE9r438hzCC0j3BXrJH1/v7KrYa7VGjqs0tbDKaYSEeXJkMe0dSw+ynVv1JYrjHG9lVFFI7jypnBrwT7hBr6voWVtjqiG7p6UefF3wB97+Ch3h1dH23UdHHu+yrs0sgJ455arOcI6qCVgc17ZInx8YIOQQqQaXWu8scMZoq8HOezH5QfqQL0tejnZVUtJUsOWzwxSj6OblbCAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIIb4kTPh0rcdvSWSGE/Rzscqt/DtkXxF0Jka2V0cUTBu9R9XYK3dVWp97slxt0ZaJpWNfCXHA3MOef4r83ONTb6maNshZLBK6JzoXlvqYSCQQmhcwfo29VddRVVLT/pKkBge+do3v29SCuNqDSEE9M+SjmcDTNLoo2AGN7QPceyr21y1E1yhlMkhl3GQv3YcfqVLqTVclPWGjlyIWuEeT6g4k4OQVlMzWdt64oyRqJ7drSVpnho7fLI4sfukIHYNJI/j1/BShwDXOGSccA/ILVpp6CjjiqKiZscIfuia4hgYXAjbt9itoTwzFz2Oa5rjwGYx/BddreVdOCuC+HJM5J6MO2n2/vUX1w9sdgkyGlz6iNgLgCRnPQqUElxHGAOMDooZ4iPItdBGHY3VZLm/RpWOnTFo/EHsN8umn6uOvpCdm7bK08xyDPRwV/6b1NbdRUbaineGzNAE8B+8x/Qn6KhqSJhs9QXgHHmPbwOMe2VrWG+3Kw1sddROOWjZKw5LXxkjIIRD9Qg56IeVwNO6ltmoKNk9M8NlaGieFxAkY8jn0+y7wOe35jCDm3azWu8U0lLXU7ZWvBa15HrYcHlp91S+qfD65WTfV0G+qoPvOLQfMjHscK+yvD2NcNrmhzTwQQCCPxQfmO3X+92l5+GqJAGuyYpcuaCO2Dzlc6sqZa2oqKqbaJZ3GR20ftE9FcfiDpOxfourvMTYaSqgwXn7onOcBob7lQTQenpL7eoXyMzRULxPU7h6SR0YguvSXn/q3p7zhiT4GLcCDn5ZXdXhjGsa1rQGtaA1rQMAAdgF7QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEQoOTqOtNvsd5rB96CklLOcetw2tx+a/OFspjcKmqdICWxQT1U5HyGRn8Srq8TrgKPTcsAP2ldO2If2W+o/wAlU1oBprBqmsx/Timt7D/afvP9yD42CLMs8/G0AMAHv1Xqj2z3p0BY37eobHG53q8pwPDh8197H6KKeTjl7nnPs0Y/ktSwRmp1DbsZw6qMh+gyUXpbxnaxm2COdtQKqWaaYECOaUkDLR0DQt2koWU0L34kbJTjLmBx2vb+8B3/AMey6uTzwe//AAXuNkTjtkOA5u0nHv2VP6rP8t8ueuekxeHmGpilpsw4c17dzXHnLzxz9PZQPWIrK2KjpZWtZ5LnyiTaR5juePZTGClNDLJAH7oZnOkgP9nqFDPEZ72stPPJMuee30XbbURt5GKbT9R2MeVZZATk7JAcf1iVvaHttLcXXmOqja+LyY2epuSHFxIIK5sjsWNhJ5c3A987lKvDmP8AzO7SftGeNn+y3P8ANc09u1w7naL3paqFZbp6gQB25k0ROWnPR+O3ZWDpPxFobgyOiu7209YMNEziBFJ26nuulJGyRr2SNa5jhgteNzSPmFBL9ol0j5Ky0bGuOXSU7uOfdmOigXbHJHIxj2Pa9jxlpYQWke4K95znC/ONp1hqnTj300U+9kb9r4KkGQNLeMAu5XcqvFbU80Rjhgo6Z5ad0rAXOz7gOQdHxYvMUstus8Eu40++ara13p3u4axwHcKaeH9pbbdOW/LNs9UHVMxIw7LzkA/yVW6Q01cNV3U3Cu3/AAcVQJquV+Q6Z+d2xmVfsTGxsZGwAMY1rGAdA0DAQewiIgIiICImUArGUBWUGEWUKDAWVhZCAiIgIiICIiAiIgIiICIiAiIgIiICIiAiLy8kNceeATx8hlB6yirW4eK1opZaiGC3VUk0MkkbhIWsbuadvY5wozV+K2p6h+yko6Sna44a1rHTvd8gTj+5BeGQipvUPiHqOnbanULHUZnoRJUxVUB3CYOwSzfjg/Rdm5+ItTaafT7X0Dpp6ukpqmsmdlkTmvaCfIx3QWWi51putDeaGGto5A+KQDIBBLD+65cXXd2uVlsEtdb5BHUNqYI9xGfS5xBQStFAvDnUF5v9LdpblKJnwVEccWG4w1zcqR3vUVksEDp7hUsa7B8uBhBmefYNHOEHaQqqbP4l3i6XkUTLS2anqJNsLIsiaFmfvPPRWm05aCeCQMgkZBPbjhBT/i9WudVWagz6GRSVDvq70hReqjdSaItQLcOuVznqHfNkY2tK7HiyT+sFKM/+gx4AI9/quLqOWqbZNFUkxYGsoZqhoZg8SuG3cgULfLtRJH3oZXk/IjKxoaIPv0LnDIjilcPqcLnT3KeMMpIS3Z8OyOTAxyQCV3NAwH9L1EhwGspnFpcQMkkccoLPz9MoOvH+CufdLpS2ikfWVDJJGA7GCMZG7HAJHZc6w6oorwyfzdtNUxb5HxvcA0MHQtJKnekadwxN80Sku3AENGfSCevCgPiO77S0D2jkP5lTSe6W1sEzoK+h84ROfEHStcC8NyAeVUN4vNxvU7XVr2EwhzI2xjDBzzhPKZ+piNNipO2x04/e24/MlTbw+aRZ6hx6PrZP4NCg1ZLC600rA9jpBtBAJ3AhT/QTNthB2n11czu564CgSn+OOpWWnDmnjr36LzK5kEck0rtkUbS57jkZa3kqvota3mru76Wipop4Jqjy6aN7TkR5+9kIOBVUtOdWOpaphdBNc2NkbkjLJXjphXNS+HuiqaRsraDe5vI857nNB6/dKqfVMJpNT0dRtLfNko6l4wS0PDhkN/JfoKneJIYJBzvjY7P9poKDzBT09NGyKCKOKNgAayJoa0fkvvwuNqa4T2qxXivgIbNTU5fE4jID8gAkFRTw91LqDUUl2NxkjdHSxwhhZGG+t2Sc4QWJlFEdX6v/AFUbbiaP4k1fmDHmFm3Zj5FRL/LEDn/Qv/5B/wD1QW2irWyeKFJdLhBRVVA+mFQRHA6JxlO8++AFKtT3S62i1z11upm1U8UkQMTmnlrzj0hvKCQcLHCp93iTrVrS42BjGsZve58U4AA7+oBa0PifrOseIqK200suM7YoZHux24BQXTwEyCqd/WrxfqsNhtWzc7G5lJsPXGMvcrH05VX6qt8RvdEaWuYMPG+NwkHZ3oJ5QdsLKx2QIMoUWCgyiBEBERAREQEREBERAREQEREBERAREQF4kdtaXc4aC4464AycL0SvMhZseHkBha7cScDbg5ySgpG76g8OZY70ynsUwuM/xLGVDy3iY5G/k/j0XD0VqC1acr6urr6V9Q2WnEUYjawljg7O4b1NtRWbwtoqG5yxTU36RdDO+ma2pe9zp3AkelvHVV9pp+lI6mpOo4ppabyB5Aha7d5odnGW9sIOjrfUlv1PWW+pooJ4hT03kOE23JLnEjGF1KjVej7lp23We40Nb8VSU8UMdTF5YMb2jBc0nP8ActHU1v0zJZLVe9P0ktPTS1dRSzske57tzOh9XPZa8NRoqksNrkntvxl3knkFU0zPY1sTScZI79MILO8OqrTstsrILLFVxtppWfEuq3Ne+WRzSdw2jCz4oEO0pPgjJrKTjIB4cT0X003QWw6Zr6iyW6ehfdKWcxxSyOc8v2FrCHnt7Kqb3p7XFuonVV4dP8IJWMd5lSZRvJwDtKCTeHtLcq3T+p4LfWuo6t1TEYpmYByGfcJ6jK5lBoDV97rXyXWR0ETZXNmqaqXfK4A/9WDlcOw2fVt0hrJbL5/lU72tqDFUeUASM9Mj2XwopNU3CtZb6aurHVbnvY1jqqRuXA4IBJQX7YNM2TTkAhoYmmUgebPLtMrycDJPsvvqGQssV8fG7DmUM5BYeQQOoIVOHSHilkf630GR8c49D/aU6tlBe7boW9094834vyax5Er97gx33RuQVXY9O6g1ZLVfCytkkpWs8x9XM7ID+gGeVrjzrPeHQXNgqzbnvjdC55dGXNacAH2W1pe/amsrqwWWDzjP5XxDfIMv3D6ei+tkc+66yoTdIWOfWV7/AIuGRh27nA5Bag+Nj0vetVS18tA2GNkT973SEtYHOOQxq9ai0te9LMon1s8RNYZWsFNI7/qwCc4x7qVXS73PRF9it9JTxU1oFQaoxxjJqoZHclzvcdl68U66C4UmlKmnfuhqIZ6hhHI2vxjn5YQTbSNFR1mjrNFWRslZPRuEplxlweXD7xOfkuBT+F9DSm8S/GufJNFURW9jnGOOAPGA6UjqB0/BfWe0X256F0xS2Z5jqWshlJbIYvQQT1byoJYpb5SawtNtraype+Kvjp52OmfIwjHTlBqyabtsd1NpOoaLzWODDOI3in83oW+ZlbeodC1Om7e24VNzpJhK9sUMcLXh0hPqyxxPIU11voezPp6y8Uk0Fvli3SStl9EEzvcf1iqnqrpc6yCko6mrmkpqVx8hj3F3lZ4c5qDv6Z0NddTUtRWQ1MFPBFN5LXTMe7e5uC7bj2V7UdFR22308BZTMZTQMEzwxrY8saMudlcrRn6EjsFtgtNQyeFkZEjxw4zn1Sbmr1q2xVV/tktJTVs1M8AvDI3YjqOOGyoK113rSO7ONos+fgmyYlmYMPqZc4DWf1cqT6C0hDZqR95urGCtmjMjGvHopacNzux+8eV89G+HrLY5lxvQjlrWE+RT8PigAPDiuX4h62EvmWK0zZhztr54ycvdn+jjPT6oI9qfU8131DFJaoWeVSPbS0Uflh/nuDupb3BOFd9nNyNuoDc2xtrzC3z2wtDGNfjO0N7fNVXpOz2bTNPDqTU8jIZ5WF9spXjdII+vmGPrn2+qta13Ohu1FT11HIJKeZuWk8EEdiOxQVb4pVeoYqtsDZahllqIGRlgOIZZW+ogj3UJt1Xq20UEtfb3VdNb5pfLfURDbG+UAjGfdTrxerHmSxW8A7GMlqXkjDS5x8sc/gVHr5drZ+pelrPQVAkkZJJUVrP2mStByHfmgm+hWv1TaJ6jUccdy+HqjDSOqmBzmNA9XK4niHUaYtLXWW2Wikjr5RG+oqGwAGGNwy0Rn3Kj9FUeINnobfHaDXtpKmD4togh3sBlJPXC4F4qr7U175rwZ/0hiPPnM2yAAen0oLT8O9GOoGsvlzhxVysBooXA/YRO53u+Z7Lb8Rb1b2UrbMLlLQ1z3Q1Re2OVwdF0xlhH+AoVbr14oOmt0W65/DGWmafsPR5G5oIyR0wrN1Hp/SFU2S83+LPw9OGukdM5npYMhoAI5KCjq2pnZB6L/NVh4DHRbZm+n57yQvhb9jC+Zt2NBKCGgMbK5zm++5hAXm6TW6quE7rXSfD0jn7KaH1Odt7E5zyV1Y4KpscQOjnSFrGgyFlaC8+52uwg8/FS8j9bqn2OGVfI/Byn/hzeaOOarts12mr6yue2SnDo5AGtjad3qeSq/nlipAHVelYadr8hrp/jGZI9t7laOgbFp+agtuoYaBtPXO85o2SyOYMHbkBxQWCDkfyzlZHQLDR0+mML0gIiICLAWUBERAREQEREBERAREQEREBERAQosFAXynjbLDNERxJG+M//ADNLV9ey8u6D8EFH13hld6OlvFyqaumZDSRVFTHFEC5z2Ny5oyuVoTTlt1JcaunuDp2w09MJ8QuDNx3bSHOPRSrW1J4gOu1dTWt9zqbXWRtf5UG50Tdw2lhIXvRuhbxBS303TzKI19OKWFsb/tGbXbt52dj2QautKvRdusZ01aHb546tlUPJcXxxOaXB26ToSoro2w019uUjaqZjKeihNZLCT65wwbto+R7qaWTwrd8TJPe6nfCyZ/lww8mdgPD5XH3UcvekdU6fuVQ6zwVclNL5jYJqMOc4RP6skwgtLSeqrRfo5KOjidTzULNjqcN9DY2nY0sPstDxRc0aVlB4LqymDf8AaK1vDXTlws9Jcay5Quhqa2RjY43/AHmRNGfWPcr7eIlgvN+pLa22EySQzO8ym8xrWPa79o59v5oIn4b6jsNhoLyLnViF81TFJGzy3PJaGbcjauJqKOlqa2q1Jp0Ti3ipZ5r9haYKo5cTt64OMrvW/wAI7nKA643GCAHbllOzzHfMZPHCnth0daLHQ1tBufVQ1uPiBUhpDhgt6dEEe0v4lW2qhgpL29tNVjbGJ8HypewLndvmpdfamnqdO3yWnmhlYaCfD4Xte3kcctVf33wre6SSexVDGse7Apqgn0hxx6X9MeymVPpxts0rV2egYX1E1E9jyXj7Soc3DiT9eiCtfDbUFhsT7w+6VQg89sAi9DnZLc5+6FqWyqpq3xEp6unk309RdHvidgglhaSOCuvYPC2sqHVf6f8AMpQ1rPh/h5Gv3Z65Kllq8NbHaLhQ3GGrq3yUkrpWNft2k7cdkHR1hpODU9NTxtkZBVQTAsnLNx8sn1NI9vZVdr+2UtjbpyzU000zaajlkLpiC4ulf2A6D2Cn+vP10i/R1Rp2au9W+GeCjG7kchxaoJRaT13qG7UtReYKoNbLE6oqK07T5bSDtY0/T2QW9a5KS1aes76uaOGCmt9L5r5DtaD5YcVRr7rQnWkl3inaymNyM8czmZDQTtD3D+KtvW2nJ71ZWwUUj2z0bd0ELXHZNtbjbj3+f/FRq2+FlHJZ4jcJpoLtM3flhGyA/uFg4OPdBFp6XWms7lVQR1XxtPBMdsvmCOjawu4c1h+Sm8HhbZW2l1LNLI+5PzIawENDXkfdjb+6ojV+HOt7dK422UVEWTh9PMYTxzy0lfL9XvFoAjbcsAf+tDp/tIOhprT2trDqN9LDMynpYCH1U0zwKWWDsQPcq4ZKqmip31U00Qp2RmR82cMDAPvFyok6M8Sal328FUS8jeZKrJx05AcVdcVqg/QkNnmZuj+BbSvHqOHbMEk/VBWOsfEb4lsttsD3NhcNs9aPS5+eC2MdguFpCPRlLOLpqG4MdNG4up6Mxvk9Qz9pI4DqOq7LfCO8vkfvulHHHvdsAjke4Nzxnstxng90868k+/lwf8Sg+euNR6F1Ba2spaqQ3CleH0bhA5oxkBzHEjoVz/DLUb6G4us9S4/C17iYcniOoHJx9Qu/F4RWdv8AS3WreOAQGxtHvj3XLPhhdIr6z4CpENtgMU8VW8l0wc05LGtHdBYeqrbp+vtVY68mOKCCMvbUHAfEcE+h3XJX5ykFOyeTysyU7Ji5nmDDnxB3G76q4de2DVl1daorfNLVUuI4Z4PSyKOVgI8x/f5lbtq8OLTS2aqoa3ZPXVjMyVO3HlP5x5XyGUHZ0dqC23y1QikYYnUUcUE8IBxGQ3jBVV+Jp/5Wy4x/q9EO/XDeuVYNXp6v07pWWl03NUNuNPI2d8sTR51WXHDg4fTp9FW7NNa91Fc6ee50lYHyPhZPU1o8sMYzH7/yQXtb8/AW8df80gH4+WFW+vrBrK7XKlio3vqLdOBsha7bDTPGATIFZ1O1kMFPEx25kcbI2kEOyGjbnIXs85+nYc/gg/NmpLG7TV0it0lSZXsgpp5pWN+4+QZIZ9Oy2RXW8Nb/AMotSg4bloMvHHQerH0Uk8RLRf6zVPn0Fvq5o/hqNrJooi6MPAPG7GOF8hp7xc2NOG7dgwDJTkgY4HAQQ661FPKyn8q43WsALsi4btjP7GXFXd4bY/VK1/26j/fKq296c8RCynFxo5qkbvsxStbKWdufKCtjw/paqj0zbqeqhlgnY6YvimaWPaC84y08oJXgdUCBZQERED3RPdEBERAREQEREBERAREQEREBERAWCsogdkPZEQYwEwFlEGMBYdgAk9BknJwAAM9fZeivlMzzIZo848yN8eeuNw25QVhfNSXqk1PbTbrrTVVrcQ98DZGtZENwa9sx7nuFzdL3mFmt7xNV3ItoCKsx+bM4w8kYA7cc4XRrPCy1QR19ZLdakMibLUvBa3AABeRnqoBp+0WO4Pr33W6Cipad7WwuDQXTOc7tn5c/ggvz9Y9Mjd/peh4wD9q3greFXRvpjWNljdS+W+YzAgs8sck5/BUVq7R9s0/bLdX0dwfVtrZCGFwDWOZtyHtwphfKS+v0BYaW2Bxa+npRWRRDMskThkAH26ZQa2mrzfdS6zuFXBV1EdnpwXPg3/ZOhb6Yxt6ZPJK6nijcLjbrZapKCrmpXvqpQ8wOLS5uwHBcFB9GO1LDSanbYmu/STTSMAaGO4a8hw9XHC+GrZvEKSkpBqZpbT+aRANsTfXtyfufggu3Tsss1jsk0z3PlkooHPc925ziWjkldNxABLuA31HOOAOcnKpi2VHjH8Hb20UchoDFF5O1tP8A0II6E8qSa3qtcPp7dbbVSvMNdCxlXPD6pDK4AOjJHQDuUHE1Tqi7X2/UFl0vUzs+HnLTNTOIEsufU8uH7LVPpr9adPstVvvVzDq6aHc6V7eHEdXux0Cjlms9o8PbPUXe6SxvucsZBJ+8XEZEEfc89SojaLdV6yvFVqO+StgtMUwdI+oftZIxh9NPGXcenugu2KWKeKOWF7XslY2Rhbgtc13cKtLvNr606uilpTNcKSu4igGRCyLIyx2PbqrFdhlBIaINy2jJpAzGOGExgdvZU8dX+IFuvdvoL3VCma6opn1LXxRHbTSP5JLfkg3rjcvGKkNdUvY6GihdJJvc2EtjjB4JP8AuXa9UeK16882uR9QIcGUsiiAaT2y5fXWusKjUL5LTZWyut1OJJal8YJM7Wgep39ULR0zqi76btMTqeiDrfJdpHVc+Ml/2bB5TSOOOv4oLCphrqo0nWmvqvgLw2Z8vnv8AT5cDOc4ZlV5Xah1RRwl8GsvjJA4N8qne8PI659Stw3ehvmnLjWUL2uZPRzxbS5vpkdGQYnE9+youW3V9FaKmOpspZJ58cwrnSN3xR9Nha05Qb02qtXxRUcrNTTSvqOZI43EOg7Yk4XVpbrqapkpI265idJPLE3yd0pOXOGWkgYUcFLU3Wht4t1jDTSjy6mpikaDUu65eHldRtqulTeLDPT6f+Ahp5aSOQNljLXmNwLpHc/VBfsTXiOJr3bnNYwOcP2nBvLuVD/Emqq6PTUk1JPLDIKunbvicWOwXEHkKZA55HQjgjBbgDtgqD+KP/RaX/wCMp+3zKDoaBnqarS9pnqJHyyv87c+Ql7jh5AySpO7cA5wz6QcD3PYcqjdP6Y1/cbVSVdru3kUUmfKiNTKwtIPPpaMKwNHWPVVmfdZL9XiqbKyMQYmklLdmSTz7oIXddSeJ9vvDbW+ZrKiqlPwcQZG8vY95DBuHC62obvXHR1bQ3KtaNRU76eSthiftfE10mBkx8eyjGpdQV1Tq23V8tsmjkt00bIqdzXh1QI3ktc3PPK0bhcJLy/W12fF5JkjoQY8AlhMmC0578IOvNf8AX9mstlrKacR2mSnYyKV7Y5HOkyQcl3Kn2h6zWFdS1FXqDBiqBDJQuAa3LCOeGqs79eo36T0tYW00gfHTxVRqCfQdxdxj/HRWb4f3uO72WGJlNJCLYyGlLnkkSnb95vGEEwwD+Z6dF6wg9vZZQYwgCyiAiIgIiIMBZQIgIiICIiAiIgIiICIiAiIgIiICIiAiIgFYCyiAV5JwM8fj0/Fel5exr2uY4Za4Frh7g8EIKs8QdYMdE/T1nkE81SfLrJYjuIyf6JuO57r60WgqM6QbSV5iprlOTWvqZQAIJncNY4n9nCkVv0Dpy33ae7RxukldL5sEchBjgcepaF37rb2XO3XC3yYAqoZItx/ZLhw4fRBS+tqdlstOlLAy5MrpIDUSyPY5rgwyEANG3jAzwrloYzFZqKLGDHbYWEfMU4yq+tnhOyCrgqLjcjUxwvY/yo2lu/aQQC53PZWc6ImJ8bcN+zMbOTgDbtGfogqjwp/5y1aO5cOnX+ld0W94vcWmz9Oa2THXP9H3Xa0fo+q01U3mearjnFe4Fgja5u0by7nP1WxrTS1TqijoqWGoipzTzumzI1zgdzS3HCDpaaB/V+wd/wDMKf359IXz1DqK16co/i61zi55IggYPVM/oB7LoWqifb7bbqFz2vdS00ULntGA4sbjIC09Qadt2o6SOjrw8RxyiVj4jte13Tqgo+uvkeq7wyp1BXOpLbC4mOCJj3uEWc7Iw3jJ9129Uag0NcLHT2u0ishfQ4NK1rTHG/d95rx3J91N4/C/RDNu6CqeQMeuod9eQFvQ+H+iICC21xuIII81zndOO6Dg+GupPjbbNbKyVomtzA6N8hA8yn55yf3eAoXq26WS464paxkrJrdHJb4aiTaTG9sRxJjPUBWbbdBWG211xro/NL6tk0QjDi2KKGZu1zAB+B/Balv8N9OU1JcKerhFS+qne+OU+mSCIfcY0/3oNV1r0ZRaf1PJYJqaSW4UshyJWvmw4giOMOw4D5LQ0Fb7dNpi5269iOKKe4SP8uokZGWgxhu6MuPB+a81nhHEXuNuu0sLCctZM0u2/i3lav8AkjuTs7740jPHok/mUEpn0vYbhYxYbJcW00NNPHLLNSuEzw8An1kEZ3Z9+yqrVFguNjqZqcT3GqomhnmVM7HMjc8no1pf2VuWXRrbPYbjaG1b3zVjpHuqmZY5riAG4xzwo23wuudScXTUVRNHnhrd7sge/mEoK0ebRDRNfRXO5fGFw3U5i8qIe+HseVLtN6Jdfreyrk1I6CeTdmmhd5rmRDoHZeCprTeF+joYXRyx1U8jhgzSSkOb39G3gLXoPDG2W+7U9dDW1Ro4SHtpnP2u3A5G57OoQSY3Swaep6C3V9zhikipo2N887XyNa3bvIGev1UN8Q9Q6duenpaahuNPUTmpgcGROJdgFSS/6HsmpKqGsrpKlssUDYGiF4DQ0EkdQuP/AJJtKDpNX/8A3Rz/AAQedD6k0zb9NWulrLpSw1DBLvjkfhzcuzyApRDqjStVKIKa60kszwSxjHOJdgEngKMnwm0mf+urxz080f8ABblr8N9OWmuprhTS1pmpy4xiSRrm+ppacgD2JQQPVupbPNrCz3SklfUU9tETZ9gLSXRuO5rdy++rK3TlRZaf9D0/kXDUVZFU1MGSZGtbkNDu3OVZVHo3SdFLLPDa6d00j3SF87fMIc45JG7ouZFoC0s1C69Oe58bdskNM4khk3vn2HZBD9Zw0FLo3TlA2SldXUxgZM1jmGZnoyQ7HPdWFpKSgNjs8VNLTOmZRQmZsBYXBxH7Yao3W+Fdsrqysq5LnVsdUzvnLGNYWtLjnAyu3pbRdHpearlgraio+JY1pbMGAMwc8bUErCygGEQEREBERAREQEREBERAREQEREH/2Q==",
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
    ],
  }),
  methods:{
    handleClick(item){
      item.show1=!item.show1
      if(item.show1){
        item.heatColor="pink";
        item.heartNum=item.heartNum+1;
      }
      else{
        item.heatColor="gray";
        item.heartNum=item.heartNum-1;

      }
    },
    handleClick2(item){
      item.show2=!item.show2
      if(item.show2){
        item.messageColor="orange";
        // this.messageNum=this.messageNum+1;
      }
      else{
        item.messageColor="gray";
        // this.messageNum=this.messageNum-1;
      }
    },
    handleClick3(item){
      item.show3=!item.show3
      if(item.show3){
        item.sharingColor="blue";
        // this.sharingNum=this.sharingNum+1;
      }
      else{
        item.sharingColor="gray";
        // this.sharingNum=this.sharingNum-1;
      }
    },
    reply_click(item){
      item.repy_items.push({
        text:'Me',
        icon: 'mdi-account' ,
        message:item.textarea,
      })

    }
  }
};
</script>

<style scoped>

</style>
