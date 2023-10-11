<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>test api 1: ping</p>
    <button>ping</button>
  </div>

  <hr/>

  <div class="card">
    <p>test api 2: greet</p>
    <input type="text" placeholder="place your name here">
    <button>greet</button>
  </div>

  <hr/>

  <div class="card">
    <p>test api 3: first 1000 primes</p>
    <button>get primes</button>
  </div>

  <hr/>

  <div class="card">
    <p>test api 4: check prime</p>
    <input type="text" placeholder="place your number here">
    <button>ping</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
