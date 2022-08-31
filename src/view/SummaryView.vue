<script setup lang="ts">
import type { Country, Package } from "@/types";

defineProps<{
  name: string;
  country: Country;
  package: Package;
  premium: number;
}>();
</script>

<template>
  <div class="text-center leading-loose mb-8">
    <h1 class="text-2xl font-bold">Summary</h1>
    <h2 class="mb-2">
      Hi <strong> {{ name }}</strong
      >, here is a summary of your insurance package
    </h2>
    <p>Name: {{ name }}</p>
    <p>Where do you live: {{ country?.label }}</p>
    <p>Package: {{ package?.type }}</p>
    <p>Premium: {{ premium }} {{ country?.currency }}</p>
  </div>
</template>

<style scoped></style>
