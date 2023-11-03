<script setup lang="ts">
import { defineProps, ref } from 'vue'
import demoGoApi from '../services/demoGoApi';

defineProps<{ msg: string }>()
const result = ref<object>()

const ping = async () => {
    const res = await demoGoApi.demoHello()
    result.value = res.data
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <div class="card">
        <p>test api 1: ping</p>
        <button @click="ping()">ping</button>
        <p>{{ result }}</p>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
