import { createEnum } from "@/types";

/**
 * Enum for different type of buttons
 */
export const ButtonType = createEnum({
  Fill: "Fill",
  Outline: "Outline",
});

/**
 * Enum for stepper status
 */
export const StepperStatus = createEnum({
  Complete: "Complete",
  Current: "Current",
  Upcoming: "Upcoming",
});

/**
 * Enum for stepper status
 */
export const ActionType = createEnum({
  Next: "Next",
  Prev: "Prev",
});
