<script setup lang="ts">
// workaround for https://github.com/vueuse/sound/issues/42
import { useSound } from '@raffaelesgarro/vue-use-sound'
import type { Component } from 'vue'
import MorphedPhoto from '@/components/MorphedPhoto.vue'
import ScrollDown from '@/components/ScrollDown.vue'

export interface SocialLink {
  href: string
  icon: Component
}
export interface Props {
  photo: string
  sfx: string
  header: string
  description: string
  socialLinks: SocialLink[]
}

const props = defineProps<Props>()

const { play } = useSound(props.sfx)
</script>

<template>
  <section class="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center justify-center h-screen w-full px-4 sm:px-12 bg-gray-50">
    <MorphedPhoto :src="photo" class="w-48 sm:w-64 xl:w-72" @click="play" />
    <div class="flex flex-col items-center xl:items-start gap-y-6 sm:gap-y-8 sm:max-w-screen-sm text-center xl:text-left">
      <h1 class="mt-8 text-4xl sm:text-6xl font-extrabold text-gray-900 xl:whitespace-pre-wrap">
        {{ header }}
      </h1>
      <p class="text-sm sm:text-base text-gray-500 leading-6 sm:leading-7 font-medium tracking-wide xl:whitespace-pre-wrap">
        {{ description }}
      </p>
      <div class="flex gap-x-4">
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          class="text-gray-500 hover:text-gray-900"
        >
          <component :is="link.icon" class="w-8 h-8" />
        </a>
      </div>
    </div>
    <ScrollDown />
  </section>
</template>

<style scoped>

</style>
