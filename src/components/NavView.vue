<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
    <div class="container-fluid">
      <a class="navbar-brand">
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
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/research">Research</RouterLink>
          <RouterLink class="nav-link" to="/studentinvolvement">Student Involvement</RouterLink>
          <RouterLink class="nav-link" to="/outreach">Outreach</RouterLink>
          <RouterLink class="nav-link" to="/events">Events</RouterLink>
          <RouterLink class="nav-link" to="/news">News</RouterLink>
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.nav-link {
  font-size: 150%;
  font-weight: bold;
  justify-content: space-between;
  flex-direction: row !important;
  text-align: center;
}
a {
  color: #495a70;
}
a:hover {
  color: #d3430d;
}
</style>
