<script>
import banner from "@/components/banner.vue";
import info from "@/components/info.vue";
import about from "@/components/aboutCards.vue";
import model from "@/components/model.vue";

export default {
  components: {
    banner,
    about,
    info,
    model
  }
}
</script>

<template >
  <main class="container mx-auto pt-20">
    <banner />
    <about />
    <model />
  </main>
  <footer>    
    <info />
  </footer>




</template>
