<template>
  <v-layout justify-space-between wrap>
    <v-flex xs12 sm4 md4 class="my-2 px-1">
      <v-date-picker
        ref="picker"
        full-width
        show-current
        first-day-of-week="1"
        locale="ko-kr"
        v-model="date"
      ></v-date-picker>
    </v-flex>

    <v-flex xs12 sm4 md4 class="my-2 px-1 scheduler_wrap">
      <div class="scheduler">
       <div class="scaduleTitle">{{ date || '날짜를 선택해주세요' }}</div>
        <no-ssr>
        <v-list  two-line>
            <v-list-tile
            v-for="(post, index) in posts"
            :key="post.content"
            @click="setPostidx(index)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{post.title}}</v-list-tile-title>
                <v-list-tile-sub-title>{{post.author}}</v-list-tile-sub-title>
              </v-list-tile-content>
                <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-list-tile>
        </v-list>
        </no-ssr>
        </div>
    <Modal v-bind:date="date"/>

    </v-flex>
     <no-ssr>
    <v-flex xs12 sm4 md4 class="my-2 px-1">
      <v-subheader >{{ datail.title + ' ' + datail.time}}</v-subheader>
      <ul class="ma-3">
        <li>일정 상세내용<br/>{{ datail.content }}</li>
        <li>주소<br/><a :href="'https://www.google.co.kr/maps/search/'+datail.address ">{{ datail.address }}</a></li>
        <li>전화<br/><a :href="'tel:'+datail.tel ">{{ datail.tel }}</a></li>
        <li>대금<br/>{{ datail.cost }} 원</li>
      </ul>
    </v-flex>
     </no-ssr>
  </v-layout>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import ScadulModal from '@/components/scaduler/ScadulModal'

  export default {
    components: {
      'Modal': ScadulModal
    },
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations({
        setIdxPost: 'scaduler/set_post_idx'
      }),
      ...mapActions({
        setDate: 'scaduler/setDate'
      }),
      setPostidx (postIdx) {
        this.setIdxPost(postIdx)
      }
    },
    computed: {
      ...mapGetters({
        getDate: 'scaduler/get_date',
        getScadule: 'scaduler/posts/get_scadule',
        getDetail: 'scaduler/posts/get_detail'
      }),
      date: {
        get: function () { return this.getDate },
        set: function (date) { this.setDate(date) }
      },
      posts () { return this.getScadule },
      datail () { return this.getDetail }
    },
    watch: {
    },
    created () {
      this.setDate(new Date().toISOString().substr(0, 10))
    }
  }
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
@require '~assets/style/variables'
.v-date-picker-title__date
  font-size 25px
.scheduler_wrap
  position relative
  .scheduler
    position relative
    height 365px
    overflow-y scroll
    -ms-overflow-style none
    box-shadow default
    .scaduleTitle
      position sticky
      top 0
      background #303030
      z-index 1
    .scaduler_fab
      z-index 9999
::-webkit-scrollbar
  display none
</style>
