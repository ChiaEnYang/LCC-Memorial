<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="fixed w-full flex justify-center p-5 bg-white opacity-70">
    <RouterLink to="/">
      <img src="/src/img/logo.png" alt="" class="min-w-48 h-10 shrink-0">
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
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
