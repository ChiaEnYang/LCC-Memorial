<script>
import banner from "@/components/banner.vue";
import info from "@/components/info.vue";
import about from "@/components/aboutCards.vue";
import model from "@/components/model.vue";
import artist from "@/components/artist.vue";

export default {
  components: {
    banner,
    about,
    info,
    model,
    artist
  }
}
</script>

<template >
  <main class="container mx-auto pt-20">
    <banner />
    <artist />
    <about />
    <model />
  </main>
  <footer>    
    <info />
  </footer>




</template>
