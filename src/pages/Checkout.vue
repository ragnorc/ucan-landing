<template></template>

<script>
import { StripeCheckout } from "vue-stripe-checkout";
export default {
  components: {
    StripeCheckout
  },
  data: () => ({
    loading: false,
    publishableKey: "pk_live_Xt3bHlT7GplAz7DfhatLOhia00ZaJvH2VM",
    items: [
      {
        sku: "sku_GQTviVJYxPeCYD",
        quantity: 1
      }
    ],
    successUrl: "https://ucanetwork.co.uk",
    cancelUrl: "https://ucanetwork.co.uk"
  }),
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
};
</script>
