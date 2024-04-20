<script setup></script>

<template>
  <body>
    <section>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="img-fluid carousel-header"
              src="https://images.pexels.com/photos/289927/pexels-photo-289927.jpeg"
              aria-hidden="true"
              focusable="false"
            />
            <div class="container">
              <div class="carousel-caption text">
                <h1>Welcome CPS Energy.</h1>
                <p class="opacity-75">
                  TSERI meets with CPS Executives to discuss projects. Click here to see more.
                </p>
                <p><a class="btn btn-lg btn-utsa" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="img-fluid carousel-header"
              src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg"
              aria-hidden="true"
              focusable="false"
            />
            <div class="container">
              <div class="carousel-caption text">
                <h1>SCO2 Power Generation</h1>
                <p>
                  Supercritical Carbon Dioxide (sCO2) Power Generation for Renewable Energy
                  Extraction. Click here for more information.
                </p>
                <p><a class="btn btn-lg btn-utsa" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="img-fluid carousel-header"
              src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              aria-hidden="true"
              focusable="false"
            />
            <div class="container">
              <div class="carousel-caption text">
                <h1>Robotic Solar Tracking System</h1>
                <p>
                  Development of Autonomous Soft Robotic Solar Tracking System. Click here for more
                  information.
                </p>
                <p><a class="btn btn-lg btn-utsa" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <div class="container px-4 py-5" id="icon-grid">
      <h2 class="pb-2 border-bottom">Icon grid</h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-microchip fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-calendar-days fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-calendar-days fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-calendar-days fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-calendar-days fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-calendar-days fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-calendar-days fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <i class="fa-solid fa-calendar-days fa-3x px-3"></i>
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md">
          <h3>Energy News</h3>
          <div class="card"></div>
        </div>
        <div class="col-md">
          <h3>Video</h3>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.btn-utsa {
  background-color: #0c2340;
  color: white;
}
hr {
  border-width: 3px;
  width: 75%;
}

.carousel-header {
  object-fit: cover;
  width: 100%;
  height: 400px;
}
.card {
  align-items: center;
  background-color: #dbdee3;
}
</style>
