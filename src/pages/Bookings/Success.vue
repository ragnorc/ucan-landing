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
            <button class="btn btn-primary text-white lift mt-5" @click="checkout">Pay now</button>
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
    title: "Thanks for yout booking!"
  },
  methods: {
    checkout() {
      var stripe = Stripe("pk_live_Xt3bHlT7GplAz7DfhatLOhia00ZaJvH2VM");
      stripe
        .redirectToCheckout({
          items: [
            // Replace with the ID of your SKU
            { sku: this.$route.query.package, quantity: 1 }
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
