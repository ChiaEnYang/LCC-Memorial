<template>
    <div class="work ">數位典藏
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0 ,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper">
        <swiper-slide><img src="../img/painting/1935-春櫻Springblossom.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1936-梅花鹿-SpottedDeer.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1937新宿所見ShinjukuJapan.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1939-小閑-Leisure.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1940-朝涼BathingintheMorning.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1951-少女-YoungLady.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1956-春意Spring.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1958-彩塘幻影-IllusionsbythePond.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1958-樹韻-TreeStyles.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1963-暮紅Sunset.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1966-春意Spring.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1970-樹林-Forest.jpg" /></swiper-slide>
        <swiper-slide><img src="../img/painting/1973-秋柿FallPersimmon.jpg" /></swiper-slide>

        

      </swiper>
    </div>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';
  
    

    
  
    // import required modules
    import { EffectCoverflow, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [EffectCoverflow, Pagination],
        };
      },
    };
</script>
<style scoped>

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 300px;
  
}

</style>
  