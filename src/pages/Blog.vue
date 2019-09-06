<template>
  <Layout footerClass="bg-gray-200">
    <!-- ARTICLES
    ==================================================-->
    <section>
      <div class="container">
        <h1 class="block mt-10">Blog</h1>
        <div class="row mt-10 mb-10">
          <div
            v-for="{ node } in $page.posts.edges"
            :key="node.id"
            class="col-12 col-md-6 col-lg-4 d-flex"
          >
            <!-- Card -->
            <div class="card mb-6 shadow-light-lg lift lift-lg">
              <!-- Image -->
              <g-link class="card-img-top" :to="node.path">
                <g-image class="card-img-top" :src="node.image.file.url+'?w=400'" />

                <!-- Shape -->
                <div class="position-relative">
                  <div class="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <Curve3></Curve3>
                  </div>
                </div>
              </g-link>

              <!-- Body -->
              <g-link class="card-body" :to="node.path">
                <!-- Heading -->
                <h3>{{node.title}}</h3>

                <!-- Text -->
                <p class="mb-0 text-muted">{{node.description}}</p>
              </g-link>
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
      <div class="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
        <Curve1></Curve1>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query posts {
  posts: allContentfulBlogPost {
    edges {
      node {
        title
         image {
          file {
            url
          }
        }
        description
        content
        path
      }
    }
  }
}
</page-query>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  metaInfo: {
    title: "Blog | UCAN"
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    }
  }
};
</script>
