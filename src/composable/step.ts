import type { Step } from "@/types";
import { ActionType, StepperStatus } from "@/utils";
import { computed, onMounted, ref } from "vue";

export default function useStep() {
  const currentStep = ref(1);
  const steps = ref<Step[]>([
    { id: 1, name: "Start", href: "#", status: StepperStatus.Current },
    { id: 2, name: "Info", href: "#", status: StepperStatus.Upcoming },
    { id: 3, name: "Summary", href: "#", status: StepperStatus.Upcoming },
  ]);

  const totalSteps = computed(() => steps.value.length);

  function handleNext(currentIndex: number) {
    switchCurrentSteps(currentIndex, ActionType.Next);
  }

  function handlePrev() {
    if (currentStep.value) currentStep.value--;
  }

  function switchCurrentSteps(
    indx: number,
    switchType: keyof typeof ActionType
  ) {
    const current = steps.value.find((step) => step.id === indx) as Step;

    steps.value.forEach((step) => {
      if (step.id === current?.id) {
        if (switchType === ActionType.Next) {
          step.status = StepperStatus.Complete;
          currentStep.value++;
        }
        if (switchType === ActionType.Prev) {
          step.status = StepperStatus.Upcoming;
        }
      } else {
        step.status = StepperStatus.Upcoming;
      }
      //   Set next stepper as current
      if (step.id === current?.id + 1) {
        step.status = StepperStatus.Current;
      }
    });
  }

  onMounted(() => {
    currentStep.value = steps.value.find(
      (step) => step.status === StepperStatus.Current
    )?.id as number;
  });

  return { handleNext, handlePrev, currentStep, steps, totalSteps };
}
