<template>
  <v-footer
    app
    dark
    height="auto"
    class="lighten-1 white--text text-xs-right"
  >
      <v-spacer></v-spacer>
      <p class="text-lg-right ma-2" v-if="this.$store.state.userState.userSign">
            <v-chip color="teal lighten-2 elevation-2 " text-color="white">
                {{this.$store.state.userState.userName}} 님
                <v-chip color="teal lighten-1 elevation-4 ma-3" @click="logOutMethod()">
                        로그아웃
                        </v-chip >
            </v-chip>
      </p>
      <p class="text-lg-right ma-2" v-else>
        <v-btn to="/login" color="teal lighten-1 elevation-6 ma-3">
          로그인
        </v-btn >
      </p>
  </v-footer>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
  }),
  methods: {
    ...mapMutations({
      logOut: 'set_signout_mutation'
    }),
    async logOutMethod () {
      await this.logOut()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
.v-footer p
  margin-bottom: 0
  z-index 99999
.target
  width 100%
  overflow hidden
</style>