<template>
<v-layout align-center justify-center>
    <v-flex  xs12 sm8 md4 lg4 text-xs-center>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <h1 class="flex my-4 primary--text">{{appInfo.title}}</h1>
                </div>
                <v-form>
                  <v-text-field append-icon="phone_iphone" name="login" label="핸드폰번호" type="text"
                                v-model="userData.username" browser-autocomplete="off"></v-text-field>
                  <v-text-field append-icon="vpn_key" name="password" label="비밀번호" id="password" type="password"
                                v-model="userData.password" browser-autocomplete="off"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn block color="primary" :loading="appInfo.loading" @click="signInMethod(userData)">Welcome</v-btn>
              </v-card-actions>
            </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'notAuthenticated',
  layout: 'login',
  data: () => ({
    appInfo: {
      title: '더쿡 관리자페이지',
      loading: false
    },
    userData: {
      username: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions({
      signIn: 'signin_action'
    }),
    async signInMethod (userData) {
      await this.signIn(userData).then(response => this.$router.push('/'))
    }
  }
}
</script>