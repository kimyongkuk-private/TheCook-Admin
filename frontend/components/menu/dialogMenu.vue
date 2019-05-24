<template>
  <v-menu bottom left>
  <template v-slot:activator="{ on }">
    <v-btn
      dark
      icon
      v-on="on"
      v-on:click.stop="$event.stopPropagation()"
    >
      <v-icon>more_vert</v-icon>
    </v-btn>
  </template>

  <v-list>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-list-tile
              v-for="(dialogItem, index) in dialogItems"
              :key="index"
              v-on="on"
              @click="setDialog(index)"
              v-ripple>
              <v-list-tile-title>{{ dialogItem.title }}</v-list-tile-title>
            </v-list-tile>
        </template>
          <v-card v-if="dialogStatue === 0">
            <v-card-title>
              <span class="headline">{{ dialogItems[dialogStatue].title }}</span>
            </v-card-title>
            <v-card-text>
                    <v-text-field v-model="props.item.title" label="Title"></v-text-field>
                    <v-textarea v-model="props.item.content" label="Content"></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false" >취소</v-btn>
              <v-btn color="green darken-1" flat @click="dialog = false" >수정</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-else>
            <v-card-title>
              <span class="headline">{{ dialogItems[dialogStatue].title }}</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false" >취소</v-btn>
              <v-btn color="green darken-1" flat @click="deleteFeed(props.item.id)" >삭제</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
  </v-list>
  </v-menu>
</template>
<script>
import iZtoast from 'izitoast'

export default {
  props: ['props'],
  data: () => ({
    dialog: false,
    dialogStatue: 0,
    dialogItems: [
      { title: '수정',
        action: function (payload) {
          console.log(payload)
        } },
      { title: '삭제',
        action: function (payload) {
          console.log(payload)
        } }
    ]
  }),
  methods: {
    setDialog (payload) {
      this.dialogStatue = payload
    },
    deleteFeed (payload) {
      this.dialog = false
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
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
</style>