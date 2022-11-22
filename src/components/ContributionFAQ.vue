<script setup lang="ts">
import Qa from './QA.vue';
</script>

<template>
  <div class="flex justify-center flex-col py-8 xl:container place-items-center mx-auto">
    <div>
      <h1 class="text-primary text-4xl font-bold text-center my-8">
        Dúvidas Frequentes
      </h1>
    </div>
    <div >
      <qa question="Quero contribuir sem compromisso" answer="Saiba que isso é possível! Nós temos o nosso PIX abaixo para contribuições avulsas." class="my-4"></qa>
      <qa question="Pergunta 2" answer="resposta xyz" class="my-4"></qa>
      <qa question="Tenho mais dúvidas" answer="Será um prazer respondê-lo nas redes sociais. Nos encontre por lá e envie sua dúvida." class="my-4"></qa>
    </div>
  </div>
</template>