<template>
  <div class="team">
    <div class="section">
      <div class="container clearfix">
        <div class="row topmargin-sm">
          <div class="heading-block center">
            <h3>Meet Our Team</h3>
          </div>

          <div
            v-for="team in teams"
            :key="team"
            class="col-md-3 col-sm-6 bottommargin"
          >
            <div class="team">
              <div class="team-image">
                <img :src="team.src" alt="John Doe" />
              </div>
              <div class="team-desc team-desc-bg">
                <div class="team-title">
                  <h4>{{ team.name }}</h4>
                  <span>{{ team.designation }}</span>
                </div>
                <a
                  href="#"
                  class="
                    social-icon
                    inline-block
                    si-small si-light si-rounded si-facebook
                  "
                >
                  <i class="icon-facebook"></i>
                  <i class="icon-facebook"></i>
                </a>
                <a
                  href="#"
                  class="
                    social-icon
                    inline-block
                    si-small si-light si-rounded si-twitter
                  "
                >
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  class="
                    social-icon
                    inline-block
                    si-small si-light si-rounded si-gplus
                  "
                >
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "team",
  computed: {
    ...mapState("team", ["teams"]),
  },
};
</script>
