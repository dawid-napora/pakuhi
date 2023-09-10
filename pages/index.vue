<script setup lang="ts">
const year = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => year - i);

const { status } = useAuth();
</script>

<template>
  <div class="page page--home">
    <home-content>
      <div class="grid gap-16 py-16">
        <auth-user v-if="status === 'authenticated'" />
        <auth-loading v-else-if="status === 'loading'" />
        <auth-login v-else />

        <graph-calendar v-for="year in years" v-bind="{ year }" />
      </div>
    </home-content>
  </div>
</template>
