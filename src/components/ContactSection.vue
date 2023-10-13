<script setup lang="ts">
import type { Component } from 'vue'

export interface Props {
  text: string
  buttonText: string
  buttonLink: string
  buttonIcon: Component
}

defineProps<Props>()
</script>

<template>
  <section class="w-full px-4 sm:px-12 py-24 bg-gray-50 text-center flex flex-col items-center gap-y-4">
    <p class="text-xl">
      {{ text }}
    </p>
    <a
      :href="buttonLink"
      target="_blank"
      class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 mt-4 duration-200 flex items-center gap-x-3"
    >
      <Component :is="buttonIcon" class="w-6 h-6" />
      <span class="font-medium text-lg -mt-0.5">{{ buttonText }}</span>
    </a>
  </section>
</template>
