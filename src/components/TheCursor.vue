<script setup lang="ts">
import { useMouse, usePageLeave, usePointer } from '@vueuse/core'
import { ref } from 'vue'

const { x, y } = useMouse({
  type: 'client',
  touch: false,
  initialValue: { x: -1000, y: -1000 },
})
const { pointerType } = usePointer()
const isLeft = usePageLeave()
const isClickable = ref<boolean>(false)

const clickables = document.querySelectorAll('a, button')
clickables.forEach(el => el.addEventListener('mouseenter', () => {
  isClickable.value = true
}))
clickables.forEach(el => el.addEventListener('mouseleave', () => {
  isClickable.value = false
}))
</script>

<template>
  <div
    class="fixed w-8 h-8 border-2 border-black rounded-full duration-100 pointer-events-none opacity-50 -translate-x-1/2 -translate-y-1/2"
    :class="{ '!opacity-0': isLeft || isClickable || pointerType !== 'mouse' }"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
    }"
  />
  <div
    class="fixed w-1.5 h-1.5 bg-black rounded-full duration-75 pointer-events-none opacity-50 -translate-x-1/2 -translate-y-1/2"
    :class="{
      '!opacity-0': isLeft || pointerType !== 'mouse',
      'w-16 h-16': isClickable,
    }"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      transition: 'width 300ms ease, height 300ms ease',
    }"
  />
</template>
