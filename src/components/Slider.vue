<template>
  <div>
    <vueper-slides :fixed-height="true" :bullets="false">
      <vueper-slide
        v-for="slide in slides"
        :key="slide"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { mapState } from "vuex";
export default {
  name: "slider",
  computed: {
    ...mapState("slider", ["slides"]),
  },
  components: { VueperSlides, VueperSlide },
};
</script>
<style>
vueper-slide {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}
.vueperslides--fixed-height {
  height: 100vh;
}
.vueperslides__arrow {
  background-color: #464646;
}
</style>
