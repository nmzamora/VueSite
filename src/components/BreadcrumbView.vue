<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">
          <i class="bi bi-house-fill"></i>
        </router-link>
      </li>
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
/* Add any custom styling for the breadcrumbs here */
</style>
