<script setup>
import { RouterView } from 'vue-router'
import NavView from './components/NavView.vue'
import FooterView from './components/FooterView.vue'
</script>

<template>
  <NavView />
  <RouterView />
  <FooterView />
</template>

<style scoped></style>
