<template>
  <div class="row clearfix bottommargin-lg common-height">
    <div
      class="col-md-3 col-sm-6 dark center col-padding"
      v-for="content in contents"
      :key="content"
      :style="content.style"
    >
      <div>
        <i :class="content.class"></i>
        <div class="counter counter-lined">{{ content.data }}</div>
        <h5>{{ content.title }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "hometwo",
  computed: {
    ...mapState("homeT", ["contents"]),
  },
};
</script>
