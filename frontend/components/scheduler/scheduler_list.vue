<template>
        <v-flex xs12 sm4 md4 class="my-2 px-1 scheduler_wrap">
        <v-container d-flex>
              <v-flex xs8>
                <v-text-field
                reverse
                append-icon="search"
                label="검색"
                single-line
                class="notranslate"
                ></v-text-field>
              </v-flex>
          <v-flex xs4>
              <v-menu
              v-model="picker_status"
              :close-on-content-click="false"
              lazy
              transition="scale-transition"
              locale="ko-kr"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  reverse
                  readonly
                  v-model="date"
                  label="date"
                  :hint=" date "
                  persistent-hint
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker  v-model="date" @input="picker_status=false" locale="ko-kr"></v-date-picker>
            </v-menu>
          </v-flex>
      </v-container>
      <v-container class="scheduler">
       <div class="scheduleTitle">{{ date || '날짜를 선택해주세요' }}</div>
        <no-ssr>
        <v-list  two-line>
            <v-list-tile
            v-for="(post, index) in posts"
            :key="post.id"
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
      </v-container>
    <Modal v-bind:date="date"/>

    </v-flex>
</template>

<script>
import IsMobile from '@/mixin/isMobile'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ScadulModal from './scheduler_modal'

export default {
  mixins: [IsMobile],
  components: {
    'Modal': ScadulModal
  },
  data () {
    return {
      picker_status: false
    }
  },
  created () {
  },
  methods: {
    ...mapMutations({
      setIdxPost: 'main/scheduler/set_post_idx'
    }),
    ...mapActions({
      setDate: 'main/setDate'
    }),
    setPostidx (postIdx) {
      this.setIdxPost(postIdx)
    }
  },
  computed: {
    ...mapGetters({
      getDate: 'main/get_date',
      getSchedule: 'main/scheduler/posts/get_schedule'
    }),
    date: {
      get: function () { return this.getDate },
      set: function (date) { this.setDate(date) }
    }
  }
}
</script>