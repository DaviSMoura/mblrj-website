<script setup lang="ts">
import { ref } from 'vue';

const plans = ref([
  {
    name: 'Mensalista I',
    link: 'https://buy.stripe.com/8wMeXYaEydh8fwAdQQ',
    price: 'R$ 20,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 2% de desconto em nossos produtos.',
      '❌ Desconto em ingressos de nossos eventos.',
      '❌ Acesso antecipado à nossa revista digital Papo Reto',
      '❌ Reuniões periódicas com membros do MBL Nacional',
      '❌ Ingresso gratuito para o I Crongresso Estadual MBL RJ*'
    ]
  },
  {
    name: 'Mensalista II',
    link: 'https://buy.stripe.com/14k0349Audh8cko7sv',
    price: 'R$ 30,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 5% de desconto em nossos produtos.',
      '✅ 5% de desconto em ingressos de nossos eventos.',
      '❌ Acesso antecipado à nossa revista digital Papo Reto',
      '❌ Reuniões periódicas com membros do MBL Nacional',
      '❌ Ingresso gratuito para o I Crongresso Estadual MBL RJ*'
    ]
  },
  {
    name: 'Mensalista III',
    link: 'https://buy.stripe.com/00gg22h2Wgtkacg145',
    price: 'R$ 50,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 10% de desconto em nossos produtos.',
      '✅ 10% de desconto em ingressos de nossos eventos.',
      '✅ Acesso antecipado à nossa revista digital Papo Reto',
      '✅ Reuniões periódicas com membros do MBL Nacional',
      '❌ Ingresso gratuito para o I Crongresso Estadual MBL RJ*'
    ]
  },
  {
    name: 'Mensalista IV',
    link: 'https://buy.stripe.com/fZedTUaEy6SK98c28a',
    price: 'R$ 100,00',
    benefits: [
      '✅ Acesso ao grupo exclusivo de mensalistas.',
      '✅ Relatórios frequentes de nossas ações.',
      '✅ 20% de desconto em nossos produtos.',
      '✅ 15% de desconto em ingressos de nossos eventos.',
      '✅ Acesso antecipado à nossa revista digital Papo Reto',
      '✅ Reuniões periódicas com membros do MBL Nacional',
      '✅ Ingresso gratuito para o I Crongresso Estadual MBL RJ*'
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
    <p class="text-center pt-5">* Válido somente até junho/2023 e para aqueles que contribuírem com pelo menos três mensalidades da modalidade IV.</p>
  </div>
</template>