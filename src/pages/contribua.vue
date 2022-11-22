<template>
  <contribua-hero></contribua-hero>
  <stripe-section></stripe-section>
  <contribution-faq></contribution-faq>
  <pix-section></pix-section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import ContribuaHero from '../components/ContribuaHero.vue';
import PixSection from '../components/PixSection.vue';
import StripeSection from '../components/StripeSection.vue';
import ContributionFaq from '../components/ContributionFAQ.vue';

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