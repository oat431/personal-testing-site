<script setup lang="ts">
import apiTest from '../services/apiTest'
import { defineProps, ref } from 'vue'
import SampleDto from '../model/sampleDto';
import CheckPrimeDto from '../model/checkPrimeDto';
import CheckPrimeRequest from '../model/checkPrimeRequest';

defineProps<{ msg: string }>()
const text = ref<string>()
const numb = ref<number>()
const resutl1 = ref<SampleDto>()
const result2 = ref<SampleDto>()
const result3 = ref<[number]>()
const result4 = ref<CheckPrimeDto>()
const checkStatus = ref<number>()
const checkStatusTxt = ref<string>()

const ping = async () => {
  const res = await apiTest.ping()
  let result : SampleDto = {
    message: res.data.message
  };
  checkStatus.value = res.status;
  checkStatusTxt.value = res.statusText;
  resutl1.value = result;
}

const greet = async (text: string) => {
  const res = await apiTest.greet(text)
  let result : SampleDto = {
    message: res.data.message
  };
  result2.value = result;
}

const getFirst1kPrimes = async () => {
  const res = await apiTest.first1kprime()
  result3.value = res.data;
}

const checkPrime = async (request: number) => {
  let check : CheckPrimeRequest = {
    number: request
  };
  const res = await apiTest.checkPrime(check)
  let result : CheckPrimeDto = {
    isPrime: res.data.isPrime
  };
  result4.value = result;
}

const clear = () => {
  resutl1.value = undefined;
  result2.value = undefined;
  result3.value = undefined;
  result4.value = undefined;
  checkStatus.value = undefined;
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 v-if="checkStatus">Http status: {{ checkStatus }} : {{ checkStatusTxt }}</h2>

  <div class="card">
    <p>test api 1: ping</p>
    <button @click="ping()">ping</button>
    <p>{{ resutl1?.message }}</p>
  </div>

  <hr/>

  <div class="card">
    <p>test api 2: greet</p>
    <input type="text" placeholder="place your name here" v-model="text">
    <button @click="greet(text ? text : '')" >greet</button>
    <p>{{ result2?.message }}</p>
  </div>

  <hr/>

  <div class="card">
    <p>test api 3: first 1000 primes</p>
    <button @click="getFirst1kPrimes()">get primes</button>
    <p>{{ result3 }}</p>
  </div>

  <hr/>

  <div class="card">
    <p>test api 4: check prime</p>
    <input type="number" placeholder="place your number here" v-model="numb">
    <button @click="checkPrime(numb ? numb : 1)">check</button>
    <p>{{numb}} is {{ result4?.isPrime ? "primes number" : "not prime number" }}</p>
  </div>

  <div class="card">
    <button @click="clear()">clear result</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
