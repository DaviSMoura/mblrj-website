<script setup lang="ts">
import { ref } from 'vue';

const plans = ref([
  {
    name: 'Mensalista I',
    link: 'https://buy.stripe.com/5kAaGWa4UgEi1RScMM',
    price: 'R$ 20,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 2% de desconto em nossos produtos.',
      '❌ Desconto em ingressos de nossos eventos.',
      '❌ Acesso antecipado à nossa revista digital Papo Reto',
      '❌ Reuniões periódicas com membros do MBL Nacional',
    ]
  },
  {
    name: 'Mensalista II',
    link: 'https://buy.stripe.com/9AQ7uKgti0Fk8gg7st',
    price: 'R$ 30,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 5% de desconto em nossos produtos.',
      '✅ Desconto em ingressos de nossos eventos.',
      '❌ Acesso antecipado à nossa revista digital Papo Reto',
      '❌ Reuniões periódicas com membros do MBL Nacional',
    ]
  },
  {
    name: 'Mensalista III',
    link: 'https://buy.stripe.com/28odT85OE2Ns6885km',
    price: 'R$ 50,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 10% de desconto em nossos produtos.',
      '✅ Desconto em ingressos de nossos eventos.',
      '✅ Acesso antecipado à nossa revista digital Papo Reto',
      '✅ Reuniões periódicas com membros do MBL Nacional',
    ]
  },
  {
    name: 'Mensalista IV',
    link: 'https://buy.stripe.com/cN2cP4b8Y73IdAA8wz',
    price: 'R$ 100,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 20% de desconto em nossos produtos.',
      '✅ Desconto em ingressos de nossos eventos.',
      '✅ Acesso antecipado à nossa revista digital Papo Reto',
      '✅ Reuniões periódicas com membros do MBL Nacional',
      '✅ Ingresso gratuito para o I Congresso Estadual MBL RJ*'
    ]
  },
])
</script>

<template>
  <div class="xl:container mx-8 md:mx-auto my-10" id="contribuir">
    <div class="mb-4">
      <h1 class="text-primary text-4xl font-bold text-center">
        Seja um mensalista recorrente
      </h1>
      <b class="flex flex-col text-center">
        Só recebemos apoio financeiro de pessoas como você para continuar atuando pela transformação.
      </b>
    </div>
    <div class="flex flex-col md:flex-row gap-8 justify-center">
      <div v-for="plan of plans" :key="plan.name">
        <div class="card bg-base-200 shadow-lg">
          <div class="card-body">
            <h2 class="card-title">{{ plan.name }}</h2>
            <p>
              <ul>
                <li v-for="benefit of plan.benefits" :key="benefit">
                  {{ benefit }}
                </li>
              </ul>
            </p>
            <div class="card-actions justify-center mt-4">
              <a :href="plan.link" target="_blank" class="btn btn-primary">Assinar por {{ plan.price }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center pt-5">Caso você já seja um mensalista e deseja alterar seu cartão cadastrado, ou cancelar a sua assinatura, <a class="text-primary" href="https://billing.stripe.com/p/login/6oE4i1bVB8Ym6OIaEE" target="_blank">clique aqui</a>.</p>
  </div>
</template>