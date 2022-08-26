<script setup lang="ts">
import WizardWrapper from "@/core-component/WizardWrapper.vue";
import ButtonMain from "@/components/shared/ButtonMain.vue";
</script>

<template>
  <WizardWrapper>
    <template #content>
      <div class="text-center">
        <div class="mb-8">
          <h1 class="font-bold text-2xl mb-3">Hello There!</h1>
          <p class="text-sm">
            Let's buy some insurance. It is going to take only few steps
          </p>
        </div>

        <ButtonMain class="w-[200px] h-12"> Start </ButtonMain>
      </div>
    </template>
  </WizardWrapper>
</template>

<style scoped></style>
