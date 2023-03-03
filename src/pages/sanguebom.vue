<script setup lang="ts">
import IconHearth from '~icons/icon-park-outline/oval-love'
import IconCheck from '~icons/icon-park-outline/check'
import IconWhatsapp from '~icons/mdi/whatsapp'
import IconCity from '~icons/icon-park-outline/city'
import { useHead } from '@vueuse/head';

useHead({
  title: 'Sangue BOM - MBL RJ',
  meta: [
    {
      name: 'description',
      content: 'Ajude a manter os bancos de sangue do estado cheios!',
    },
  ],
});

const exigencias = [
  {
    title: 'ESTAR BEM de saúde.'
  },
  {
    title: 'Pesar mais de 50kg.'
  },
  {
    title: 'APRESENTAR documento com foto ou cópia autenticada.'
  },
  {
    title: 'Não estar grávida, nem amamentando'
  },
  {
    title: 'Não ser usuário de drogas.'
  },
  {
    title: 'Não ingerir bebidas alcoólicas nas 12 horas anteriores a doação'
  },
  {
    title: 'Fazer um repouso mínimo de 6 horas na noite anterior à doação.'
  },
  {
    title: 'Evitar alimentos gordurosos nas 4 horas que antecedem a doação.'
  },
  {
    title: 'Ter entre 16 e 69 anos. Menos de 18 com autorização dos pais ou responsável. Termos disponíveis no site do HEMORIO.'
  },
  {
    title: 'Não ter tido contato sexual com pessoas que tenham situação de risco acresido para AIDS e ISTs.'
  }
]

const datePerCity = {
  'Niterói': '18/03/23',
  'Nova Friburgo': '19/03/23',
  'Rio de Janeiro': '18/03/23',
}
</script>

<template>
  <div class="hero min-h-[400px] bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div class="flex justify-center">
          <h1 class="text-5xl font-bold">Sangue Bom</h1><icon-hearth class="pl-4" width="50px" height="50px"></icon-hearth>
        </div>
        <p class="py-6">Participe da nossa ação social de doação de sangue e nos ajude a suprir os estoques dos bancos de sangue do nosso estado que estão baixos.</p>
        <a href="#sabermais" class="btn btn-primary">Saber mais</a>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-4 py-6" id="sabermais">
    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
      <div class="col-span-1">
        <h2 class="text-3xl font-bold">Sobre a ação</h2>
        <p class="py-6">Nossos bancos de sangue no estado do Rio de Janeiro estão baixos e nós acreditamos que bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</p>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-4 pt-6 pb-10">
    <h2 class="text-3xl font-bold">Saiba se você pode doar</h2>
    <p class="py-2">Para doar sangue é necessário que você atenda alguns requisitos. Se você atender a todos eles, está apto. Veja abaixo:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      <div class="col-span-1" v-for="exigency in exigencias" :key="exigency.title">
        <div class="flex items-center">
          <icon-check class="text-primary"></icon-check>
          <p class="pl-4">{{ exigency.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- dates per city in cards. read form v-for. use <icon-city></icon-city> -->
  <div class="container mx-auto px-4 pt-6 pb-10">
    <h2 class="text-3xl font-bold">Onde e Quando?</h2>
    <p class="py-2">Abaixo você encontra a data e o local do ato mais próximo de você.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div class="col-span-1" v-for="(date, city) in datePerCity" :key="city">
        <div class="card">
          <div class="card-body p-4 md:p-10">
            <div class="flex md:justify-center">
              <icon-city class="w-12 h-12"></icon-city>
            </div>
            <div class="flex md:justify-center md:items-center flex-col">
              <div class="text-2xl font-bold">{{ city }}</div>
              <div class="text-base py-2">{{ date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end dates per city -->
  <div class="bg-base-100 hero py-10 flex justify-center mx-auto text-center">
      <!-- call to action to join whatsapp groups -->
      <div class="flex justify-center items-center py-5">
        <div class="flex flex-col justify-center items-center">
          <div class="text-3xl font-bold">Fazer parte</div>
          <div class="text-base py-2">Junte-se ao grupo de Whatsapp onde estamos organizando o ato!</div>
          <div class="flex justify-center mt-2">
            <a class="btn btn-primary rounded-md small btn-sm" href="https://chat.whatsapp.com/J7janMvnyc817VH54749sE">
              <icon-whatsapp class="mr-2 w-5 h-5" />
              Juntar-se
            </a>
          </div>
        </div>
      </div>
    </div>

</template>