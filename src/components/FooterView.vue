<template>
  <footer class="border-top footer-background-utsa">
    <div class="container footer-width">
      <footer class="py-5 footer-background-utsa">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-1">
                <a href="#" class="nav-link p-0 text-body">Gallery</a>
              </li>
              <li class="nav-item nav-utsa mb-1">
                <a href="#" class="nav-link p-0 text-body">Events</a>
              </li>
              <li class="nav-item mb-1">
                <a href="#" class="nav-link p-0 text-body">News</a>
              </li>
              <li class="nav-item mb-1">
                <a href="#" class="nav-link p-0 text-body">Student</a>
              </li>
              <li class="nav-item mb-1">
                <a href="#" class="nav-link p-0 text-body">Education</a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-3 mb-3">
            <h5>Contact Us</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-1">
                <a href="tel:2104587970" class="nav-link p-0 text-body"
                  ><i class="bi bi-telephone-fill nav-bi"></i> (210) 458-7970</a
                >
              </li>
              <li class="nav-item mb-1">
                <a href="mailto:TexasEnergy@utsa.edu" class="nav-link p-0 text-body"
                  ><i class="bi bi-envelope-fill nav-bi"></i>TexasEnergy@utsa.edu</a
                >
              </li>
              <li class="nav-item mb-1">
                <hr />
                <p class="p-0 text-body-secondary">
                  <span class="text-decoration-underline"
                    >Texas Sustainable Energy Research Institute</span
                  ><br /><i class="bi bi-geo-alt-fill"></i>1 UTSA Circle, San Antonio, TX 78249
                </p>
              </li>
            </ul>
          </div>

          <div class="col-md-6 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
          <p>&copy; 2024 Nicholas Zamora, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-body-emphasis" href="https://www.facebook.com/TexasEnergyUTSA"
                ><i class="bi bi-facebook"></i
              ></a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="https://twitter.com/texasenergyutsa"
                ><i class="bi bi-twitter"></i
              ></a>
            </li>
            <li class="ms-3">
              <a
                class="link-body-emphasis"
                href="https://www.linkedin.com/company/texas-sustainable-energy-research-institute/"
                ><i class="bi bi-linkedin"></i
              ></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </footer>
</template>
<style scoped>
.footer-width {
  max-width: 1250px;
}

.nav-bi {
  padding-right: 3px;
}
.nav-utsa {
  color: #0c2340;
}
footer {
  bottom: 0;
  width: 100%;
}
.footer-background-utsa {
  background-color: #dbdee3;
}
</style>
