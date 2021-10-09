<template>
  <div class="shoplayout">
    <Navbar />
    <Content />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../views/shop/Shopdetails";
export default {
  components: {
    Navbar,
    Footer,
    Content,
  },
};
</script>
