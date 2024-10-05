<script>
import banner from "@/components/banner.vue";
import AboutCards from "@/components/aboutCards.vue";
import info from "@/components/info.vue";
import model from "@/components/model.vue";
import AboutCards from "@/components/aboutCards.vue";

export default {
  components: {
    banner,
    AboutCards,
    info,
    model
  }
}
</script>

<template >
  <main class="container mx-auto pt-20">
    <banner />
    <AboutCards />
    <model />
  </main>
  <footer>
    <info />
  </footer>




</template>
