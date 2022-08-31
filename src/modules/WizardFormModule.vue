<script setup lang="ts">
import WizardWrapper from "@/core-component/WizardWrapper.vue";
import StepperWizard from "@/components/multistep-form/StepperWizard.vue";
import ButtonMain from "@/components/shared/ButtonMain.vue";
import useStep from "@/composable/step";
import BaseInput from "../components/form/BaseInput.vue";
import { computed, ref, watch, type ComputedRef } from "vue";
import BaseSelect from "../components/form/BaseSelect.vue";
// import RadioGroup from "../components/form/RadioGroup.vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { countries } from "@/data/countries";
import type { Package, Country } from "@/types";
import { ButtonType } from "@/utils";
import { usePremium } from "@/composable/premium";
import SummaryView from "../view/SummaryView.vue";
import ErrorDisplay from "../components/shared/ErrorDisplay.vue";

const selectedCountryRate = ref<Country["rate"]>(countries[0].rate);
const name = ref("");
const age = ref("");

const country = computed(() =>
  countries.find((country) => country.rate === selectedCountryRate.value)
);

const packages: ComputedRef<Package[]> = computed(() => {
  const calculatedBasePrice = country.value?.basePrice as number;
  const calculatedCurrency = country.value?.currency;

  return [
    {
      id: 1,
      label: "Standard",
      type: "Standard",
      value: "0",
    },
    {
      id: 2,
      label: `Safe (+${
        (calculatedBasePrice as number) * 0.5
      }${calculatedCurrency}, 50%)`,
      type: "Safe",
      value: "0.5",
    },
    {
      id: 3,
      label: `Super Safe (+${
        calculatedBasePrice * 0.75
      }${calculatedCurrency}, 75%)`,
      type: "Super Safe",
      value: "0.75",
    },
  ];
});
const selectedPackage = ref<Package>(packages.value[0]);
const isNameError = ref(false);
const isAgeError = ref(false);

const { currentStep, handleNext, handlePrev, steps } = useStep();
const { premium } = usePremium(
  age,
  selectedCountryRate,
  selectedPackage,
  country as ComputedRef<Country>
);

function navigateSummary() {
  if (!name.value) {
    return (isNameError.value = true);
  }
  if (!age.value) {
    return (isAgeError.value = true);
  }
  handleNext();
}

watch([name, age], (_name, _age) => {
  if (_name) {
    isNameError.value = false;
  }
  if (_age) {
    isAgeError.value = false;
  }
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

        <ButtonMain class="w-[200px] h-12" @click="handleNext">
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
        <ErrorDisplay class="mb-3" v-if="isNameError"
          >Please enter your name</ErrorDisplay
        >
        <div class="mb-4">
          <BaseInput
            v-model:value="age"
            placeholder="Age"
            id="age"
            type="number"
            label="Age"
          />
        </div>
        <ErrorDisplay v-if="isAgeError">Please enter your age</ErrorDisplay>

        <BaseSelect
          :countries="countries"
          id="country"
          v-model:value="selectedCountryRate"
          label="Country"
        />
        <RadioGroup v-model="selectedPackage">
          <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
            <RadioGroupOption
              as="template"
              v-for="item in packages"
              :key="item.id"
              :value="item"
              v-slot="{ checked, active }"
            >
              <div
                :class="[
                  selectedPackage.id === item.id
                    ? 'border-transparent'
                    : 'border-gray-300',
                  selectedPackage.id === item.id ? 'border-pri border-2' : '',
                  'relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none',
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
                  :class="[
                    selectedPackage.id !== item.id ? 'invisible' : '',
                    'h-5 w-5 text-pri',
                  ]"
                  aria-hidden="true"
                />
                <span
                  :class="[
                    active ? 'border' : 'border-2',
                    checked ? 'border-pri border-2' : 'border-transparent',
                    'absolute -inset-px pointer-events-none',
                  ]"
                  aria-hidden="true"
                />
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
        <div
          class="mx-auto text-center flex-col mt-8 gap-4 flex justify-center items-center"
        >
          <p class="block text-2xl mb-5 font-bold" v-show="premium">
            Your premium is {{ premium }} {{ country?.currency }}
          </p>
          <div>
            <ButtonMain
              @click="handlePrev"
              :buttonType="ButtonType.Outline"
              class="w-[200px] mr-10"
            >
              Back
            </ButtonMain>
            <ButtonMain @click.prevent="navigateSummary" class="w-[200px]">
              Next
            </ButtonMain>
          </div>
        </div>
      </section>
      <section v-if="currentStep === 3">
        <SummaryView
          :name="name"
          :country="country!"
          :premium="premium!"
          :package="selectedPackage"
        />
        <div>
          <ButtonMain
            @click="handlePrev"
            :buttonType="ButtonType.Outline"
            class="w-[200px] mr-10"
          >
            Back
          </ButtonMain>
          <ButtonMain @click.prevent="handleNext" class="w-[200px]">
            Buy
          </ButtonMain>
        </div>
      </section>
    </template>
  </WizardWrapper>
</template>

<style scoped></style>
