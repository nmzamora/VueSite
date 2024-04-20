<script setup>
import BreadcrumbView from '@/components/BreadcrumbView.vue'
</script>
<template>
  <div class="container mt-2 mb-5 col-8">
    <BreadcrumbView :items="breadcrumbItems" />
    <div class="row">
      <h2>A Letter from the Director</h2>
      <div class="col-md-2">
        <img
          class="img-fluid"
          alt="headshot of Krystel Castillo"
          src="http://texasenergy.utsa.edu/images/uploads/Dr.Castillo_letter.jpg"
        />
      </div>
      <div class="col-md-8">
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
        <ul class="dropdown-menu show">
          <li>
            <span class="dropdown-item-text" style="font-weight: bold">About the Institute</span>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="/About/LetterFromTheDirector"
              >Letter from the Director</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    BreadcrumbView
  },
  data() {
    return {
      breadcrumbItems: [
        { label: 'About', to: '/about' },
        { label: 'Letter from the Director', to: '/about/letterfromthedirector' }
      ]
    }
  }
}
</script>
