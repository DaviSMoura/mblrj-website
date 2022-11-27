<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'
import Tabs from '../components/Tabs.vue'
import { format } from 'date-fns'

interface Mensalista {
  id: string,
  email: string,
  name: string,
  phone: string
}
interface Historico {
  id: string,
  failure_message: string,
  created: number,
  amount: number,
  billing_details: {
    name: string
  },
  captured: true
}
interface Data {
  mensalistas: Mensalista[],
  financeiro: {
    amount: number,
  },
  historico: Historico[]
}

const data = ref<Data>({ mensalistas: [], financeiro: { amount: 0 }, historico: [] })
const loading = ref(true)

const mensalistasUrl = `https://workflow.davimoura.com.br/webhook/mblrj/mensalistas`

async function loadData() {
  const res = await axios.get(mensalistasUrl)
  data.value = res.data
  loading.value = false
}

loadData()
</script>

<template>
  <div class="container mx-auto py-5">
    <h1 class="text-primary text-4xl font-bold text-center">
      Mensalistas
    </h1>
  </div>
  <div class="flex justify-center items-center" v-if="loading">
    <div role="status">
      <svg aria-hidden="true" class="mr-2 w-10 h-10 mb-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div class="container mx-auto pb-20" v-else>
    <tabs :tabs="['Nomes dos mensalistas', 'Histórico de Pagamentos']">
      <template #0>
        <div class="overflow-x-auto w-full py-2">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Contato</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u of data.mensalistas" :key="u.id">
                <td>
                  <div class="flex items-center space-x-3">
                    <div>
                      <div class="font-bold">{{ u.name }}</div>
                      <div class="text-sm opacity-50">{{ u.email }}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {{ u.phone }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <template #1>
        <div class="flex justify-center items-center my-2">
          <div class="stats bg-primary text-primary-content">
            <div class="stat">
              <div class="stat-title">Saldo Pendente</div>
              <div class="stat-value">R$ {{ (data.financeiro.amount / 100).toFixed(2) }}</div>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto w-full py-2">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data/hora</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u of data.historico" :key="u.id">
                <td>
                  {{ u.billing_details.name }}
                </td>
                <td>
                  {{ format(new Date(u.created * 1000), 'dd/MM/yyyy - hh:mm') }}
                </td>
                <td>
                  R$ {{ (u.amount / 100).toFixed(2) }}
                </td>
                <td>
                  {{ u.captured ? 'Pago' : 'ERRO! ' + u.failure_message }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </tabs>
  </div>
</template>