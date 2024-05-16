<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const navbarCollapse = ref(null)

onMounted(() => {
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link')

  navbarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse.value && navbarCollapse.value.classList.contains('show')) {
        navbarCollapse.value.classList.remove('show')
      }
    })
  })
})
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top nav-style" data-bs-theme="light">
    <div class="container-fluid">
      <div class="navbar-brand" style="margin-right: 3.5rem">
        <RouterLink to="/">
          <img
            src="http://texasenergy.utsa.edu/images/site/header_logo.png"
            alt="Logo"
            width="100%"
            class="d-inline-block img-fluid"
          />
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/research">Research</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/studentinvolvement"
              >Student Involvement</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/outreach">Outreach</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/events">Events</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/news">News</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-2" to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-style {
  border-bottom: 4px solid #f15a22;
  opacity: 95%;
}

.nav-link {
  font-size: 125%;
  font-weight: bold;
  justify-content: space-between;
  flex-direction: row !important;
  text-align: center;
}

a {
  color: #0c2340;
}

a:hover {
  color: #d3430d;
  background-color: whitesmoke;
}
</style>
