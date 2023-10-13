<script setup lang="ts">
export interface Props {
  src: string
}
defineProps<Props>()
</script>

<template>
  <div
    v-bind="$attrs"
    class="photo"
    :style="{ backgroundImage: `url(${src})` }"
  />
</template>

<style scoped>
.photo {
  animation: morph 8s ease-in-out 1s infinite;
  box-shadow: inset 0 0 0 9px hsla(0,0%,100%,.3);
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%
  }

  to {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%
  }
}
</style>
