<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn')
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    if (scrollY > 100) {
      isVisible.value = true
    } else {
      isVisible.value = false
    }
  })

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
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
