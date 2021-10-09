<template>
  <div>
    <Navbar />
    <Slider />
    <Afternav />
    <HomeTwo />
    <Gallary />
    <Service />
    <LestBlog />
    <Team />
    <Menutest />
    <!-- <Client /> -->
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Afternav from "../views/Afternav";
import HomeTwo from "../views/HomeTwo";
import Gallary from "../components/Gallary";
import Service from "../views/Service";
import Team from "../components/Team";
// import Client from "../views/Client";
import LestBlog from "../views/LeatestBlog";
// import NavbarTwo from "../components/NavbarTwo";

export default {
  components: {
    Navbar,
    Slider,
    Footer,
    Afternav,
    HomeTwo,
    Gallary,
    Service,
    Team,
    LestBlog,
  },
};
</script>
<style scoped></style>
