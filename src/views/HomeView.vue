<script>
import banner from "@/components/banner.vue";
import info from "@/components/info.vue";
import about from "@/components/aboutCards.vue";

export default {
  components: {
    banner,
    about,
    info
  }
}
</script>

<template >
  <main class="container mx-auto pt-20">
    <banner />
    <about />
    <info />
  </main>
</template>
