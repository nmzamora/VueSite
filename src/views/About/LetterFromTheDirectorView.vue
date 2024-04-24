<script setup>
import BreadcrumbView from '@/components/BreadcrumbView.vue'
import SidebarView from '@/components/SidebarView.vue'
import { ref } from 'vue'
</script>
<template>
  <div class="container mt-2 mb-5">
    <BreadcrumbView :items="breadcrumbItems" />
    <!-- Breadcrumb View ] -->
    <div class="row">
      <h2>A Letter from the Director</h2>
      <div class="col-md-2">
        <img
          class="img-fluid"
          alt="headshot of Krystel Castillo"
          src="http://texasenergy.utsa.edu/images/uploads/Dr.Castillo_letter.jpg"
        />
      </div>
      <div class="col-md-6">
        <p>
          Welcome to the UTSA Texas Sustainable Energy Research Institute. The Institute was founded
          in 2010 with the objective of creating transformative leaders capable of developing
          innovative solutions to tackle complex challenges in the energy and sustainability
          sectors.
        </p>
        <p>
          The Institute serves as a center of intellectual creativity and innovation by promoting
          collaboration across disciplines and carefully balancing technical, economic and societal
          needs. Our solutions are multi-disciplinary in nature and seek to improve the quality of
          life and standards of living of our local community.
        </p>
      </div>
      <div class="col-md-2">
        <SidebarView :title="sidebarTitle" :items="sidebarItems" />
      </div>
    </div>
  </div>
</template>
<script>
const breadcrumbItems = ref([{ label: 'About', to: '/about' }]) // Initialize with default breadcrumb
const sidebarTitle = ref('About the Institute')
const sidebarItems = ref([
  { label: 'About', to: '/about/' },
  {
    label: 'Letter from the Director',
    to: '/about/letterfromthedirector'
  }
])

export default {
  components: {
    BreadcrumbView,
    SidebarView
  },
  setup() {
    return {
      breadcrumbItems,
      sidebarTitle,
      sidebarItems
    }
  }
}
</script>
<style scoped></style>
