<template>
  <div class="eventlayout">
    <Navbar />
    <Events />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Events from "../views/events/EventDe";

export default {
  components: {
    Navbar,
    Footer,
    Events,
  },
};
</script>
