<template>
    <v-carousel
        height="calc(100vh - 100px)"
        hide-controls
    >
        <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
        >
            <CarouselItem/>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
import CarouselItem from './carouselItem'

const Carousel = {
  components: {
    CarouselItem
  },
  data () {
    return {
      items: [
        { CarouselItem },
        { CarouselItem }
      ]
    }
  }
}
export default Carousel
</script>
