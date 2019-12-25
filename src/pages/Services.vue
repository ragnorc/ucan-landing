<template>
  <Layout footerClass="bg-gray-200">
    <!-- WELCOME
    ==================================================-->
    <section class="pt-4 pt-md-11">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5 order-md-2">
            <!-- Image -->
            <g-image
              src="@/assets/img/illustrations/illustration-1.png"
              class="img-fluid mb-6 mb-md-0"
              alt="..."
            />
          </div>
          <div class="col-12 col-md-7 order-md-1">
            <!-- Heading -->
            <h1 class="display-4">
              Personalised packages that
              <br />
              <span class="text-primary">suit your needs.</span>
            </h1>

            <!-- Text -->
            <p class="lead text-muted mb-0">
              We offer different packages for students from Year 10-13 applying to UK universities. Each package is
              personalised to the student.
              <g-link to="/bookings">Contact us</g-link>&nbsp;for a quote.
            </p>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- ARTICLES
    ==================================================-->
    <section class="pt-8 pt-md-11">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Card -->
            <div
              v-for="{ node } in $page.packages.edges"
              :key="node.id"
              class="card card-border-xl card-row shadow-light-lg mb-6"
            >
              <div class="row no-gutters">
                <div class="col-12">
                  <!-- Badge -->
                  <span class="badge badge-pill badge-gray-600 badge-float badge-float-outside">
                    <span class="h6 text-uppercase">{{ node.packageInfo}}</span>
                  </span>
                </div>

                <div class="col-12 order-md-1">
                  <!-- Body -->
                  <div class="card-body flex justify-center">
                    <h3>{{node.title}}</h3>

                    <div v-html="richTextToHTML(node.content)"></div>

                    <button
                      class="btn btn-primary text-white lift mt-5"
                      @click="checkout(node.sku)"
                    >Book now</button>
                  </div>
                  <!-- 
           
                  <a class="card-meta" href="#!">

                    <hr class="card-meta-divider">

                  
                    <h6 class="text-uppercase text-muted mr-2 mb-0">
                      {{ $prismic.richTextAsPlain(item.package_meta) }}
                    </h6>
                    
                   
                    <p class="h6 text-uppercase text-muted mb-0 ml-auto">
                      <time datetime="2019-05-31">May 31</time>
                    </p>

                  </a>
                  -->
                </div>
              </div>
              <!-- / .row -->
            </div>

            <!-- Card -->
            <div class="card card-row shadow-dark-lg mb-12">
              <div class="row no-gutters">
                <div class="col-12">
                  <!-- Badge -->
                  <span class="badge badge-pill badge-gray-600 badge-float badge-float-outside">
                    <span class="h6 text-uppercase">Featured</span>
                  </span>
                </div>
                <a class="col-12 col-md-6 bg-cover card-img-left bg-cambridge" href="#!">
                  <!-- Image (placeholder) -->
                  <img
                    src="@/assets/img/photos/cambridge.jpeg"
                    alt="..."
                    class="img-fluid d-md-none invisible"
                  />

                  <!-- Shape -->
                  <div
                    class="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block"
                  >
                    <Curve4></Curve4>
                  </div>
                </a>
                <div class="col-12 col-md-6">
                  <!-- Body -->
                  <a class="card-body" href="#!">
                    <!-- Heading -->
                    <h3>Oxbridge applications</h3>

                    <!-- Text -->
                    <p class="mb-0 text-muted">
                      We also offer a competitive entry package for students focusing on an Oxbridge application. We can
                      advise on making the choice between Oxford and Cambridge (you can only apply to one!), selecting
                      the college that is right for you, and crafting your personal statement to maximise the chance of
                      acceptance. Interview preparation is also available upon request.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
      <div class="container pb-6 pb-md-8 mb-6">
        <div class="row align-items-center">
          <div class="col-12 col-md">
            <!-- Heading -->
            <h3 class="mb-1 font-weight-bold">Still not sure which package is right for you?</h3>

            <!-- Text -->
            <p class="font-size-lg text-muted mt-3 mb-6 mb-md-0">
              We can create a personalised package to best suit your needs.
              <br />Let us know what you are looking for and we will find you the best possible option.
              <br />With only one personal statement for all five of your universities choices, UCAS applications can seem
              difficult, but UCAN makes it so much easier.
            </p>
          </div>
          <div class="col-12 col-md-3 mx-auto">
            <!-- Button -->
            <g-link to="/bookings" class="btn btn-primary lift">Get a free quote</g-link>
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
        <Curve1></Curve1>
      </div>
    </div>

    <!-- CTA
    ==================================================-->
    <section class="pt-6 pt-md-8 bg-gray-200"></section>
  </Layout>
</template>

<page-query>
query getPackages {
 packages: allContentfulPackage {
  edges {
    node {
      id
      packageInfo
      title
      content
      sku
    }
  }
}
}
</page-query>

<script>
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  metaInfo: {
    title: "Services"
  },

  methods: {
    richTextToHTML(content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) => {
            return `<p class='text-muted'>${next(node.content)}</p>`;
          },
          [BLOCKS.LIST_ITEM]: (node, next) => {
            return `<div class="d-flex">

                  <!-- Badge -->
                  <div class="badge badge-rounded-circle badge-success-soft mt-3 mr-4">
                      <i class="fe fe-check"></i>
                  </div>

                  <!-- Text -->
                  <p class="text-gray-800">
                      ${next(node.content)}
                  </p>

              </div>`;
          }
        }
      });
    },
    checkout(sku) {
      var stripe = Stripe("pk_live_Xt3bHlT7GplAz7DfhatLOhia00ZaJvH2VM");
      stripe
        .redirectToCheckout({
          items: [
            // Replace with the ID of your SKU
            { sku, quantity: 1 }
          ],
          successUrl: "https://ucanetwork.co.uk",
          cancelUrl: "https://ucanetwork.co.uk"
        })
        .then(function(result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
    }
  }
};
</script>

<style scoped>
.bg-cambridge {
  background-image: url(~@/assets/img/photos/cambridge.jpeg);
}
</style>
