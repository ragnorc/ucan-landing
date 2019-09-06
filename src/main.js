// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/scss/theme.scss";
import "~/assets/fonts/Feather/feather.css";
import Curve1 from "@/assets/img/shapes/curves/curve-1.svg";
import Curve3 from "@/assets/img/shapes/curves/curve-3.svg";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Curve1", Curve1);
  Vue.component("Curve3", Curve3);
}
