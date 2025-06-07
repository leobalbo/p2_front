<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Header />
  <Navbar />

  <main class="h-screen px-12 mt-4">
    <RouterView />
  </main>


</template>