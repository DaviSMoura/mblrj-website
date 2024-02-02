<script setup lang="ts">
import { ref } from 'vue';

const navigationLinks = ref([
  {
    text: 'Contribua',
    target: '/contribua'
  }
])
</script>

<template>
<div class="navbar bg-accent sticky top-0 z-50 bg-primary text-primary-content">
  <div class="navbar-start">
    <!-- <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><router-link :to="link.target" v-for="link of navigationLinks" :key="link.target">{{ link.text }}</router-link></li>
      </ul>
    </div> -->
  </div>
  <div class="navbar-center">
    <router-link class="btn btn-ghost normal-case btn-lg" to="/">
      <img
          src="../assets/mbl-rj-logo.png"
          alt="MBL RJ"
          class="w-auto h-auto max-w-[100%] max-h-[100%] py-auto my-auto"
        />
    </router-link>
  </div>
  <div class="navbar-end">
  </div>
</div>
</template>