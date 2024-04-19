<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink to="/home">
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
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <nav></nav>
        <ul class="navbar-nav p-2 m-2">
          <li class="nav-item">
            <a class="nav-link"><RouterLink to="/about">About</RouterLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><RouterLink to="/research">Research</RouterLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><RouterLink to="/studentinvolvement">Student Involvement</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"><RouterLink to="/outreach">Outreach</RouterLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><RouterLink to="/events">Events</RouterLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><RouterLink to="/news">News</RouterLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><RouterLink to="/contact">Contact</RouterLink></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
ul {
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
