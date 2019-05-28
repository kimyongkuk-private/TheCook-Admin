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
              @click="setDialog(dialogItem.title)"
              v-ripple>
              <v-list-tile-title>{{ dialogItem.title }}</v-list-tile-title>
            </v-list-tile>
        </template>
          <v-card v-if="dialogStatue === '수정'">
            <v-card-title>
              <span class="headline">{{ dialogStatue }}</span>
            </v-card-title>
            <v-card-text>
                    <v-text-field v-model="updateData.title" label="Title"></v-text-field>
                    <v-textarea v-model="updateData.content" label="Content"></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-select
                :items="Object.keys(priority)"
                v-model="itemData.item.priority"
                box
                label="우선순위"
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false" >취소</v-btn>
              <v-btn color="green darken-1" flat @click="defUpdate(itemData.item.id)" >{{ dialogStatue }}</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-else>
            <v-card-title>
              <span class="headline">{{ dialogStatue }}</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false" >취소</v-btn>
              <v-btn color="green darken-1" flat @click="deleteMethod(itemData.item.id)" >{{ dialogStatue }}</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
  </v-list>
  </v-menu>
</template>
<script>
// update form 수정시 렌더링 된 내용 변하는부분 수정
export default {
  props: ['itemData', 'func'],
  data: () => ({
    dialog: false,
    dialogStatue: null,
    dialogItems: [
      { title: '수정',
        action: function (payload) {
          console.log(payload)
        } },
      { title: '삭제',
        action: function (payload) {
          console.log(payload)
        } }
    ],
    priority: {
      '긴급': 'red',
      '중요': 'yellow',
      '보통': 'green'
    },
    updateData: {
      title: null,
      content: null,
      priority: '보통',
      reset: function () {
        this.title = null
        this.content = null
      }
    }
  }),
  mounted () { // not working ServerSide
    console.log(this.itemData)
    this.updateData = this.itemData.item
  },
  methods: {
    makeForms () {
      let forms = new FormData()
      forms.append('id', this.$store.state.userState.userIdx)
      forms.append('title', this.itemData.item.title)
      forms.append('content', this.itemData.item.content)
      forms.append('priority', this.itemData.item.priority)
      return forms
    },
    setDialog (payload) {
      this.dialogStatue = payload
    },
    defUpdate (updItemId) {
      const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      this.$axios.post('api/feeds/conversations/' + updItemId + '/update/', this.makeForms(), config).then((response) => {
        console.log(response)
      }).catch((e) => {
      })
      this.dialog = false
    },
    deleteMethod (delItemId) {
      this.func(delItemId)
      this.dialog = false
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
</style>