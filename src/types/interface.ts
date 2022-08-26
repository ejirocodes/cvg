import type { StepperStatus } from "@/utils";

export type Status = keyof typeof StepperStatus;

export interface Step {
  id: number;
  name: string;
  href: string;
  status: Status;
}
