<script>
import banner from "@/components/banner.vue";
import AboutCards from "@/components/aboutCards.vue";
import info from "@/components/info.vue";
import model from "@/components/model.vue";
import artist from "@/components/artist.vue";


export default {
  components: {
    banner,
    AboutCards,
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
    <AboutCards />

    <model />
  </main>
  <footer>
    <info />
  </footer>




</template>
