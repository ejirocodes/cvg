<script setup lang="ts">
import WizardWrapper from "@/core-component/WizardWrapper.vue";
import StepperWizard from "@/components/multistep-form/StepperWizard.vue";
import ButtonMain from "@/components/shared/ButtonMain.vue";
import useStep from "@/composable/step";
import BaseInput from "../components/form/BaseInput.vue";
import { computed, ref, watch } from "vue";
import BaseSelect from "../components/form/BaseSelect.vue";
// import RadioGroup from "../components/form/RadioGroup.vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { countries } from "@/data/countries";
import type { Country } from "@/types";
import { ButtonType } from "@/utils";
import { usePremium } from "@/composable/premium";

const selectedCountry = ref<Country["rate"]>(countries[0].rate);
const name = ref("");
const age = ref("");

const { currentStep, handleNext, handlePrev, steps } = useStep();
const { premium, country } = usePremium(age, selectedCountry);

// const computedCountrySelected = computed(() => {
//   return countries.find((cntr) => cntr.rate === selectedCountry.value);
// });

const options = computed(() => {
  const calculatedBasePrice = country.value?.basePrice as number;
  const calculatedCurrency = country.value?.currency;

  return [
    {
      id: 1,
      label: "Standard",
      value: "0",
    },
    {
      id: 2,
      label: `Safe (+${
        (calculatedBasePrice as number) * 0.5
      }${calculatedCurrency}, 50%)`,
      value: "0.5",
    },
    {
      label: `Super Safe (+${
        calculatedBasePrice * 0.75
      }${calculatedCurrency}, 75%)`,
      value: "0.75",
    },
  ];
});
const selectedOption = ref(options.value[0]);

watch(selectedCountry, () => {
  selectedOption.value = options.value[0];
});
</script>

<template>
  <WizardWrapper>
    <template #stepper>
      <StepperWizard class="mb-5" :steps="steps" />
    </template>
    <template #content>
      <section class="text-center" v-if="currentStep === 1">
        <div class="mb-10">
          <h1 class="font-bold text-4xl mb-3">Hello There!</h1>
          <p class="text-lg">
            Let's buy some insurance. It is going to take only few steps
          </p>
        </div>

        <ButtonMain class="w-[200px] h-12" @click="handleNext(currentStep)">
          Start
        </ButtonMain>
      </section>
      <section v-if="currentStep === 2">
        <div class="mb-4">
          <BaseInput
            v-model:value="name"
            placeholder="Name"
            id="fullname"
            type="text"
            label="Full name"
          />
        </div>
        <div class="mb-4">
          <BaseInput
            v-model:value="age"
            placeholder="Age"
            id="age"
            type="number"
            label="Age"
          />
        </div>
        <BaseSelect
          :countries="countries"
          id="country"
          v-model:value="selectedCountry"
          label="Country"
        />
        <RadioGroup v-model="selectedOption">
          <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
            <RadioGroupOption
              as="template"
              v-for="item in options"
              :key="item.id"
              :value="item"
              v-slot="{ checked, active }"
            >
              <div
                :class="[
                  checked ? 'border-transparent' : 'border-gray-300',
                  active ? 'border-pri ring-2 ring-pri' : '',
                  'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none',
                ]"
              >
                <span class="flex-1 flex">
                  <span class="flex flex-col">
                    <RadioGroupLabel
                      as="span"
                      class="block text-sm font-medium text-gray-900"
                    >
                      {{ item.label }}
                    </RadioGroupLabel>
                  </span>
                </span>
                <CheckCircleIcon
                  :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-pri/60']"
                  aria-hidden="true"
                />
                <span
                  :class="[
                    active ? 'border' : 'border-2',
                    checked ? 'border-pri' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none',
                  ]"
                  aria-hidden="true"
                />
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
        <div
          class="mx-auto text-center flex-col mt-16 gap-4 flex justify-center items-center"
        >
          <p class="block" v-show="premium">Your premium is {{ premium }}</p>
          <div>
            <ButtonMain
              @click="handlePrev(currentStep)"
              :buttonType="ButtonType.Outline"
              class="w-[200px] mr-10"
            >
              Back
            </ButtonMain>
            <ButtonMain @click="handleNext(currentStep)" class="w-[200px]">
              Next
            </ButtonMain>
          </div>
        </div>
      </section>
    </template>
  </WizardWrapper>
</template>

<style scoped></style>
