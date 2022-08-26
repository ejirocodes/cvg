<script setup lang="ts">
import WizardWrapper from "@/core-component/WizardWrapper.vue";
import StepperWizard from "@/components/multistep-form/StepperWizard.vue";
import ButtonMain from "@/components/shared/ButtonMain.vue";
import useStep from "@/composable/step";

const { currentStep, handleNext, steps } = useStep();
</script>

<template>
  <WizardWrapper>
    <template #stepper>
      <StepperWizard class="mb-5" :steps="steps" />
    </template>
    <template #content>
      <div class="text-center" v-if="currentStep === 1">
        <div class="mb-8">
          <h1 class="font-bold text-2xl mb-3">Hello There!</h1>
          <p class="text-sm">
            Let's buy some insurance. It is going to take only few steps
          </p>
        </div>

        <ButtonMain class="w-[200px] h-12" @click="handleNext(currentStep)">
          Start
        </ButtonMain>
      </div>
    </template>
  </WizardWrapper>
</template>

<style scoped></style>
