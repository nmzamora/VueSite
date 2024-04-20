<template>
  <ul class="dropdown-menu show">
    <li>
      <span class="dropdown-item-text" style="font-weight: bold">{{ title }}</span>
    </li>
    <li v-for="(item, index) in items" :key="index">
      <router-link class="dropdown-item" :to="item.to">{{ item.label }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
