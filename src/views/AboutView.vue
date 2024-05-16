<script setup>
import { ref } from 'vue'

const breadcrumbItems = ref([{ label: 'About', to: '/about' }]) // Initialize with default breadcrumb
const sidebarTitle = ref('About the Institute')
const sidebarItems = ref([
  { label: 'About the Institute', to: '/about/' },
  {
    label: 'Letter from the Director',
    to: '/about/letterfromthedirector'
  }
])
</script>
<script>
import BreadcrumbView from '@/components/BreadcrumbView.vue'
import SidebarView from '@/components/SidebarView.vue'

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
<template>
  <div class="container mt-2 mb-5">
    <BreadcrumbView :items="breadcrumbItems" />
    <div class="row">
      <h2>About The Institute</h2>
      <div class="col-md-3">
        <div class="container-fluid">
          <Fancybox
            :options="{
              Carousel: {
                infinite: false
              }
            }"
          >
            <a
              class="img-fluid"
              data-fancybox="gallery"
              href="http://texasenergy.utsa.edu/images/uploads/Lab8.jpg"
            >
              <img
                src="http://texasenergy.utsa.edu/images/uploads/Lab8.jpg"
                alt="group image of lab members"
                class="img-fluid"
              />
            </a>
          </Fancybox>
        </div>
      </div>
      <div class="col-md-5">
        <p>
          The University of Texas at San Antonio created the Texas Sustainable Energy Research
          Institute to partner with our community and contribute to a new energy future that builds
          on a diverse resource base to position San Antonio as a significant contributor to the
          21st century global energy economy.
        </p>
        <p>
          The Institute integrates scientific discovery, engineering innovation and policy
          deliberations with pragmatic implementation and a commitment to our multicultural
          traditions to realize the promise of tomorrow’s America as a global energy leader. The
          Institute also serves as a center of intellectual creativity that promotes socioeconomic
          development regionally, nationally and globally.
        </p>
        <p>
          We provide systems solutions that pursue novel opportunities for technology insertion to
          reduce costs, improve reliability and assure responsible environmental stewardship that
          contributes to our energy future. Our impact will drive San Antonio’s economic future,
          coalesce our intellectual capital, serve as a magnet for thought leaders from around the
          globe and help secure a foundation for enhanced prosperity for south Texas and the Alamo
          region for decades to come.
        </p>
        <p>
          Visit our Contact page to learn more about our team, or see the Research page to find more
          about our key research contributions.
        </p>
      </div>
      <div class="col-md-2">
        <SidebarView :title="sidebarTitle" :items="sidebarItems" />
      </div>
    </div>
  </div>
</template>
