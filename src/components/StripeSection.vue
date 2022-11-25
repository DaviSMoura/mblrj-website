<script setup lang="ts">
import { ref } from 'vue';

const plans = ref([
  {
    name: 'Mensalista I',
    link: 'https://buy.stripe.com/8wMeXYaEydh8fwAdQQ',
    price: 'R$ 20,00',
  },
  {
    name: 'Mensalista II',
    link: 'https://buy.stripe.com/00gg22h2Wgtkacg145',
    price: 'R$ 50,00',
  },
  {
    name: 'Mensalista III',
    link: 'https://buy.stripe.com/fZedTUaEy6SK98c28a',
    price: 'R$ 100,00',
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
          <!-- <figure><img src="https://placeimg.com/400/225/arch" alt="Mensalista I" /></figure> -->
          <div class="card-body">
            <h2 class="card-title">{{ plan.name }}</h2>
            <p>
              ✅ Descontos nos nossos produtos<br />
              ✅ Acesso a grupo exclusivo de mensalistas<br />
              ✅ Reuniões mensais com coordenadores<br />
            </p>
            <div class="card-actions justify-center mt-4">
              <a :href="plan.link" target="_blank" class="btn btn-primary">Assinar por {{ plan.price }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>