<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <button
      id="scrollToTopBtn"
      class="scroll-to-top-btn"
      :class="{ visible: isVisible }"
      @click="scrollToTop"
    >
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  color: darkblue;
  cursor: pointer;
  padding: 15px;
  border-radius: 80%;
  opacity: 5;
}
</style>
