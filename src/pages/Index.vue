<template>
  <Layout footerClass="bg-gray-200">
    <!-- WELCOME
    ==================================================-->
    <section class="pt-4 pt-md-11">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5 col-lg-6 order-md-2">
            <!-- Image -->
            <img
              src="@/assets/img/illustrations/illustration-2.png"
              class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
              alt="..."
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <div class="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
            <!-- Heading -->
            <h1 class="display-3 text-center text-md-left">
              Personal statements made
              <span class="text-primary">easy</span>.
              <br />
            </h1>

            <!-- Text -->
            <p class="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Helping you achieve your full academic potential with a unique and personalised approach to UCAS
              applications.
            </p>

            <!-- Buttons -->
            <div class="text-center text-md-left">
              <g-link to="bookings" class="btn btn-primary shadow lift mr-1">
                Get a free quote now
                <i class="fe fe-arrow-right d-none d-md-inline ml-3"></i>
              </g-link>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- 
    ==================================================-->
    <section class="pt-8 pt-md-11" id="guidance">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <!-- Badge -->
            <span class="badge badge-pill badge-primary-soft mb-3">
              <span class="h6 text-uppercase">1-on-1 guidance</span>
            </span>

            <!-- Heading -->
            <h1>
              <span class="text-primary">Impress</span> the admissions officers.
            </h1>

            <!-- Text -->
            <p class="lead text-gray-700 mb-7 mb-md-9">
              UCAN provides personalised 1-on-1 guidance from current undergraduates at top UK universities who have
              successfully undergone the same application process. UCAN helps you to:
            </p>
          </div>
        </div>
        <!-- / .row -->
        <div class="row align-items-center">
          <div class="col-12 col-md-6 col-lg-7">
            <!-- Screenshot -->
            <div class="mb-8 mb-md-0">
              <!-- Image -->
              <img
                src="@/assets/img/illustrations/illustration-7.png"
                alt="..."
                class="img-fluid mw-md-110 float-right mr-md-6 mb-6 mb-md-0"
              />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-5">
            <div class="d-flex">
              <!-- Badge -->
              <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i class="fe fe-check"></i>
              </div>

              <!-- Text -->
              <p class="text-gray-800">Reflect on your skills and experiences.</p>
            </div>
            <div class="d-flex">
              <!-- Badge -->
              <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i class="fe fe-check"></i>
              </div>

              <!-- Text -->
              <p class="text-gray-800">Communicate your aptitudes, interests and accomplishments.</p>
            </div>
            <div class="d-flex">
              <!-- Badge -->
              <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i class="fe fe-check"></i>
              </div>

              <!-- Text -->
              <p class="text-gray-800">Identify the most relevant information.</p>
            </div>
            <div class="d-flex">
              <!-- Badge -->
              <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i class="fe fe-check"></i>
              </div>

              <!-- Text -->
              <p class="text-gray-800">Stay within the 4000-character limit.</p>
            </div>
            <div class="d-flex">
              <!-- Badge -->
              <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                <i class="fe fe-check"></i>
              </div>

              <!-- Text -->
              <p class="text-gray-800">Fine-tune your statement by removing typos or grammar errors.</p>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- Mentoring
    ==================================================-->
    <section class="py-8 py-md-12">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <!-- Badge -->
            <span class="badge badge-pill badge-primary-soft mb-3">
              <span class="h6 text-uppercase">Mentoring</span>
            </span>

            <!-- Heading -->
            <h2>
              Guidance from mentors at
              <br />
              <span class="text-primary">top UK universities</span>
              .
            </h2>

            <!-- Text -->
            <p class="font-size-lg text-gray-700 mb-6">
              There is nothing more effective than feedback from a reliable mentor who has recently been in the same
              position as you. They know how the system works and are here to help you through it.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <!-- Image -->
            <img
              src="@/assets/img/illustrations/illustration-3.png"
              alt="..."
              class="img-fluid mw-md-130"
            />
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- TESTIMONIALS
    ==================================================-->
    <section class="py-9 py-md-11 mb-9">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-12 col-md-5">
            <!-- Blockquote -->
            <blockquote class="blockquote text-center">
              <!-- Logo -->
              <img
                style="max-width: 120px"
                class="mb-5 mb-md-7 mx-auto"
                :src="$page.home.edges[0].node.firstQuoteImage.file.url"
              />
              <!-- Text -->
              <p class="mb-5 mb-md-7">{{$page.home.edges[0].node.firstQuote}}</p>

              <!-- Footer -->
              <footer class="blockquote-footer mb-8 mb-md-0">
                <span class="h6 text-uppercase">Aisha Q (Parent)</span>
              </footer>
            </blockquote>
          </div>
          <div class="col-12 col-md-1 border-right my-n8 my-md-n11 d-none d-md-block"></div>
          <div class="col-12 col-md-5 offset-md-1">
            <!-- Blockquote -->
            <blockquote class="blockquote text-center">
              <img
                style="max-width: 120px"
                class="mb-5 mb-md-7 mx-auto"
                :src="$page.home.edges[0].node.secondQuoteImage.file.url"
              />
              <!-- Text -->
              <p class="mb-5 mb-md-7">{{$page.home.edges[0].node.secondQuote}}</p>
              <!-- Footer -->
              <footer class="blockquote-footer mb-0">
                <span class="h6 text-uppercase">Jacob M. (Student)</span>
              </footer>
            </blockquote>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- SHAPE
    ==================================================-->
    <div class="position-relative">
      <div class="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
        <Curve></Curve>
      </div>
    </div>

    <!-- CTA
    ==================================================-->
    <section class="pt-6 pt-md-8 bg-gray-200">
      <div class="container pb-6 pb-md-8 border-bottom border-gray-300">
        <div class="row align-items-center">
          <div class="col-12 col-md">
            <!-- Heading -->
            <h3 class="mb-1 mt-5 font-weight-bold">Perfect your personal statement today!</h3>

            <!-- Text -->
            <p class="font-size-lg text-muted mb-6 mb-md-0">
              Get in touch with us and we will connect you with one of our top
              mentors.
            </p>
          </div>
          <div class="col-12 col-md-auto">
            <!-- Button -->
            <a href="bookings.html" class="btn btn-primary lift">Get in touch</a>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
  </Layout>
</template>

<page-query>
query Home {
 home: allContentfulHome {
  edges {
    node {
      firstQuote
      secondQuote
      firstQuoteImage {
        file {
          url
        }
      }
      secondQuoteImage {
        file {
          url
        }
      }
    }
  }
}
}
</page-query>

<script>
import Curve from "@/assets/img/shapes/curves/curve-1.svg";
export default {
  metaInfo: {
    title: "Personal statements made easy"
  },

  components: {
    Curve
  }
};
</script>
