<script setup lang="ts">
const levelColors = [
  "bg-neutral-100",
  "bg-graph-light-level-1",
  "bg-graph-light-level-2",
  "bg-graph-light-level-3",
  "bg-graph-light-level-4",
];
</script>

<template>
  <div
    class="graph-calendar-legend text-xs font-medium text-neutral-600 select-none"
  >
    <div class="graph-calendar-legend__wrapper flex items-center gap-1">
      <span class="mr-1">Less</span>
      <span
        v-for="(_, level) in 5"
        :key="level"
        :class="levelColors[level]"
        class="block w-4 h-4 rounded border"
      />
      <span class="ml-1">More</span>
    </div>
  </div>
</template>
