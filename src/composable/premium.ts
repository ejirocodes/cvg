import { PREMIUM_VAL } from "@/utils";
import { computed, watch, type Ref } from "vue";
import { countries } from "@/data/countries";

export const usePremium = (age: Ref<string>, rate: Ref<string>) => {
  const country = computed(() =>
    countries.find((country) => country.rate === rate.value)
  );

  const premium = computed(() => {
    let price = 0;
    if (age.value && rate.value) {
      price = PREMIUM_VAL * parseInt(age.value) * parseFloat(rate.value);
      console.log(country.value);
      //   console.log(age.value);
      console.log(rate.value);
    }
    return price;
  });
  //   watch(age, (val) => {
  //     if (val) {
  //       console.log(val);
  //     }
  //   });
  return { premium, country };
};
