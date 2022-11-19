<script setup lang="ts">
import ContribuaHero from '../components/ContribuaHero.vue';
import PixSection from '../components/PixSection.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: 'Contribuir - MBL RJ',
  meta: [
    {
      name: 'description',
      content: 'Contribua com o MBL RJ e ajude-nos a construir um RJ e um Brasil mais livre!',
    },
  ],
});
</script>

<template>
  <contribua-hero></contribua-hero>
  <pix-section></pix-section>
</template>