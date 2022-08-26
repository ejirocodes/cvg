<script setup lang="ts">
import WizardWrapper from "@/core-component/WizardWrapper.vue";
import StepperWizard from "@/components/multistep-form/StepperWizard.vue";
import ButtonMain from "@/components/shared/ButtonMain.vue";
import useStep from "@/composable/step";
import BaseInput from "../components/form/BaseInput.vue";
import { ref } from "vue";

const { currentStep, handleNext, steps } = useStep();

const name = ref("");
const age = ref("");
</script>

<template>
  <WizardWrapper>
    <template #stepper>
      <StepperWizard class="mb-5" :steps="steps" />
    </template>
    <template #content>
      <!-- <div class="text-center" v-if="currentStep === 1">
        <div class="mb-8">
          <h1 class="font-bold text-2xl mb-3">Hello There!</h1>
          <p class="text-sm">
            Let's buy some insurance. It is going to take only few steps
          </p>
        </div>

        <ButtonMain class="w-[200px] h-12" @click="handleNext(currentStep)">
          Start
        </ButtonMain>
      </div> -->
      <div class="mb-4">
        <BaseInput
          v-model:value="name"
          placeholder="Name"
          id="fullname"
          type="text"
          label="Full name"
        />
      </div>
      <div>
        <BaseInput
          v-model:value="age"
          placeholder="Age"
          id="age"
          type="number"
          label="Age"
        />
      </div>
    </template>
  </WizardWrapper>
</template>

<style scoped></style>
