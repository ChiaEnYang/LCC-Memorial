<script>
import banner from "@/components/banner.vue";
import artist from "@/components/artist.vue";
import AboutCards from "@/components/aboutCards.vue";
import painting from "@/components/painting.vue";
import info from "@/components/info.vue";




export default {
  components: {
    banner,
    artist,
    AboutCards,
    painting,
    info,
  }
}
</script>

<template >
  <main class="container mx-auto pt-20">
    <banner />

    <artist />
    <AboutCards />

    <painting />
  </main>
  <footer>
    <info />
  </footer>




</template>
