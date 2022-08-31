import type { Currencies, StepperStatus } from "@/utils";

export type Status = keyof typeof StepperStatus;
export type Currency = keyof typeof Currencies;

export interface Step {
  id: number;
  name: string;
  href: string;
  status: Status;
}
export interface Country {
  label: string;
  rate: string;
  currency: Currency;
  locale: string;
  basePrice: number;
}
export interface Package {
  id: number;
  label: string;
  value: string;
  type: string;
}
