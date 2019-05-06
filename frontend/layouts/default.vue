<template>
  <v-app dark v-resize="checkMobile">
    <v-navigation-drawer
      :mini-variant.sync="toolbarData.miniVariant"
      :clipped="toolbarData.clipped"
      v-model="toolbarData.drawer"
      fixed
      app
    >
      <v-container v-if="!toolbarData.miniVariant" class="text-xs-center">
        Thecook
        <v-img src="http://xn--9m1bl55c.kr/theme/company/img/bg.jpg" aspect-ratio="1.7"></v-img>
        <p> 주방설비 1번지 (주) 더쿡</p>
        <p> 로그인과 상관 없이 나타나는 접근레벨 0의 페이지 메뉴입니다</p>
        <p> 한ㆍ중 번역버튼 예정</p>
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
        <v-footer
          inset
          fixed
          class="pa-3 justify-center">
          <span class="pa-1">한국어</span>|<span  class="pa-1">汉浯</span>  
        </v-footer>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="toolbarData.clipped" class="nav">
      <v-toolbar-side-icon @click="toolbarData.drawer = !toolbarData.drawer"></v-toolbar-side-icon>
      <v-btn
        v-if="!isMobile"
        icon
        @click.stop="toolbarData.miniVariant = !toolbarData.miniVariant"
      >
        <v-icon v-html="toolbarData.miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        v-if="!isMobile"
        icon
        @click.stop="toolbarData.clipped = !toolbarData.clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
      </v-btn> -->
      <v-toolbar-title  v-text="toolbarData.title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <AlertBadge/>
      <v-btn
        icon
        router
        to="/login"
      >
        <v-icon>lock_open</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="toolbarData.rightDrawer = !toolbarData.rightDrawer"
        v-if="this.$store.state.userState.userSign"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content fill-height>

        <nuxt />

    </v-content>
    
    <v-navigation-drawer
      v-if="this.$store.state.userState.userSign"
      temporary
      :right="toolbarData.right"
      v-model="toolbarData.rightDrawer"
      fixed
    >
    <v-container class="text-xs-center">
      Thecook
       <v-img src="http://xn--9m1bl55c.kr/theme/company/img/bg.jpg" aspect-ratio="1.7"></v-img>
      주방설비 1번지 (주) 더쿡
            <p> 사원용 메뉴입니다. </p>
            <p> (개발) 로그인 되어있지 않으면 나타나지 않습니다.</p>
    </v-container>
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
<Footer></Footer>
  </v-app>
</template>

<script>
import IsMobile from '@/mixin/isMobile'
import AlertBadge from '@/components/badge/AlertBadge'
import Footer from '@/components/core/footer'

export default {
  components: {
    AlertBadge,
    Footer
  },
  data () {
    return {
      toolbarData: {
        title: '더쿡 관리자페이지',
        miniVariant: false,
        right: true,
        rightDrawer: false,
        clipped: true,
        drawer: false,
        fixed: false
      },
      items: [
        { icon: 'home', title: '홈', to: '/' },
        { icon: 'bubble_chart', title: '제품', to: '/open/production' },
        { icon: 'apps', title: '프로모션', to: '/open/promotion' }
      ],
      itemsRight: [
        { icon: 'rss_feed', title: '피드', to: '/private/feeds' },
        { icon: 'calendar_today', title: '스케줄', to: '/private/scaduler' }
      ]
    }
  },
  mixins: [IsMobile]
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
.v-navigation-drawer
.v-overlay
  z-index 8000

</style>