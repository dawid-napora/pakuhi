<script setup lang="ts">
const year = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => year - i);
</script>

<template>
  <div class="page page--home">
    <home-content>
      <div class="grid gap-16 py-16">
        <graph-calendar v-for="year in years" v-bind="{ year }" />
      </div>
    </home-content>
  </div>
</template>
