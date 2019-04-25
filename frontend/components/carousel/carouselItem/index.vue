<template>
    <v-layout
>
    <v-flex
      xs12
      sm12
    >
      <v-card>
          <v-layout row wrap fill-heigh pa-3>
            <v-flex
              v-for="n in 4"
              :key="n"
              xs12
              sm6
              d-flex
            >
              <v-card flat tile class="ma-3 elevation-6">
                <v-img
                  :src="`https://www.xn--wb7ba.com/data/banner/17`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  height="calc(50vh - 155px)"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
                <v-card-title class="pa-2">
                  <div>
                    <h5 class="mb-0 subheading">식기류 Up to 25% SALE </h5>
                    <div>4.25 ~ 4.28 (일부상품 제외) </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style lang="scss" scope>
  .v-carousel__controls{
    height: 30px !important
  }
</style>
