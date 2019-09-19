<template>
  <Layout footerClass="bg-light" :title="$page.post.title">
    <!-- HEADER
    ==================================================-->
    <section class="pt-8 pt-md-11">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-9 col-xl-8">
            <!-- Heading -->
            <h1 class="display-4 text-center">{{ $page.post.title }}</h1>

            <!-- Text -->
            <p class="lead mb-5 text-center text-muted">{{ $page.post.description }}</p>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- SECTION
    ==================================================-->
    <section class="pt-6 pt-md-8">
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-html="richtextToHTML($page.post.content)"
            class="col-12 col-md-10 col-lg-9 col-xl-8"
          ></div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- SECTION
    ==================================================-->
    <section class="pt-6 pt-md-8 pb-8 pb-md-11">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-9 col-xl-8">
            <!-- Meta -->
            <div class="row align-items-center py-5 border-top border-bottom">
              <div class="col-auto"></div>
              <div class="col ml-n5">
                <!-- Name -->
                <h6 class="text-uppercase mb-0">{{$page.post.author}}</h6>

                <!-- Date 
                <time
                  class="font-size-sm text-muted"
                  :datetime="this.fields.date"
                >Published on {{this.fields.readable_date}}</time>-->
              </div>
              <div class="col-auto">
                <!-- Share -->
                <span class="h6 text-uppercase text-muted d-none d-md-inline mr-4">Share:</span>

                <!-- Icons -->
                <ul class="d-inline list-unstyled list-inline list-social">
                  <li class="list-inline-item list-social-item mr-3">
                    <a
                      :href="'https://www.facebook.com/sharer/sharer.php?u=https://ucanetwork.co.uk' + this.$page.post.path"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li class="list-inline-item list-social-item mr-3">
                    <a
                      :href="'https://twitter.com/intent/tweet?url=https://ucanetwork.co.uk'+this.$page.post.path"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      <Twitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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

    <!-- ARTICLES
    ==================================================-->
    <section class="pt-7 pt-md-10 bg-light">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-12 col-md">
            <!-- Heading -->
            <h3 class="mb-0">Latest Posts</h3>

            <!-- Text -->
            <p class="mb-0 text-muted">Read more about how to perfect your personal statement.</p>
          </div>
          <div class="col-12 col-md-auto">
            <!-- Button -->
            <g-link to="/blog" class="btn btn-sm btn-outline-gray-300 d-none d-md-inline">View all</g-link>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div
            v-for="{node} in $page.additionalPosts.edges"
            class="col-12 col-md-6 col-lg-4 d-flex"
            :key="node.id"
          >
            <!-- Card -->
            <div class="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
              <!-- Image -->
              <g-link class="card-img-top" :to="node.path">
                <!-- Image -->
                <g-image class="card-img-top" :src="node.image.file.url+'?w=400'" />

                <!-- Shape -->
                <div class="position-relative">
                  <div class="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <Curve3 />
                  </div>
                </div>
              </g-link>

              <!-- Body -->
              <g-link class="card-body" :to="node.path">
                <!-- Heading -->
                <h3>{{ node.title }}</h3>

                <!-- Text -->
                <p class="mb-0 text-muted">{{ node.description }}</p>
              </g-link>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
  </Layout>
</template>

<page-query>
query getBlogPosts($path: String!){
  post: contentfulBlogPost(path: $path) {
    title
    author
    path
    image {
          file {
            url
          }
        }
    createdAt
    content
    description
  }

  additionalPosts: allContentfulBlogPost(limit:3 filter: { path: { ne: $path}}) {
   edges {
      node {
        title
        path
        image {
          file {
            url
          }
        }
        description
        content
        
      }
    }
  }
}


</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Facebook from "@/assets/img/icons/social/facebook.svg";
import Twitter from "@/assets/img/icons/social/twitter.svg";

export default {
  components: {
    Layout,
    Facebook,
    Twitter
  },
  metaInfo: function() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.$page.post.image.file.url
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.description
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: this.$page.post.image.file.url
        },
        {
          key: "twitter:card",
          name="twitter:card",
          content="summary_large_image"
        }
      ]
    };
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    }
  }
};
</script>
