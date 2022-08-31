import type { Country } from "../../src/types/interface";
import { Currencies } from "@/utils";
import { describe, test, expect } from "vitest";
import { computed, ref, type ComputedRef } from "vue";
import { usePremium } from "../../src/composable/premium";

const age = ref("10");
const rate = ref("1");
const insuracnePackage = ref({
  id: 1,
  label: "Standard",
  type: "Standard",
  value: "0",
});
const country = computed(() => {
  return {
    label: "Hong Kong",
    rate: "1",
    currency: Currencies.HKD,
    locale: "zh-HK",
    basePrice: 100,
  };
}) as ComputedRef<Country>;

describe("usePremium", () => {
  test("it should return correct type", () => {
    expect(
      usePremium(age, rate, insuracnePackage, country).premium.value
    ).toBeTypeOf("number");
  });
  test("it calculate premium accurately", () => {
    expect(
      usePremium(age, rate, insuracnePackage, country).premium.value
    ).toEqual(100);
  });
});
