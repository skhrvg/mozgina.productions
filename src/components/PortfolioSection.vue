<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import '@/assets/carousel.css'
import { computed } from 'vue'
import useTailwindBreakpoints from '@/functions/useTailwindBreakponts'

export interface CarouselSection {
  header: string
  path: string
  itemsCount: number
  extension: string
}

export interface Props {
  carouselSections: CarouselSection[]
}

defineProps<Props>()

const { isMobile, isTablet } = useTailwindBreakpoints()
const itemsInCarousel = computed(() =>
  isMobile.value
    ? 1.95
    : isTablet.value
      ? 2.6
      : 3.95,
)
</script>

<template>
  <section class="w-full px-4 sm:px-12 py-24">
    <h2 class="text-3xl sm:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">
      Портфолио
    </h2>
    <div
      v-for="section in carouselSections"
      :key="section.path"
    >
      <h3 class="text-xl sm:text-3xl font-bold text-gray-900 px-6 py-4 bg-gray-50 w-min mx-auto mb-8 mt-16">
        {{ section.header }}
      </h3>
      <Carousel
        :items-to-show="itemsInCarousel"
        :wrap-around="true"
        :transition="300"
        class="-mx-4 sm:-mx-12"
      >
        <Slide
          v-for="slide in section.itemsCount"
          :key="`${section.path}/${slide}`"
          class=""
        >
          <img
            :src="`${section.path}/${slide}.${section.extension}`"
            class="w-[40vw] sm:w-[30vw] md:w-[20vw] aspect-[3/5] md:aspect-[3/4] object-cover object-center"
          >
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped lang='postcss'>

</style>
