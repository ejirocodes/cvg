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
    [ButtonType.Fill]: "bg-black text-white hover:bg-white hover:text-black",
    [ButtonType.Outline]: "bg-white text-black hover:bg-black hover:text-white",
  };
  return themes[props.buttonType];
});
</script>
<template>
  <button :class="buttonStyle" class="border border-black">
    <slot />
  </button>
</template>

<style scoped></style>
