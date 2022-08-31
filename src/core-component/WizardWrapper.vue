<script setup lang="ts"></script>
<template>
  <main class="min-h-screen h-full flex items-center flex-col max-w-xl mx-auto">
    <div class="pt-10">
      <slot name="stepper" />
      <slot name="content" />
    </div>
  </main>
</template>

<style scoped></style>
