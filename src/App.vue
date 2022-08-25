<script setup lang="ts">
import ButtonMain from "@/components/shared/ButtonMain.vue";
import StepperWizard from "@/components/multistep-form/StepperWizard.vue";
</script>

<template>
  <div>
    <StepperWizard />
    <ButtonMain class="w-[200px] h-12"> Start </ButtonMain>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
