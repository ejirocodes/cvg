import type { Step } from "@/types";
import { ActionType, MAX_AGE, StepperStatus } from "@/utils";
import { computed, onMounted, ref, type Ref } from "vue";

export default function useStep(age: Ref<string>) {
  const currentStep = ref(1);
  const maxAgeError = ref(false);
  const steps = ref<Step[]>([
    { id: 1, name: "Start", href: "#", status: StepperStatus.Current },
    { id: 2, name: "Info", href: "#", status: StepperStatus.Upcoming },
    { id: 3, name: "Summary", href: "#", status: StepperStatus.Upcoming },
  ]);

  const totalSteps = computed(() => steps.value.length);

  function handleNext() {
    switchCurrentSteps(currentStep.value, ActionType.Next);
  }

  function handlePrev() {
    switchCurrentSteps(currentStep.value, ActionType.Prev);
  }

  function switchCurrentSteps(
    indx: number,
    switchType: keyof typeof ActionType
  ) {
    if (age.value && parseFloat(age.value) >= MAX_AGE) {
      return (maxAgeError.value = true);
    }
    const current = steps.value.find((step) => step.id === indx) as Step;
    if (
      currentStep.value === steps.value.length &&
      switchType === ActionType.Next
    ) {
      steps.value.forEach((step) => {
        step.status = StepperStatus.Upcoming;
      });
      steps.value[0].status = StepperStatus.Current;
      return (currentStep.value = 1);
    }
    steps.value.forEach((step) => {
      if (step.id === current?.id) {
        if (switchType === ActionType.Next) {
          step.status = StepperStatus.Complete;
          currentStep.value++;
          const newStep = [...steps.value];
          newStep[indx].status = StepperStatus.Current;
        }
        if (switchType === ActionType.Prev) {
          step.status = StepperStatus.Upcoming;
          currentStep.value--;
        }
      }
    });
  }

  onMounted(() => {
    currentStep.value = steps.value.find(
      (step) => step.status === StepperStatus.Current
    )?.id as number;
  });

  return {
    handleNext,
    handlePrev,
    currentStep,
    steps,
    totalSteps,
    maxAgeError,
  };
}
