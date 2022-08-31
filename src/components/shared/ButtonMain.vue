<script setup lang="ts">
import { computed } from "vue";
import { ButtonType } from "@/utils";
type IProps = {
  buttonType?: keyof typeof ButtonType;
};
const props = withDefaults(defineProps<IProps>(), {
  buttonType: ButtonType.Fill,
});
const buttonStyle = computed(() => {
  const themes = {
    [ButtonType.Fill]: "bg-pri text-white hover:bg-white hover:text-pri",
    [ButtonType.Outline]: "bg-white text-pri hover:bg-pri hover:text-white",
  };
  return themes[props.buttonType];
});
</script>
<template>
  <button :class="buttonStyle" class="border border-pri h-12">
    <slot />
  </button>
</template>

<style scoped></style>
