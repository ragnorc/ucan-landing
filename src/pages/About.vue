<template>
  <Layout>
    <!-- WELCOME
    ==================================================-->
    <section class="py-8 py-md-11">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <!-- Heading -->
            <h1 class="display-2">Empowering students, maximising potential.</h1>

            <!-- Text -->
            <p
              class="lead text-muted mb-7 mb-md-9"
            >Universities and Colleges Applications Network (UCAN) is an educational consultancy that offers affordable personal statement guidance to students applying to UK universities.</p>
          </div>
        </div>
        <!-- / .row -->

        <div class="row">
          <div class="col-12">
            <!-- Image -->
            <div class="form-row">
              <div class="col-4">
                <img
                  src="@/assets/img/photos/woman-library.png"
                  class="img-fluid rounded shadow-lg h-1/2"
                  alt="..."
                />
              </div>
              <div class="col-3">
                <img
                  src="@/assets/img/photos/photo-17.jpg"
                  class="img-fluid rounded shadow-lg mb-4"
                  alt="..."
                />

                <img
                  src="@/assets/img/photos/photo-18.jpg"
                  class="img-fluid rounded shadow-lg mt-1"
                  alt="..."
                />
              </div>
              <div class="col-5">
                <div class="form-row mb-4">
                  <div class="col-5">
                    <img
                      src="@/assets/img/photos/photo-19.jpg"
                      class="img-fluid rounded shadow-lg"
                      alt="..."
                    />
                  </div>
                  <div class="col-7">
                    <img
                      src="@/assets/img/photos/photo-20.jpg"
                      class="img-fluid rounded shadow-lg"
                      alt="..."
                    />
                  </div>
                </div>
                <!-- / .row -->

                <img
                  src="@/assets/img/photos/photo-21.jpg"
                  class="img-fluid rounded shadow-lg mt-1"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / .container -->
    </section>

    <!-- CONTENT
    ==================================================-->
    <section class="pt-8 pt-md-11 pb-8">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8">
            <h3 class="mb-4"><strong>The problem</strong></h3>
            <p>With most undergraduate courses basing admission on the personal statement and grades alone, there is a lot of pressure on students when writing the personal statement. As one of the most important applications they will ever write, it is often a struggle to find the balance between writing creatively with confidence, and academically with humility. This is where UCAN comes in. </p>
            <h3 class="mb-4 mt-7"><strong>How we can help</strong></h3>
             <p>We provide support with formulating and refining ideas, prioritising the most relevant material and expressing enthusiasm for your subject. We boast a high success rate, with our students receiving offers from top UK institutions and often gaining a new perspective on their subject in the process. </p>
          </div>
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card shadow-light-lg">
              <div class="card-body">
              <h3>Our core values</h3>
              <div class="my-5">
                <div class="d-flex">

                  <!-- Badge -->
                  <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                  </div>

                  <!-- Text -->
                  <p class="text-gray-800">
                      Fulfilling potential
                  </p>

              </div>
              <div class="d-flex">

                  <!-- Badge -->
                  <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                  </div>

                  <!-- Text -->
                  <p class="text-gray-800">
                      Striving for excellence
                  </p>

              </div>

              <div class="d-flex">

                  <!-- Badge -->
                  <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                  </div>

                  <!-- Text -->
                  <p class="text-gray-800">
                      Sharing information
                  </p>

              </div>

              <div class="d-flex">

                  <!-- Badge -->
                  <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                  </div>

                  <!-- Text -->
                  <p class="text-gray-800">
                      Lifelong learning
                  </p>

              </div>
              </div>






              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <section class="py-7 py-md-11">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-7 text-center">
            <!-- Heading -->
            <h2>Helping students around the world.</h2>

            <!-- Text -->
            <p class="font-size-lg text-muted mb-7 mb-md-9">
              We work with students across the globe to help them reach some of the top universities in the world.
              Here are just a few of the destinations of our students:
            </p>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div
            v-for="logo in $page.about.edges[0].node.universityLogos"
            :key="logo.id"
            class="col-4 col-md-2"
          >
            <div class="img-fluid img-fluid mb-6 mb-md-8 svg-shim">
              <g-image :src="logo.file.url" style="height:80px" />
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- CTA
    ==================================================-->
    <section class="pt-6 pt-md-8">
      <div class="container pb-6 pb-md-8 border-bottom">
        <div class="row align-items-center">
          <div class="col-12 col-md">
            <!-- Heading -->
            <h3 class="font-weight-bold mb-1">Interested in joining our team?</h3>

            <!-- Text -->
            <p
              class="font-size-lg text-muted mb-5 mb-md-0"
            >Contact us and we'll get in touch with you.</p>
          </div>
          <div class="col-12 col-md-auto">
            <!-- Button -->
            <g-link to="/apply" class="btn btn-primary lift">Apply now</g-link>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
  </Layout>
</template>

<page-query>
query getAbout {
 about: allContentfulAbout {
  edges {
    node {
      id
      title
      universityLogos {
        id
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
export default {
  metaInfo: {
    title: "About | UCAN"
  }
};
</script>
