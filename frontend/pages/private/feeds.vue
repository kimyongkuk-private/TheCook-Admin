<template>
  <v-layout v-resize="checkMobile" column>
      <v-container fluid grid-list-md>
        <v-card>
            <v-card-title>
                  <v-text-field
                    label="제목"
                    counter
                    maxlength="25"
                    required
                    v-model="createData.title"
                  ></v-text-field>
            </v-card-title>
                  <v-card-text>
                          <v-textarea
                          box
                          label="내용"
                          counter
                          maxlength="255"
                          required
                          v-model="createData.content"
                        ></v-textarea>
                  </v-card-text>
          <v-card-actions d-flex>
            <v-spacer></v-spacer>
            <v-flex xs6 sm2>
                  <v-select
                    :items="Object.keys(priority)"
                    v-model="createData.priority"
                    box
                    label="우선순위"
                  ></v-select>
            </v-flex>
            <template>
              <div>
               <v-layout row justify-center>
                <v-dialog v-model="createDialog" persistent max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-btn class="ma-3" dark v-on="on">등록</v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">게시글을 등록합니다.</v-card-title>
                    <v-card-text>게시글을 등록합니다.</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="createDialog = false">취소</v-btn>
                      <v-btn color="green darken-1 " flat @click="defCreate ()">확인</v-btn>
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
                      readonly
                      v-on="on"
                    ></v-text-field>
              </template>
          <v-date-picker v-model="date" no-title @input="datePck = false" locale="ko-kr"></v-date-picker>
        </v-menu>
      </v-flex>   
    </v-toolbar>

        <v-container fluid grid-list-md>
            <v-data-table :pagination.sync="sort" :headers="header" :items="Object.values(feeds)"  :item-key="Object.values(feeds).id" :search="search"  :hide-headers="true" :class="{mobile: isMobile}" :expand="expand">
              <template slot="items" slot-scope="props">
                <tr v-if="!isMobile"  @click="props.expanded = !props.expanded"
                :style="getColorByPriority(props.item.priority)"
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
                                  :style="getColorByPriority(props.item.priority)"
                                  class="notranslate"
                                >
                                  label_important
                                </v-icon>
                                <span class="subheading font-weight-light"> {{ props.item.priority }}</span>
                                          <v-spacer></v-spacer>
                                <FeedVert :itemData="props" :func="defDelete"/>
                              </v-card-title>

                              <v-card-text class="title font-weight-light text-xs-center">
                                 {{ props.item.title }}
                              </v-card-text>

                              <v-card-actions>
                                <v-list-tile class="grow">
                                  <v-list-tile-avatar color="grey darken-3">
                                    <v-img
                                      class="elevation-6"
                                      v-bind:src="userIcon(props.item.name, 'pc')"
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
                </tr>
                <tr v-else  @click="props.expanded = !props.expanded"
                 >
                            <v-card
                              class="mx-auto"
                              color="#424242"
                              dark
                              max-width="calc(100vw - 32px)"
                            >
                              <v-card-title>
                                <v-icon
                                  small
                                  left
                                  :style="getColorByPriority(props.item.priority)"
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
                                    <FeedVert :itemData="props" :func="defDelete"/>
                                      
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
              </template>
                <template v-slot:expand="props">
                  <v-card
                    class="mx-auto"
                    color="#424242"
                    dark
                    max-width="calc(100vw - 32px)"
                  >
                    <v-card-text  primary-title class="body-2">
                      {{ props.item.content }}
                    </v-card-text>
                  </v-card>
                </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                "{{ search }}"를 포함한 결과를 찾을 수 없습니다 
              </v-alert>
            </v-data-table>
          </v-container>
    </v-layout>
</template>


<script>
import Pusher from 'pusher-js'
import { mapGetters } from 'vuex'
import IsMobile from '@/mixin/isMobile'
import FeedVert from '@/components/menu/feedVert'
import iZtoast from 'izitoast'

let socketId = null
const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
const pusher = new Pusher('2ee37955973a41a7c708', { cluster: 'ap3' })
pusher.connection.bind('connected', function () { socketId = pusher.connection.socket_id })
const feedChannel = pusher.subscribe('a_channel')

export default {
  props: ['titleData'],
  mixins: [IsMobile],
  middleware: 'authenticated',
  components: {
    FeedVert
  },
  data: function () {
    return {
      createDialog: false,
      sort: { sortBy: 'id', descending: 'true' },
      datePck: false,
      expand: false,
      search: '',
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
      priority: {
        '긴급': 'red',
        '중요': 'yellow',
        '보통': 'green'
      },
      createData: {
        title: null,
        content: null,
        priority: '보통',
        reset: function () {
          this.title = null
          this.content = null
        }
      }
    }
  },
  asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
  },
  fetch ({ store, params }) {
  },
  created () {
  },
  mounted () { // not working ServerSide
    this.defRead()
    this.eventBind()
  },
  methods: {
    defCreate () {
      this.createDialog = false
      let form = new FormData()
      form.append('id', this.$store.state.userState.userIdx)
      form.append('title', this.createData.title)
      form.append('content', this.createData.content)
      form.append('priority', this.createData.priority)
      this.$axios.post('api/feeds/conversation/', form, config)
        .then(response => {
          this.createData.reset()
          this.feeds[response.data.id] = response.data
        })
    },
    defRead () {
      this.$axios.get('api/feeds/conversations/').then((response) => {
        this.feeds = JSON.parse(response.data)
        this.readall()
      })
    },
    defDelete (payload) {
      this.$axios.post('api/feeds/conversations/' + payload + '/delete')
        .then(response =>
          response.status === 200
            ? iZtoast.show({
              title: '삭제되었습니다.',
              position: 'topRight'
            })
            : null
        )
        .catch(error => console.log(error))
    },
    eventBind () {
      feedChannel.bind('created_message', (data) => {
        this.$axios.post('api/feeds/conversations/' + data.id + '/delivered', this.queryParams({ socket_id: socketId })).then((response) => {
          console.log(response)
        })
        this.$set(this.feeds, data.id)
        this.feeds[data.id] = data
        console.log(data)
      })
      feedChannel.bind('deleted_message', (data) => {
        this.$delete(this.feeds, data.id)
        console.log(data)
      })
      feedChannel.bind('delivered_message', (data) => {
        for (var i = 0; i < this.feeds.length; i++) {
          if (this.feeds[i].id === data.id) {
            this.feeds[i].status = data.status
          }
        }
      })
      feedChannel.bind('updated_message', (data) => {
        this.feeds[data.id] = data
        console.log(data)
      })
    },
    readall () {
      for (var i = 0; i < this.feeds.length; i++) {
        if (this.feeds[i].status === 'Sent') {
          this.$axios.post('api/feeds/conversations/' + this.feeds[i].id + '/delivered')
        }
      }
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
    getColorByPriority (status) {
      return { color: `${this.priority[status]}` }
    },
    userIcon (id, device) {
      return 'https://ui-avatars.com/api/?name=' + id + '&font-size=0.33&length=3'
    }
  },
  computed: {
    ...mapGetters({
      feeddate: 'feeds/date',
      formatDate: 'feeds/dateFormatted',
      parsedDate: 'feeds/dateParsed',
      header: 'feeds/headers'
    }),
    date: {
      get () {
        return this.feeddate
      },
      set (value) {
        this.$store.commit('feeds/update_date', value)
      }
    }
  },
  watch: {
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
