<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top nav-style" data-bs-theme="light">
    <div class="container-fluid">
      <div class="navbar-brand" style="margin-right: 3.5rem">
        <a>
          <RouterLink to="/">
            <img
              src="http://texasenergy.utsa.edu/images/site/header_logo.png"
              alt="Logo"
              width="100%"
              class="d-inline-block img-fluid"
            />
          </RouterLink>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav align-items-center">
          <RouterLink class="nav-link mx-2" to="/about">About</RouterLink>
          <RouterLink class="nav-link mx-2" to="/research">Research</RouterLink>
          <RouterLink class="nav-link mx-2" to="/studentinvolvement"
            >Student Involvement</RouterLink
          >
          <RouterLink class="nav-link mx-2" to="/outreach">Outreach</RouterLink>
          <RouterLink class="nav-link mx-2" to="/events">Events</RouterLink>
          <RouterLink class="nav-link mx-2" to="/news">News</RouterLink>
          <RouterLink class="nav-link mx-2" to="/contact">Contact</RouterLink>
        </div>
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
