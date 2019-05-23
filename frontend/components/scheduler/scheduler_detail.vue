<template>
    <v-flex xs12 sm8 md8 class="my-4 px-3">

     <no-ssr>
 
      <v-container>
        <v-card>
        <v-card-title>
          <v-list two-line subheader>
          <v-subheader><h3 class="headline mb-0">{{ datail.title + ' ' + datail.time }}</h3></v-subheader>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>일정 상세</v-list-tile-title>
              <v-list-tile-sub-title>{{ datail.content }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>주소</v-list-tile-title>
              <v-list-tile-sub-title><a :href="'https://www.google.co.kr/maps/search/'+datail.address ">{{ datail.address }}</a></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>주소</v-list-tile-title>
              <v-list-tile-sub-title><a :href="'tel:'+datail.tel ">{{ datail.tel }}</a></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>대금</v-list-tile-title>
              <v-list-tile-sub-title>{{ datail.cost }} 원</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
    
        </v-list>
        <iframe width="100%" height="315" :src="'https://www.google.co.kr/maps/search/?api=1&query='+datail.address " frameborder="0" />
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn>완료</v-btn>
        </v-card-actions>
        </v-card>
      </v-container>

     </no-ssr>
</v-flex>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      getDate: 'main/get_date',
      getSchedule: 'main/scheduler/posts/get_schedule',
      getDetail: 'main/scheduler/posts/get_detail'
    }),
    posts () { return this.getSchedule },
    datail () { return this.getDetail }
  }
}
</script>