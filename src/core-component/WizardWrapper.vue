<script setup lang="ts"></script>
<template>
  <main class="min-h-screen h-full flex items-center flex-col">
    <div class="pt-10">
      <slot name="stepper" />
      <slot name="content" />
    </div>
  </main>
</template>

<style scoped></style>
