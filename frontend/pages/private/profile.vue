<template>
  <v-layout column>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mr-4">
                            <img :src="'/avatars/avatar_' + (form.avatar.toLowerCase()) + '.png'" alt="Avatar">
                        </v-avatar>
                    </v-flex>
                    <v-text-field
                        v-model="form.username"
                        label="이름"></v-text-field>
                    <v-text-field
                        v-model="form.phonenumber"
                        label="핸드폰번호"></v-text-field>
                    <v-text-field
                        v-model="form.email"
                        label="메일"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn color="primary" :loading="loading" @click.native="update">
                        <v-icon left dark>check</v-icon>
                        번경 저장
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>

    </v-container>
    </v-layout>
</template>


<script>
// import IsMobile from '@/mixin/isMobile'

export default {
  pageTitle: 'My Profile',
  middleware: 'authenticated',
  data () {
    return {
      loading: false,
      form: {
        username: null,
        phonenumber: '01000000000',
        email: 'john@doe.com',
        avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
      },
      showAvatarPicker: false
    }
  },
  methods: {
    openAvatarPicker () {
      this.showAvatarPicker = true
    },
    selectAvatar (avatar) {
      this.form.avatar = avatar
    }
  },
  created () {
    this.form.username = this.$store.state.userState.userName
  }
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
</style>
