<template>
  <v-footer
    app
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      width="100%"
      class="lighten-1 white--text text-xs-center"
    >


      <v-card-text class="white--text pt-0">
ss    
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
            <p class="target"> <span>더쿡을 찾아주신 고객님을 환영합니다</span> </p>
            <p class="text-lg-right ma-2" v-if="this.$store.state.userState.userSign">
              {{'Signed' + this.$store.state.userState.userName}}
            </p>
            <p class="text-lg-right ma-2" v-else>
              <NuxtLink to="/login">Sign In</NuxtLink>
            </p>
        </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
    })
  }
</script>


<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
.v-footer p
  margin-bottom: 0
  z-index 99999
.target
  width 100%
  overflow hidden
.target span
  display block
  white-space nowrap
  width 100%
  animation flowing 21s linear infinite
  will-change transform
  transform translateX(100%)
@keyframes flowing {
  100% {
    transform: translateX(-80%)
  }
}
</style>