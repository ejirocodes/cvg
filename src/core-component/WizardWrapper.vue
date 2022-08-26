<script setup lang="ts">
import StepperWizard from "@/components/multistep-form/StepperWizard.vue";
</script>
<template>
  <main class="min-h-screen h-full flex items-center flex-col">
    <div class="pt-10">
      <StepperWizard class="mb-5" />
      <slot name="content" />
    </div>
  </main>
</template>

<style scoped></style>
