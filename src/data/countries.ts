import type { Country } from "@/types";
import { Currencies } from "@/utils";

export const countries: Country[] = [
  {
    label: "Hong Kong",
    value: 0,
    currency: Currencies.HKD,
    locale: "zh-HK",
  },
  {
    label: "USA",
    value: 1,
    currency: Currencies.USD,
    locale: "en-US",
  },
  {
    label: "Australia",
    value: 2,
    currency: Currencies.AUD,
    locale: "en-AU",
  },
];
