import { PREMIUM_VAL } from "@/utils";
import { computed, type ComputedRef, type Ref } from "vue";
import type { Country } from "@/types";

export const usePremium = (
  age: Ref<string>,
  rate: Ref<string>,
  selectedPackage: Ref<{
    id: number;
    label: string;
    value: string;
  }>,
  selectedCountry: ComputedRef<Country>
) => {
  const premium = computed(() => {
    let price = 0;
    if (age.value && rate) {
      price = PREMIUM_VAL * parseFloat(age.value) * parseFloat(rate.value);
      if (selectedPackage.value.value !== "") {
        price =
          price +
          selectedCountry.value.basePrice *
            parseFloat(selectedPackage.value.value);
      }
    }
    return price;
  });
  return { premium };
};
