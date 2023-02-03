<template>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Erro 404</h1>
      <p class="py-6">Você chegou a uma página que não existe!</p>
      <button @click="$router.go(-1)" class="btn btn-primary">Voltar</button>
    </div>
  </div>
</div>
</template>

<route lang="yaml">
redirect:
  name: contribua
</route>