import type { Step } from "@/types";
import { StepperStatus } from "@/utils";
import { computed, onMounted, ref } from "vue";

export default function useStep() {
  const currentStep = ref(1);
  const steps = ref<Step[]>([
    { id: 1, name: "Start", href: "#", status: StepperStatus.Current },
    { id: 2, name: "Info", href: "#", status: StepperStatus.Upcoming },
    { id: 3, name: "Summary", href: "#", status: StepperStatus.Upcoming },
  ]);

  const totalSteps = computed(() => steps.value.length);

  function handleNext() {
    if (currentStep.value) {
      currentStep.value++;
    }
  }

  function handlePrev() {
    if (currentStep.value) currentStep.value--;
  }

  function switchCurrentSteps(indx: number) {
    // steps.value = steps.value.map((step) => {
    //   step.status = StepperStatus.Upcoming;
    // });
  }

  onMounted(() => {
    currentStep.value = steps.value.find(
      (step) => step.status === StepperStatus.Current
    )?.id as number;
  });

  return { handleNext, handlePrev, currentStep, steps, totalSteps };
}
