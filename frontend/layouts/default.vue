<template>
  <v-app dark v-resize="checkMobile">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
    <v-container class="text-xs-center">
      Thecook
       <v-img src="http://xn--9m1bl55c.kr/theme/company/img/bg.jpg" aspect-ratio="1.7"></v-img>
      주방설비 1번지 (주) 더쿡
    </v-container>
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
        <v-footer fixed class="pa-3 justify-center">
          <span class="pa-1">한국어</span>|<span  class="pa-1">汉浯</span>  
        </v-footer>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" class="nav">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        v-if="!isMobile"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        v-if="!isMobile"
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
      </v-btn> -->
      <v-toolbar-title  v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <AlertBadge/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>

        <nuxt />

    </v-content>
    
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >

      <v-list>
        
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in itemsRight"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-footer  app>
      <p class="ma-2">&copy; The Cook {{ new Date().getFullYear() }}</p>
      <v-spacer></v-spacer>
      <p class="target"> <span>더쿡을 찾아주신 고객님을 환영합니다</span> </p>
      <v-spacer></v-spacer>
      <p class="text-lg-right ma-2">로그인 중입니다</p>
    </v-footer>
  </v-app>
</template>

<script>
import IsMobile from '@/mixin/isMobile'
import AlertBadge from '@/components/badge/AlertBadge'

export default {
  components: {
    AlertBadge
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'home', title: '홈', to: '/' },
        { icon: 'rss_feed', title: '피드', to: '/feeds' },
        { icon: 'calendar_today', title: '스케줄', to: '/scaduler' },
        { icon: 'lock_open', title: '로그인', to: '/login' }
      ],
      itemsRight: [
        { icon: 'apps', title: '임시', to: '/' },
        { icon: 'bubble_chart', title: '임시', to: '/' },
        { icon: 'bubble_chart', title: '임시', to: '/' },
        { icon: 'bubble_chart', title: '임시', to: '/' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Admin'
    }
  },
  mixins: [IsMobile]
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
.v-navigation-drawer
.v-overlay
  z-index 8000
.v-footer p
  margin-bottom: 0
.target
  width: 60%
  overflow hidden
.target span
  display block
  white-space nowrap
  width:100%;
  animation: flowing 21s linear infinite;
  will-change: transform;
  transform: translateX(100%);
@keyframes flowing {
  100% {
    transform: translateX(-80%);
  }
}



</style>