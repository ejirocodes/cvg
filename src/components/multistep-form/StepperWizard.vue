<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/24/solid";

const steps = [
  { name: "Start", href: "#", status: "complete" },
  { name: "Info", href: "#", status: "current" },
  { name: "Summary", href: "#", status: "upcoming" },
];
</script>

<template>
  <nav aria-label="Progress">
    <ol role="list" class="flex items-center">
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[
          stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
          'relative',
        ]"
      >
        <template v-if="step.status === 'complete'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-black" />
          </div>
          <a
            href="#"
            class="relative w-8 h-8 flex items-center justify-center bg-black rounded-full hover:bg-gray-800"
          >
            <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            href="#"
            class="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-black rounded-full"
            aria-current="step"
          >
            <span
              class="h-2.5 w-2.5 bg-black rounded-full"
              aria-hidden="true"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a
            href="#"
            class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
          >
            <span
              class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
              aria-hidden="true"
            />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<style scoped></style>
