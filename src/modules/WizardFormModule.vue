<script setup lang="ts">
import WizardWrapper from "@/core-component/WizardWrapper.vue";
import StepperWizard from "@/components/multistep-form/StepperWizard.vue";
import ButtonMain from "@/components/shared/ButtonMain.vue";
import useStep from "@/composable/step";
import BaseInput from "../components/form/BaseInput.vue";
import { computed, ref } from "vue";
import BaseSelect from "../components/form/BaseSelect.vue";
// import RadioGroup from "../components/form/RadioGroup.vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { countries } from "@/data/countries";
import type { Country } from "@/types";

const { currentStep, handleNext, steps } = useStep();

const name = ref("");
const age = ref("");
const selectedCountry = ref<Country["value"]>(countries[0].value);

const computedCountrySelected = computed(() => {
  return countries.find((cntr) => cntr.value === selectedCountry.value);
});
const options = computed(() => {
  const calculatedBasePrice = computedCountrySelected.value
    ?.basePrice as number;
  const calculatedCurrency = computedCountrySelected.value?.currency;

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
      <section>
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
        {{ selectedCountry }}
        <BaseSelect
          :countries="countries"
          id="country"
          v-model:value="selectedCountry"
          label="Country"
        />
        <RadioGroup v-model="selectedOption">
          <RadioGroupLabel class="text-base font-medium text-gray-900">
            Select a mailing list
          </RadioGroupLabel>

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
        <!-- {{ option }} -->
        <!-- <RadioGroup v-model:value="option" :options="options" /> -->
      </section>
    </template>
  </WizardWrapper>
</template>

<style scoped></style>
