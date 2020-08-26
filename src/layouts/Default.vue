<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <!-- Brand -->
          <g-link class="navbar-brand" to="/">
            <img src="@/assets/img/logos/ucan-logo.png" class="navbar-brand-img" alt="..." />
          </g-link>

          <!-- Toggler -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            v-on:click="showMobileNav = true"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Collapse -->
          <div
            class="collapse navbar-collapse"
            v-bind:class="{ show: showMobileNav }"
            id="navbarCollapse"
          >
            <!-- Toggler -->
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              v-on:click="showMobileNav = false"
            >
              <i class="fe fe-x"></i>
            </button>

            <!-- Navigation -->
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <g-link class="nav-link" id="navbarHome" to="/">Home</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" id="navbarHome" to="/about">About</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" id="navbarHome" to="/services">Services</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" id="navbarHome" to="/bookings">Bookings</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" id="navbarHome" to="/blog">Blog</g-link>
              </li>
            </ul>

            <!-- Button -->
            <g-link class="navbar-btn btn btn-sm btn-primary lift ml-auto" to="/apply">Work with us</g-link>
          </div>
        </div>
      </nav>
    </header>
    <slot />
    <footer :class="'py-8 py-md-11 '+footerClass">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <!-- Brand -->
            <img src="@/assets/img/logos/ucan-logo.png" alt="..." class="navbar-brand-img mb-2" />

            <!-- Text -->
            <p class="text-gray-700 mb-2">Maximising potential.</p>

            <!-- Social -->
            <ul class="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li class="list-inline-item list-social-item mr-3">
                <a href="#!" class="text-decoration-none">
                  <Instagram />
                </a>
              </li>
              <li class="list-inline-item list-social-item mr-3">
                <a href="#!" class="text-decoration-none">
                  <Facebook />
                </a>
              </li>
              <li class="list-inline-item list-social-item mr-3">
                <a href="#!" class="text-decoration-none">
                  <Twitter alt="..." />
                </a>
              </li>
            </ul>
          </div>
          <div class="col my-auto">
            <div class="d-flex flex-row justify-content-center">
              <div class="text-center mx-4">
                <!-- Heading -->
                <a href="javascript:tidioChatApi.open();">
                  <h6 class="font-weight-bold text-uppercase text-gray-700">Contact & Help</h6>
                </a>
              </div>
              <div class="text-center mx-4">
                <!-- Heading -->
                <h6 class="font-weight-bold text-uppercase text-gray-700">Terms & Conditions</h6>
              </div>
              <div class="text-center mx-4">
                <!-- Heading -->
                <g-link to="/privacy">

                <h6 class="font-weight-bold text-uppercase text-gray-700">Privacy Policy</h6>
               </g-link>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </footer>
  </div>
</template>

<script>
import Facebook from "@/assets/img/icons/social/facebook.svg";
import Twitter from "@/assets/img/icons/social/twitter.svg";
import Instagram from "@/assets/img/icons/social/instagram.svg";
export default {
  components: {
    Facebook,
    Twitter,
    Instagram
  },
  data: function() {
    return {
      showMobileNav: false
    };
  },
  props: ["footerClass"],
  created() {
    this.$Progress.start();
  },
  mounted() {
    //  [App.vue specific] When Default.vue is finish loading finish the progress bar
    this.$Progress.finish();
  }
};
</script>

<style>
</style>
