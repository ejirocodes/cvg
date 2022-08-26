import type { Country } from "@/types";
import { Currencies } from "@/utils";

export const countries: Country[] = [
  {
    label: "Hong Kong",
    value: 1,
    currency: Currencies.HKD,
    locale: "zh-HK",
    basePrice: 100,
  },
  {
    label: "USA",
    value: 2,
    currency: Currencies.USD,
    locale: "en-US",
    basePrice: 200,
  },
  {
    label: "Australia",
    value: 3,
    currency: Currencies.AUD,
    locale: "en-AU",
    basePrice: 300,
  },
];
