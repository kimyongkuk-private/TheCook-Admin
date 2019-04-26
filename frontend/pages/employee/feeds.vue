<template>
  <v-layout>
    <v-flex text-xs-center>
          <Feed class="feed" :title-data="feed.titleData" :header-data="feed.headerData"/>
    </v-flex>
  </v-layout>
</template>

<script>
  import API from '@/api/helpers'
  import Feed from '@/components/feed/Feed'
  import NewFeed from '@/components/feed/NewFeed'
  export default {
    layout: 'default',
    components: {
      Feed,
      NewFeed
    },
    data: () => ({
      feed: {
        titleData: '공지',
        headerData: [
          { text: '작성자', value: 'manager' },
          { text: 'STAFF', value: 'staff' },
          { text: 'STATUS', value: 'status' },
          { text: '내용', value: 'memo' }
        ]
      }
    }),
    computed: {
      getProductData () {
        return API.getProduct()
      }
    }
  }
</script>