<template>
  <Layout footerClass="bg-white">
    <!-- CONTENT
    ==================================================-->
    <section class="pt-8 pt-md-11">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md">
            <h3 class="display-4 mb-2">{{$page.applications.edges[0].node.position}}</h3>

            <!-- Text -->
            <p class="font-size-lg text-gray-700 mb-5 mb-md-0">Remote · Part time</p>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div class="col-12">
            <!-- Divider -->
            <hr class="my-6 my-md-8 border-gray-300" />
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div
            v-html="richTextToHTML($page.applications.edges[0].node.description)"
            class="col-12 col-md-8"
          ></div>
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card shadow-light-lg mb-5">
              <div class="card-body">
                <!-- Heading -->
                <h4>Need help?</h4>

                <!-- Text -->
                <p class="font-size-sm text-gray-800 mb-5">
                  Want more information? We’d be happy to chat with you and answer any questions you
                  may have.
                </p>

                <!-- Heading -->
                <h6 class="font-weight-bold text-uppercase text-gray-700 mb-2">Call us</h6>

                <!-- Text -->
                <p class="font-size-sm mb-5">
                  <a href="tel:+447903878108" class="text-reset">+44 (0) 7903878108</a>
                </p>

                <!-- Heading -->
                <h6 class="font-weight-bold text-uppercase text-gray-700 mb-2">Email us</h6>

                <!-- Text -->
                <p class="font-size-sm mb-0">
                  <a
                    href="mailto:support@ucanetwork.co.uk"
                    class="text-reset"
                  >support@ucanetwork.co.uk</a>
                </p>
              </div>
            </div>

            <!-- Card -->
            <div class="card shadow-light-lg">
              <div class="card-body">
                <!-- Heading -->
                <h4>Looking to join our team?</h4>

                <!-- Text -->
                <p class="font-size-sm text-gray-800">
                  We are always looking for enthusiastic and innovative people to join UCAN. If you
                  can take initiative, remain
                  goal-orientated and thrive in a dynamic environment feel free to contact us!
                </p>

                <!-- Heading -->
                <a
                  href="javascript:tidioChatApi.open();"
                  class="font-weight-bold font-size-sm text-decoration-none"
                >
                  Reach out
                  <i class="fe fe-arrow-right ml-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- FORM
    ==================================================-->
    <section class="pt-8 pt-md-11 pb-8 pb-md-14">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Card -->
            <div class="card card-border border-primary shadow-light-lg">
              <div class="card-body">
                <!-- Form -->
                <form
                  name="MentorApplication"
                  method="post"
                  enctype="multipart/form-data"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="MentorApplication" />
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label for="applyName">Full name</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          name="fullName"
                          id="applyName"
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label for="applyEmail">University Email</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          name="email"
                          id="applyEmail"
                          placeholder="hello@domain.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label for="applySubject">Subject</label>
                        <input
                          required
                          type="text"
                          class="form-control"
                          name="subject"
                          id="applySubject"
                          placeholder="Your subject"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <p class="mb-2">University</p>
                        <select name="university" class="form-control">
                          <option value selected disabled hidden>Choose university</option>
                          <option value="University of Bath">University of Bath</option>
                          <option value="University of Birmingham">University of Birmingham</option>
                          <option value="University of Bristol">University of Bristol</option>
                          <option value="University of Cambridge">University of Cambridge</option>
                          <option value="Cardiff University">Cardiff University</option>
                          <option value="Durham University">Durham University</option>
                          <option value="University of Edinburgh">University of Edinburgh</option>
                          <option value="University of Exeter">University of Exeter</option>
                          <option value="University of Glasgow">University of Glasgow</option>
                          <option value="Imperial College London">Imperial College London</option>
                          <option value="King's College London">King's College London</option>
                          <option value="University of Leeds">University of Leeds</option>
                          <option value="University of Liverpool">University of Liverpool</option>
                          <option
                            value="London School of Economics & Political Science"
                          >London School of Economics & Political Science</option>
                          <option value="Loughborough University">Loughborough University</option>
                          <option value="University of Manchester">University of Manchester</option>
                          <option value="Newcastle University">Newcastle University</option>
                          <option value="University of Nottingham">University of Nottingham</option>
                          <option value="University of Oxford">University of Oxford</option>
                          <option value="Queen Mary, University of London">
                            Queen Mary,
                            University of London
                          </option>
                          <option value="Queen's University Belfast">
                            Queen's University
                            Belfast
                          </option>
                          <option value="University of Sheffield">University of Sheffield</option>
                          <option value="University of Southampton">University of Southampton</option>
                          <option value="University of St Andrews">University of St Andrews</option>
                          <option value="University College London">University College London</option>
                          <option value="University of Warwick">University of Warwick</option>
                          <option value="University of York">University of York</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- / .row -->
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <p class="mb-2">Personal Statement</p>
                        <div class="custom-file">
                          <input
                            required
                            name="personal_statement"
                            type="file"
                            @change="onPSChange"
                            class="custom-file-input"
                            id="applyPS"
                          />
                          <label class="custom-file-label" for="applyPS">{{ps_name}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <p class="mb-2">Resume</p>
                        <div class="custom-file">
                          <input
                            required
                            name="resume"
                            type="file"
                            @change="onResumeChange"
                            class="custom-file-input"
                            id="applyResume"
                          />
                          <label class="custom-file-label" for="applyResume">{{this.resume_name}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- / .row -->
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group mb-5">
                        <label for="applyMessage">What would make you a great mentor?</label>
                        <textarea
                          name="mentor-question"
                          id="applyMessage"
                          rows="5"
                          class="form-control"
                          placeholder="Let us know!"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <!-- / .row -->
                  <div class="row align-items-center">
                    <div class="col-12 col-md">
                      <!-- Submit -->
                      <button
                        type="submit"
                        v-on:click="submitText = 'Submitting ...'"
                        class="btn btn-primary mb-6 mb-md-0 lift"
                      >
                        {{submitText}}
                        <i class="fe fe-arrow-right ml-3"></i>
                      </button>
                    </div>
                    <div class="col-12 col-md-auto">
                      <p
                        class="font-size-sm text-muted mb-0"
                      >Your application will be sent securely and will remain private.</p>
                    </div>
                  </div>
                  <!-- / .row -->
                </form>
              </div>
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
query getApplication {
 applications: allContentfulApplication {
  edges {
    node {
      position
      description
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
    title: "Apply"
  },
  data: function() {
    return {
      resume_name: "Choose file",
      ps_name: "Choose file",
      submitText: "Apply now"
    };
  },
  methods: {
    richTextToHTML(content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) => {
            return `<p class='text-gray-800'>${next(node.content)}</p>`;
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
    onResumeChange(event) {
      var fileData = event.target.files[0];
      this.resume_name = fileData.name;
    },
    onPSChange(event) {
      var fileData = event.target.files[0];
      this.ps_name = fileData.name;
    }
  }
};
</script>
