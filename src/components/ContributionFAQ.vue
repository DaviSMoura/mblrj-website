<script setup lang="ts">
import { ref } from 'vue';
import Qa from './QA.vue';

const questions = ref([
  {
    q: "O que é o MBL RJ?",
    a: "Fundado em 2014, o Movimento Brasil Livre (MBL) é um movimento político identificado por especialistas como liberal conservador.",
  },
  {
    q: "Qual o valor da mensalidade? Posso contribuir com mais?",
    a: "A mensalidade voluntária do MBL RJ é de R$ 20 por mês. Qualquer contribuição a mais é opcional (assim como o valor de R$ 20,00), mas muito bem-vinda.",
  },
  {
    q: "O que eu ganho sendo mensalista do MBL RJ?",
    a: "Além de colaborar com o movimento, você ainda fará parte de um grupo exclusivo no qual poderá participar ativamente das nossas discussões e decisões.",
  },
  {
    q: "Qual a forma de pagamento?",
    a: "Você pode pagar via cartão de crédito por meio da plataforma Stripe. Basta escolher seu plano e inserir os dados do seu cartão. Assim que o pagamento for confirmado, você será redirecionado ao grupo exclusivo.",
  },
  {
    q: "Posso fazer uma doação avulsa sem me comprometer mensalmente?",
    a: "Com certeza! Você pode contribuir pelo PIX, a chave é contribua@mblrj.com, mas você não terá acesso aos benefícios dos mensalistas.",
  },
  {
    q: "Como eu sei se o meu dinheiro está sendo utilizado no MBL?",
    a: "No grupo dos contribuidores, disponibilizaremos as prestações de contas do que estamos adquirindo com o dinheiro das mensalidades e doações.",
  },
  {
    q: "Não tenho condições de contribuir com dinheiro, há alguma outra forma de ajudar?",
    a: "Sim! Você pode entrar para nossos grupos de apoio. Temos reuniões mensais com os apoiadores e quem quiser colaborar com o seu conhecimento em áreas como redes sociais, imprensa, produção audiovisual, entre outros, será muito bem-vindo. Acesse participe.mbl.org.br e faça parte!",
  },
  {
    q: "Como posso ter ainda mais proximidade com o MBL?",
    a: "Nós temos a Academia MBL, um curso completo para quem quer aprender a participar de forma mais ativa do movimento. Todos os anos são abertas matrículas para novas turmas. Nossos coordenadores e principais líderes são professores e alunos do segundo ano da Academia. Acesse academia.mbl.org.br e saiba mais!",
  },
  {
    q: "Sou aluno da Academia MBL, posso ser apoiador?",
    a: "Lógico! Qualquer aluno da Academia, seja do primeiro ou do segundo ano, pode se tornar mensalista a qualquer momento.",
  },
  {
    q: "Como faço para cancelar minha assinatura?",
    a: "Basta efetuar o cancelamento seguindo as instruções da Stripe. A assinatura pode ser cancelada a qualquer momento. Se precisar de ajuda, estamos a disposição nos grupos de mensalistas e redes sociais.",
  },
  {
    q: "Tenho mais dúvidas!",
    a: "Entre em contato conosco nos nossos grupos de apoio (participe.mbl.org.br) ou redes sociais.",
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