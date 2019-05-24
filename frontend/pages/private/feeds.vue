<template>
  <v-layout v-resize="checkMobile" column>
      <v-container fluid grid-list-md>
        <v-card>
            <v-card-title>
                  <v-text-field
                    label="제목"
                    :counter="20"
                    required
                    v-model="newFeed.title"
                  ></v-text-field>
            </v-card-title>
                  <v-card-text>
                          <v-textarea
                          box
                          label="내용"
                          :counter="255"
                          required
                          v-model="newFeed.content"
                        ></v-textarea>
                  </v-card-text>
          <v-card-actions d-flex>
            <v-spacer></v-spacer>
            <v-flex xs6 sm2>
                  <v-select
                    :items="Object.keys(priority)"
                    v-model="newFeed.priority"
                    box
                    label="우선순위"
                  ></v-select>
            </v-flex>
            <template>
              <div>
               <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-btn class="ma-3" dark v-on="on">등록</v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">게시글을 등록합니다.</v-card-title>
                    <v-card-text>게시글을 등록합니다.</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="dialog = false">취소</v-btn>
                      <v-btn color="green darken-1 " flat @click="createNewFeed ()">확인</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            </div>
            </template>
          </v-card-actions>
        </v-card>
  </v-container>

      <v-toolbar card dense color="transparent"  flat>
      <v-flex xs8>
        <v-layout>
              <v-flex xs4 v-if="!isMobile">
                <v-toolbar-title class="hidden-xs-only"><h4>{{titleData}}</h4></v-toolbar-title>
              </v-flex>
          <v-flex :class="{xs7: !isMobile}">
                <v-text-field
                v-model="search"
                append-icon="search"
                label="검색"
                single-line
                class="notranslate"
                ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>

        <v-flex xs4>
        <v-menu
          ref="datePck"
          v-model="datePck"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
              <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="formatDate"
                      label="Date"
                      persistent-hint
                      @blur="date = parsedDate"
                      v-on="on"
                    ></v-text-field>
              </template>
          <v-date-picker v-model="date" no-title @input="datePck = false" locale="ko-kr"></v-date-picker>
        </v-menu>
      </v-flex>   
    </v-toolbar>

        <v-container fluid grid-list-md>
            <v-data-table :pagination.sync="sort" :headers="header" :items="Object.values(feeds)"  :item-key="Object.values(feeds).id" :search="search"  :hide-headers="false" :class="{mobile: isMobile}" :expand="expand">
              <template slot="items" slot-scope="props">
                <tr v-if="!isMobile"  @click="props.expanded = !props.expanded"
                style="getColorByPriority(props.item.priority)"
                >
                 <v-hover>
                            <v-card
                              slot-scope="{ hover }"
                              :class="`my-1 elevation-${hover ? 0 : 24}` "
                              color="#424242"
                              dark
                            >
                              <v-card-title > 
                                <v-icon
                                  small
                                  left
                                  style="getColorByPriority(props.item.priority)"
                                  class="notranslate"
                                >
                                  label_important
                                </v-icon>
                                <span class="subheading font-weight-light"> {{ props.item.priority }}</span>
                                          <v-spacer></v-spacer>
                                <dialogMenu :props="props"/>
                              </v-card-title>

                              <v-card-text class="title font-weight-light text-xs-center">
                                 {{ props.item.title }}
                              </v-card-text>

                              <v-card-actions>
                                <v-list-tile class="grow">
                                  <v-list-tile-avatar color="grey darken-3">
                                    <v-img
                                      class="elevation-6"
                                      src="https://ui-avatars.com/api/?name=kyk&font-size=0.33"
                                    ></v-img>
                                  </v-list-tile-avatar>
                                  <v-list-tile-content>
                                    <v-list-tile-title class="text-xs-left grey--text darken-1">{{ props.item.name }}</v-list-tile-title>
                                  </v-list-tile-content>
                                  <v-spacer/><v-spacer/>
                                  <v-list-tile-content>
                                    <v-list-tile-sub-title class="body-2 mr-2 text-xs-right grey--text darken-3">게시됨 {{ $moment(props.item.created).format('YYYY.MM.DD HH:mm:ss') }}</v-list-tile-sub-title>
                                    <v-list-tile-sub-title class="body-2 mr-2 text-xs-right grey--text darken-3" v-if="!( props.item.created == props.item.updated ? true : false)">수정됨 {{ $moment(props.item.updated).format('YYYY.MM.DD HH:mm:ss') }}</v-list-tile-sub-title>
                                  </v-list-tile-content>
                                </v-list-tile>
                              </v-card-actions>
                            </v-card>
                             </v-hover>
                      <!-- <td>{{ props.item.manager }}</td>
                      <td class="text-xs-right" ><span class="px-1" :key="staff" v-for="staff in props.item.staff">{{staff}}</span></td>
                      <td class="text-xs-right">{{ props.item.status }}</td>
                      <td class="text-xs-right">{{ props.item.title }}</td> -->
                </tr>
                <tr v-else  @click="props.expanded = !props.expanded"
                 >
                            <v-card
                              class="mx-auto"
                              color="#424242"
                              dark
                              max-width="400"
                            >
                              <v-card-title>
                       
                                <v-icon
                                  small
                                  left
                                  style="getColorByPriority(props.item.priority)"
                                  class="notranslate"
                                >
                                  label_important
                                </v-icon>
                                <span class="subheading font-weight-light"> {{ props.item.priority }}</span>
                                      
                                    <v-spacer></v-spacer>
                                        <v-list-tile-content>
                                          <v-list-tile-title>{{ props.item.name }}</v-list-tile-title>
                                        </v-list-tile-content>
                                    <v-spacer/><v-spacer/>
                                      <dialogMenu :props="props"/>
                                      
                              </v-card-title>

                              <v-card-text class="headline font-weight-light text-xs-center">
                                {{ props.item.title }}
                              </v-card-text>

                              <v-card-actions>
                                <v-list-tile class="grow">
                                  <v-list-tile-content>
                                        <v-list-tile-sub-title class="body-2 mr-2 text-xs-right grey--text darken-3">게시됨 {{ createTimeFormat(props.item.created) }}</v-list-tile-sub-title>
                                        <v-list-tile-sub-title class="body-2 mr-2 text-xs-right grey--text darken-3" v-if="!(createTimeFormat(props.item.created) == createTimeFormat(props.item.updated) ? true : false)">수정됨 {{ createTimeFormat(props.item.updated) }}</v-list-tile-sub-title>
                                  </v-list-tile-content>
                                </v-list-tile>
                              </v-card-actions>
                            </v-card>
                </tr>
                <!-- <tr v-else  @click="props.expanded = !props.expanded"
                 :style="getColorByPriority(props.item.status)">
                  <td>
                    <ul class="flex-content" >
                      <li class="flex-item" data-label="Manager">{{ props.item.manager }}</li>
                      <li class="flex-item" data-label="Staff"><span class="px-1" :key="staff" v-for="staff in props.item.staff">{{staff}}</span></li>
                      <li class="flex-item" data-label="Status">{{ props.item.status }}</li>
                      <li class="flex-item" data-label="Title">{{ props.item.title }}</li>
                    </ul>
                  </td>
                </tr> -->
              </template>
                <template v-slot:expand="props">
                  <v-card-title primary-title class="body-2">
                      <div> {{ props.item.content }} </div>
                  </v-card-title>
                </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                "{{ search }}"를 포함한 결과를 찾을 수 없습니다 
              </v-alert>
            </v-data-table>
          </v-container>
    </v-layout>
</template>


<script>
// import axios from 'axios'
import Pusher from 'pusher-js'
import { mapGetters } from 'vuex'
import IsMobile from '@/mixin/isMobile'
import dialogMenu from '@/components/menu/dialogMenu'

let socketId = null
const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
const pusher = new Pusher('2ee37955973a41a7c708', { cluster: 'ap3' })
pusher.connection.bind('connected', function () { socketId = pusher.connection.socket_id })
const myChannel = pusher.subscribe('a_channel')

export default {
  props: ['titleData'],
  mixins: [IsMobile],
  middleware: 'authenticated',
  components: {
    dialogMenu
  },
  data: function () {
    return {
      dialog: false,
      sort: { sortBy: 'id', descending: 'true' },
      datePck: false,
      expand: false,
      search: '',
      cardMenuStatus: -1,
      cardMenuItems: [
        { title: '수정',
          action: function (payload) {
            console.log(payload)
          } },
        { title: '삭제',
          action: function (payload) {
            console.log(payload)
          } }
      ],
      feeds: [],
      // feeds: [{
      //   id: null,
      //   value: false,
      //   manager: null,
      //   staff: [],
      //   status: null,
      //   created: null,
      //   updated: null,
      //   title: null,
      //   content: null,
      //   photo: null
      // }],
      priority: {
        '긴급': 'red',
        '중요': 'yellow',
        '보통': 'green'
      },
      newFeed: {
        title: null,
        content: null,
        priority: '보통',
        // photo: null,
        reset: function () {
          this.title = null
          this.content = null
          // this.photo = null
        }
      }
    }
  },
  asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
  },
  fetch ({ store, params }) {
  },
  async created () {
    // let response = await axios.get('http://ec2-13-209-6-77.ap-northeast-2.compute.amazonaws.com/api/feeds/feedlist/', localStorage.getItem('LS_TOKEN'))
    // this.feeds = response.data.results
  },
  mounted () {
    // not working ServerSide
    this.getFeeds()
    this.listen()
  },
  methods: {
    someAction (e) {
      e.stopPropagation()
    },
    getFeeds () {
      this.$axios.get('api/feeds/conversations/').then((response) => {
        this.feeds = JSON.parse(response.data)
        console.log(JSON.parse(response.data))
        this.readall()
      })
    },
    listen () {
      myChannel.bind('an_event', (data) => {
        console.log('ddd:', Object.entries(data))
        this.$axios.post('api/feeds/conversations/' + Object.values(data).id + '/delivered', this.queryParams({ socket_id: socketId }))
      })
      myChannel.bind('deleted_message', (data) => {
        console.log(JSON.parse(this.feeds))
        console.log('ss:', data)
      })
      myChannel.bind('delivered_message', (data) => {
        for (var i = 0; i < this.feeds.length; i++) {
          if (this.feeds[i].id === data.id) {
            this.feeds[i].status = data.status
          }
        }
      })
    },
    readall () {
      for (var i = 0; i < this.feeds.length; i++) {
        if (this.feeds[i].status === 'Sent') {
          this.$axios.post('api/feeds/conversations/' + this.feeds[i].id + '/delivered')
        }
      }
    },
    createNewFeed () {
      this.dialog = false
      let form = new FormData()
      console.log(this.$store.state.userState.userIdx)
      form.append('id', this.$store.state.userState.userIdx)
      form.append('title', this.newFeed.title)
      form.append('content', this.newFeed.content)
      form.append('priority', this.newFeed.priority)
      // this.queryParams({ message: this.message })
      this.$axios.post('api/feeds/conversation/', form, config)
        .then(response => {
          this.newFeed.reset()
        })
    },
    queryParams (source) {
      var array = []
      for (var key in source) {
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent(source[key]))
      }
      return array.join('&')
    },
    createTimeFormat (date) {
      return new Date(date).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    },
    setDate (date) {
      this.$store.commit('feeds/set_date', date)
    }
    // getColorByPriority (status) {
    //   return { color: `${this.priority[status]}` }
    // },
    // async createNewFeed () {
    //   this.dialog = false
    //   await axios.post('http://ec2-13-209-6-77.ap-northeast-2.compute.amazonaws.com/api/feeds/createfeed/', this.newFeed)
    //     .catch(error => { throw error })
    //   // const response = await axios.get('http://ec2-13-209-6-77.ap-northeast-2.compute.amazonaws.com/api/feeds/feedlist/', localStorage.getItem('LS_TOKEN'))
    //   // this.feeds = response.data.results
    //   this.newFeed.reset()
    // }
  },
  watch: {
  },
  computed: {
    ...mapGetters({
      feeddate: 'feeds/date',
      formatDate: 'feeds/dateFormatted',
      parsedDate: 'feeds/dateParsed',
      header: 'feeds/headers'
    }),
    getfeeds () {
      return this.feeds
    },
    date: {
      get () {
        return this.feeddate
      },
      set (value) {
        this.$store.commit('feeds/update_date', value)
      }
    }
  }
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
.mobile
  color: #333
.v-datatable thead tr
  display flex
  th.column.sortable
    flex 1
    display flex
    flex-direction row
    align-items center
    justify-content center
@media screen and (max-width: 768px)
    .mobile table.v-table tr td:not(.v-datatable__expand-col)
        display: flex
        width: 100%
        border-bottom: 1px solid #f5f5f5
        height: auto
        padding: 20px 0
    .v-datatable__expand-row
        padding 2px 5px
    .mobile table.v-table tr td ul li:before
        content: attr(data-label)
        padding-right: .5em
        text-align: left
        display: block
        color: #999

    .v-datatable__actions__select
        width: 50%
        margin: 0px
        justify-content: flex-start

    .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row)
        background: transparent

.flex-content
    padding: 0
    margin: 0
    list-style: none
    display: flex
    flex-wrap: wrap
    width: 100%

.flex-item 
    padding: 5px
    width: 50%
    height: auto
    font-weight: bold

.v-datatable__expand-row
    padding 0 10px
    text-align justify
    border-bottom 2px solid black

.v-card__text
  word-break keep-all
  word-wrap break-word
</style>
