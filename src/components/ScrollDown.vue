<template>
  <div class="scroll-down" />
</template>

<style scoped>
.scroll-down {
  position: absolute;
  left: 50%;
  bottom: 2rem;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 100;
  text-decoration: none;
  width: 13px;
  height: 13px;
  border-bottom: 2px solid #000000;
  border-right: 2px solid #000000;
  transform: translate(-50%, 0%) rotate(45deg);
  animation: fade_move_down 4s ease-in-out infinite;
}

@keyframes fade_move_down {
  0% {
    transform: translate(0,-10px) rotate(45deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0,10px) rotate(45deg);
    opacity: 0;
  }
}
</style>
