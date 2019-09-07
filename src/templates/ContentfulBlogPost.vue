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
                      :href="'https://www.facebook.com/sharer/sharer.php?u='+url"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      <img
                        src="@/assets/img/icons/social/facebook.svg"
                        class="list-social-icon"
                        alt="..."
                      />
                    </a>
                  </li>
                  <li class="list-inline-item list-social-item mr-3">
                    <a
                      :href="'https://twitter.com/intent/tweet?url='+url"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      <img
                        src="@/assets/img/icons/social/twitter.svg"
                        class="list-social-icon"
                        alt="..."
                      />
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

          <div class="col-12 col-md-6 col-lg-4 d-flex">
            <!-- Card -->
            <div class="card d-lg-none shadow-light-lg lift lift-lg">
              <!-- Image -->
              <a class="card-img-top" href="#!">
                <!-- Image -->
                <img src="@/assets/img/photos/photo-5.jpg" alt="..." class="card-img-top" />

                <!-- Shape -->
                <div class="position-relative">
                  <div class="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <Curve3 />
                  </div>
                </div>
              </a>

              <!-- Body -->
              <a class="card-body" href="#!">
                <!-- Heading -->
                <h3>Coffee Can Keep You Going, But At What Cost?</h3>

                <!-- Text -->
                <p
                  class="mb-0 text-muted"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.</p>
              </a>

              <!-- Meta -->
              <a class="card-meta mt-auto" href="#!">
                <!-- Divider -->
                <hr class="card-meta-divider" />

                <!-- Avatar -->
                <div class="avatar avatar-sm mr-2">
                  <img
                    src="@/assets/img/avatars/avatar-1.jpg"
                    alt="..."
                    class="avatar-img rounded-circle"
                  />
                </div>

                <!-- Author -->
                <h6 class="text-uppercase text-muted mr-2 mb-0">Ab Hadley</h6>

                <!-- Date -->
                <p class="h6 text-uppercase text-muted mb-0 ml-auto">
                  <time datetime="2019-05-02">May 02</time>
                </p>
              </a>
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

export default {
  components: {
    Layout
  },
  data: function() {
    return {
      url: "https//ucanetwork.co.uk"
    };
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    }
  }
};
</script>
