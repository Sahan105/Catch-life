<template>
  <div>
    <Navbar />
    <Slider />
    <Productbox />
    <HomeTwo />
    <Gallary />
    <Service />
    <LestBlog />
    <Team />
    <Footer />
  </div>
</template>
<script>
import Productbox from "../components/Productbox";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import HomeTwo from "../views/HomeTwo";
import Gallary from "../components/Gallary";
import Service from "../views/Service";
import Team from "../components/Team";
import LestBlog from "../views/LeatestBlog";
// import NavbarTwo from "../components/NavbarTwo";

export default {
  components: {
    Navbar,
    Slider,
    Footer,

    HomeTwo,
    Gallary,
    Service,
    Team,
    LestBlog,
    Productbox,
  },
};
</script>
<style scoped></style>
