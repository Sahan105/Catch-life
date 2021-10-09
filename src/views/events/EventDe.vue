<template>
  <div class="product-box">
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div
            id="shop"
            class="shop grid-container clearfix"
            data-layout="fitRows"
          >
            <h1>Events</h1>
            <div class="product clearfix" v-for="event in events" :key="event">
              <div class="product-image">
                <a href="#"
                  ><img :src="event.img1" alt="Checked Short Dress"
                /></a>
                <a href="#"
                  ><img :src="event.img2" alt="Checked Short Dress"
                /></a>
                <div class="product-overlay">
                  <a href="#" class="add-to-cart"
                    ><i class="icon-shopping-cart"></i
                    ><span>{{ event.cart }}</span></a
                  >
                  <a
                    href="include/ajax/shop-item.html"
                    class="item-quick-view"
                    data-lightbox="ajax"
                    ><i class="icon-zoom-in2"></i
                    ><span> {{ event.view }}</span></a
                  >
                </div>
              </div>
              <div class="product-desc">
                <div class="product-title">
                  <h3>
                    <a href="#">{{ event.h1 }}</a>
                  </h3>
                </div>
                <div class="product-rating">
                  <i
                    v-for="i in parseInt(event.rating)"
                    :key="'f' + i"
                    class="icon-star3"
                  ></i>
                  <i
                    v-for="j in 5 - parseInt(event.rating)"
                    :key="'ff' + j"
                    class="icon-star-empty"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <!-- #shop end -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "productbox",
  computed: {
    ...mapState("eventsdetails", ["events"]),
  },
};
</script>
