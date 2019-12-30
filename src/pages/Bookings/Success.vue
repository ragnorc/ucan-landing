<template>
  <Layout>
    <!-- WELCOME
    ==================================================-->
    <section class="py-8 py-md-11">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <!-- Heading -->
            <h1 class="display-2">Thanks for your booking!</h1>

            <!-- Text -->
            <button
              class="btn btn-primary text-white lift mt-5"
              @click="checkout(this.$route.query.package)"
            >Pay now</button>
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
    title: "About"
  }
};
</script>
