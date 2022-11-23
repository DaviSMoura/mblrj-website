<script setup lang="ts">
import { ref } from 'vue';
import Qa from './QA.vue';

const questions = ref([
  {
    q: "O que é o MBL RJ?",
    a: "Fundado em 2014, o Movimento Brasil Livre (MBL) é um movimento político identificado por especialistas como liberal conservador.",
  },
  {
    q: "Como faço para contribuir com cartão de crédito?",
    a: "Contribuição via cartão de crédito é feita através do Stripe, uma plataforma de pagamentos segura e confiável. Para contribuir, basta clicar no botão 'Contribuir Mensalmente' na página de contribuição e selecionar um plano. O Stripe irá te redirecionar para uma página de pagamento, onde você poderá inserir os dados do seu cartão de crédito. Após a confirmação do pagamento, você será redirecionado para a página de contribuição, onde poderá ver o seu recibo de contribuição. Após a contribuição, nós entraremos em contato via Whatsapp para te dar as boas vindas e te redirecionar pro nosso grupo exclusivo.",
  },
  {
    q: "Como faço para contribuir com PIX?",
    a: "Você sempre pode fazer uma contribuição avulsa através do nosso PIX: contribua@mblrj.com",
  },
  {
    q: "Qual é o valor mínimo para contribuir?",
    a: "Você pode contribuir de forma avulsa com qualquer valor. Ou contribuir com um dos valores dos planos acima mensalmente de forma automática no seu cartão de crédito.",
  },
  {
    q: "Posso cancelar os pagamentos recorrentes?",
    a: "Entre em contato com a gente via Whatsapp ou Redes sociais e nós cancelaremos o seu pagamento.",
  },
  {
    q: "Como entrar no grupo exclusivo dos mensalistas?",
    a: "Entraremos em contato via Whatsapp para te dar as boas vindas e te redirecionar pro nosso grupo exclusivo.",
  },
])
</script>

<template>
  <div class="flex justify-center flex-col py-8 xl:container place-items-center mx-auto">
    <div>
      <h1 class="text-primary text-4xl font-bold text-center my-8">
        Dúvidas Frequentes
      </h1>
    </div>
    <div >
      <qa v-for="qa of questions" :key="qa.q" :question="qa.q" :answer="qa.a" class="my-4"></qa>
    </div>
  </div>
</template>