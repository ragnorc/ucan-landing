// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/scss/theme.scss";
import "~/assets/fonts/Feather/feather.css";
import VueProgressBar from "vue-progressbar";
import Curve1 from "@/assets/img/shapes/curves/curve-1.svg";
import Curve3 from "@/assets/img/shapes/curves/curve-3.svg";
import Curve4 from "@/assets/img/shapes/curves/curve-4.svg";

export default function(Vue, { router, head, isClient }) {
  head.script.push({
    src: "//code.tidio.co/6f7ybszsorm7ovsbqg1k6dhjjovlkkgn.js",
    body: true
  });
  head.script.push({
    src: "https://js.stripe.com/v3/",
    body: true
  });

  Vue.use(VueProgressBar, {
    color: "#236B79",
    failedColor: "#874b4b",
    thickness: "3px",
    transition: {
      speed: "0.7s",
      opacity: "1",
      termination: 300
    },
    autoRevert: true,
    location: "top",
    inverse: false
  });

  head.htmlAttrs = { lang: "en", prefix: "og: http://ogp.me/ns#" };

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Curve1", Curve1);
  Vue.component("Curve3", Curve3);
  Vue.component("Curve4", Curve4);
}
