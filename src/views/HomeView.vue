<script setup></script>

<template>
  <body>
    <div class="container mt-3" style="width: 80%">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg"
              class="d-block w-100 img-fluid"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Slide 1</h4>
              <p>Sample text</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100 img-fluid"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Slide 2</h4>
              <p>Sample text</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/289927/pexels-photo-289927.jpeg"
              class="d-block w-100 img-fluid"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Slide 3</h4>
              <p>Sample text</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <hr class="mx-auto" />
    <div class="container">
      <h2>Research Focus</h2>
      <div class="row g-0">
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
      </div>
      <div class="row g-0">
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <h3><i class="bi bi-vinyl-fill"></i></h3>
            <h4>Text</h4>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
hr {
  border-width: 3px;
  width: 75%;
}
i {
  font-size: 200%;
}
.card {
  align-items: center;
  background-color: #dbdee3;
}
</style>
