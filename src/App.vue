<script setup>
import { RouterView } from 'vue-router'
import NavView from './components/NavView.vue'
import FooterView from './components/FooterView.vue'
import ScrollToTopView from './components/ScrollToTopView.vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
</script>
<script>
export default {
  props: {
    options: Object
  },
  mounted() {
    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {})
    })
  },
  updated() {
    Fancybox.unbind(this.$refs.container)
    Fancybox.close()

    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {})
    })
  },
  unmounted() {
    Fancybox.destroy()
  }
}
</script>

<template>
  <NavView />
  <RouterView />
  <ScrollToTopView />
  <FooterView />
</template>

<style scoped></style>
