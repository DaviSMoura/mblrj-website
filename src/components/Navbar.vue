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
<div class="navbar bg-base-100 sticky top-0 z-50 bg-primary text-primary-content">
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
    <router-link class="btn btn-ghost normal-case text-xl" to="/">
      <img
          src="../assets/mbl-rj-white.png"
          alt="MBL RJ"
          width="auto"
          height="auto"
          class="object-scale-down w-auto h-auto max-w-fit max-h-12"
        />
    </router-link>
  </div>
  <div class="navbar-end">
  </div>
</div>
</template>