<template>
  <div class="container px-5 mt-2 mb-4">
    <div class="d-flex align-items-start card flex-row mx-auto shadow-sm border">
      <div
        class="nav flex-column nav-pills me-3 card-header"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          class="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Description
        </button>
        <button
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Resources
        </button>
        <button
          class="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Collaborators
        </button>
      </div>
      <div class="tab-content card-body" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          tabindex="0"
        >
          <h4 class="mt-2">Text</h4>
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
          tabindex="1"
        >
          <h4 class="mt-2">Text</h4>
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
          tabindex="2"
        >
          <h4 class="mt-2">Text</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script setup lang="ts"></script>
