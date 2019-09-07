<template>
  <Layout footerClass="bg-grey">
    <!-- WELCOME
    ==================================================-->
    <section class="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover bg-header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <!-- Heading -->
            <h1 class="display-2 font-weight-bold text-white">Interested? Contact us for a booking.</h1>

            <!-- Text -->
            <p class="lead text-white-75 mb-0"></p>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- SHAPE
    ==================================================-->
    <div class="position-relative">
      <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
        <Curve1 />
      </div>
    </div>

    <!-- INFO
    ==================================================-->
    <section class="py-7 py-md-9 border-bottom border-gray-300" id="info">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <!-- Button -->
            <a
              href="#info"
              class="btn btn-white btn-rounded-circle shadow mt-n11 mt-md-n13"
              data-toggle="smooth-scroll"
            >
              <i class="fe fe-arrow-down"></i>
            </a>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div class="col-12 col-md-4 text-center border-right border-gray-300">
            <!-- Heading -->
            <h6 class="text-uppercase text-gray-700 mb-1">Message us</h6>

            <!-- Link -->
            <div class="mb-5 mb-md-0">
              <a href="javascript:tidioChatApi.open();" class="h4 text-primary">Start a chat!</a>
            </div>
          </div>
          <div class="col-12 col-md-4 text-center border-right border-gray-300">
            <!-- Heading -->
            <h6 class="text-uppercase text-gray-700 mb-1">Call anytime</h6>

            <!-- Link -->
            <div class="mb-5 mb-md-0">
              <a href="tel:+447903878108" class="h4">+44 (0) 7903878108</a>
            </div>
          </div>
          <div class="col-12 col-md-4 text-center">
            <!-- Heading -->
            <h6 class="text-uppercase text-gray-700 mb-1">Email us</h6>

            <!-- Link -->
            <a href="mailto:support@ucanetwork.co.uk" class="h4">support@ucanetwork.co.uk</a>
          </div>
        </div>
        <!-- / .row -->
      </div>
    </section>

    <!-- FORM
    ==================================================-->
    <section class="pt-8 pt-md-11 pb-8 pb-md-14">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <!-- Heading -->
            <h2 class="font-weight-bold">Get in touch for a quote!</h2>

            <!-- Text -->
            <p class="font-size-lg text-muted mb-7 mb-md-9">
              We always want to hear from you! Let us know how we can help, and we’ll get back to you as soon as possible
              with a quote and a personal mentor who is ready to help you maximise your potential.
            </p>
          </div>
        </div>
        <!-- / .row -->
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 col-lg-10">
            <!-- Form -->
            <form name="Booking" netlify>
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group mb-5">
                    <!-- Label -->
                    <label for="parentName">Full name of parent</label>

                    <!-- Input -->
                    <input
                      name="Parent name"
                      type="text"
                      class="form-control"
                      id="parentName"
                      placeholder="Full name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group mb-5">
                    <!-- Label -->
                    <label for="studentName">Full name of student</label>

                    <!-- Input -->
                    <input
                      required
                      name="Student name"
                      type="text"
                      class="form-control"
                      id="studentName"
                      placeholder="Full name"
                    />
                  </div>
                </div>
              </div>
              <!-- / .row -->
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group mb-5">
                    <!-- Label -->
                    <label for="parentName">Year group</label>

                    <select name="Year group" class="form-control">
                      <option value selected disabled hidden>Choose year</option>
                      <option value="Year 13">Year 13</option>
                      <option value="Year 12">Year 12</option>
                      <option value="Year 11">Year 11</option>
                      <option value="Year 10">Year 10</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group mb-5">
                    <!-- Label -->
                    <label for="email">Email</label>

                    <!-- Input -->
                    <input
                      required
                      name="email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="hello@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <!-- / .row -->
              <div class="row">
                <div class="col-12">
                  <div class="form-group mb-7 mb-md-9">
                    <!-- Label -->
                    <label for="contactMessage">Message</label>

                    <!-- Input -->
                    <textarea
                      name="Message"
                      class="form-control"
                      id="contactMessage"
                      rows="5"
                      placeholder="Let us know what kind of service you are looking for and we will get back to you as soon as possible."
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- / .row -->
              <div class="row justify-content-center">
                <div class="col-auto">
                  <!-- Submit -->
                  <button type="submit" class="btn btn-primary lift">Send message</button>
                </div>
              </div>
              <!-- / .row -->
            </form>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "Bookings"
  }
};
</script>

<style scoped>
.bg-header {
  background-image: url(~@/assets/img/covers/cover-5.jpg);
}
</style>
