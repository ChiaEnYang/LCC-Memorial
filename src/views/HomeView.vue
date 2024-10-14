<script>
import banner from "@/components/banner.vue";
import artist from "@/components/artist.vue";
import gluepainting from "@/components/gluepainting.vue";
import work from "@/components/work.vue";
import info from "@/components/info.vue";
import character from "@/components/character.vue";




export default {
  components: {
    banner,
    character,
    artist,
    gluepainting,
    work,
    info,
  }
}
</script>

<template >
  <main class="container mx-auto pt-20">
    <character/>
    <banner />

    <artist />

    <gluepainting/>
    
    <work />
  </main>
  <footer>
    <info />
  </footer>




</template>
