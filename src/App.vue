<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <nav class="fixed w-full h-[100px] flex justify-center p-5 bg-[#1d5a53]  z-20 animate-nav-up">
    <RouterLink to="/">
      <img src="/src/img/logo.png" alt="" class="min-w-48 h-10 shrink-0 z-20">
    </RouterLink>
  </nav>
    <RouterView />
</template>

<style scoped>




nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
