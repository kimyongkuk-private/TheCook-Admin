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
    <v-dialog>
        <template v-slot:activator="{ on }">
            <v-list-tile
              v-for="(menuItem, i) in cardMenuItems"
              :key="i"
              v-on="on"
              @click="menuItem.action(props.item.id)"
              v-ripple>
              <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
            </v-list-tile>
        </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ cardMenuTitle}}</span>
            </v-card-title>
            <v-card-text>
                    <v-text-field v-model="props.item.title" label="Title"></v-text-field>
                    <v-textarea v-model="props.item.content" label="Content"></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
              <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
  </v-list>
  </v-menu>
</template>
<script>
export default {
  props: ['props'],
  data: () => ({
    cardMenuStatus: -1,
    cardMenuItems: [
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
  },
  computed: {
    cardMenuTitle () {
      return this.cardMenuStatus === -1 ? '수정' : '새글'
    }
  }
}
</script>

<style lang="stylus" scope="this api replaced by slot-scope in 2.5.0+">
</style>