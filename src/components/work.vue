<template>
  <div class="work relative">數位典藏
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
      <swiper-slide class="select-none" v-for="painting in paintings" 
          :key="painting.src" 
          @click="selectPainting(painting)"><img :src="painting.src" :alt="painting.title" /></swiper-slide>
    </swiper>

    <div id="selected-painting" v-if="selectedPainting" class=" z-20 shadow-md w-auto h-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center" @click="deletePainting(painting)">
      
      <img class="w-auto h-full "  :src="selectedPainting.src" alt="選擇的畫作" />
      <div class="w-[600px] h-full bg-slate-400 flex flex-col justify-center items-center">
        <h2 class="font-bold mb-3">{{ selectedPainting.title }}</h2>
        <p class="w-auto">{{ selectedPainting.description }}</p>
      </div>
   
    </div>
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
    data() {
    return {
      paintings: [
        { src: 'src/img/painting/1936-梅花鹿-SpottedDeer.jpg', title: '梅花鹿 Spotted Deer 1936', description: '紙本．膠彩 Gouache on paper｜80×116cm (30F)｜本作品於1999年8月遭竊' },
        { src: 'src/img/painting/1937新宿所見ShinjukuJapan.jpg', title: '新宿所見 Shinjuku, Japan 1937', description: '紙本．膠彩 Gouache on paper｜80×177cm (50P)｜本作品於1999年8月遭竊' },
        { src: 'src/img/painting/1939-小閑-Leisure.jpg', title: '小閑 Leisure 1939', description: '紙本．膠彩 Gouache on paper｜195×150cm (130變)｜臺北市立美術館典藏' },
        { src: 'src/img/painting/1940-朝涼BathingintheMorning.jpg', title: '朝涼 Bathing in the Morning 1940', description: '紙本．膠彩 Gouache on paper｜245.3×184.5cm (180F)｜國立臺灣美術館典藏' },
        { src: 'src/img/painting/1951-少女-YoungLady.jpg', title: '少女 Young Lady 1951', description: '紙本．膠彩 Gouache on paper｜43×46cm(8變)｜私人收藏'},
        { src: 'src/img/painting/1956-春意Spring.jpg', title: '春意 Spring 1956', description: '紙本．膠彩 Gouache on paper｜22×27cm(3F)｜私人收藏' },
        { src: 'src/img/painting/1958-彩塘幻影-IllusionsbythePond.jpg', title: '彩塘幻影 Illusions by the Pond 1958', description: '紙本．膠彩 Gouache on paper｜118×78cm(50P)｜私人收藏' },
        { src: 'src/img/painting/1958-樹韻-TreeStyles.jpg', title: '樹韻 Tree Styles 1958', description: '絹本．膠彩 Gouache on silk｜33×52cm(10M)｜私人收藏' },
        { src: 'src/img/painting/1963-暮紅Sunset.jpg', title: '暮紅 Sunset 1963', description: '紙本．膠彩 Gouache on paper｜45×49cm(10變)｜國立台灣美術館典藏' },
        { src: 'src/img/painting/1966-春意Spring.jpg', title: '春意 Spring 1966', description: '紙本．膠彩 Gouache on paper｜24×27cm(3變)｜私人收藏' },
        { src: 'src/img/painting/1970-樹林-Forest.jpg', title: '樹林 Forest 1970', description: '紙本．膠彩 Gouache on paper｜50.5X60.5cm(12F)｜國立台灣美術館典藏' },
        { src: 'src/img/painting/1973-秋柿FallPersimmon.jpg', title: '秋柿 Fall Persimmon 1973', description: '紙本．膠彩 Gouache on paper｜27 X24cm｜私人收藏' },
        
      ],
      selectedPainting: null,
    };
  },
  methods: {
    selectPainting(painting) {
      this.selectedPainting = painting;
    },
    deletePainting(painting){
      this.selectedPainting = null;
    }
  },
  mounted() {
    
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
