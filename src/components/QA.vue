<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  question: string;
  answer: string;
};

const props = defineProps<Props>()
const open = ref(false)
</script>

<template>
<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" v-model="open" /> 
  <div class="collapse-title text-xl font-medium">
    {{ props.question }}
  </div>
  <div class="collapse-content"> 
    <p>{{ props.answer }}</p>
  </div>
</div>
</template>