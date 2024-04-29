<template>
  <div class="container my-3">
    <h3>Test Fancybox</h3>
    <Fancybox
      :options="{
        Carousel: {
          infinite: false
        }
      }"
    >
      <a class="p-3" data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
      </a>
      <a class="p-3" data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
        <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
      </a>
      <a class="p-3" data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
        <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
      </a>
      <a class="p-3" data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
        <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
      </a>
      <a class="p-3" data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
        <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
      </a>
    </Fancybox>
  </div>
</template>
<script></script>

<style></style>
