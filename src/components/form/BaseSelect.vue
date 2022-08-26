<script setup lang="ts">
import { countries } from "@/data/countries";
defineProps<{
  value: string;
  id: string;
  label: string;
}>();
defineEmits(["update:value"]);
</script>

<template>
  <div>
    <label
      :for="id"
      class="block mb-1 font-medium text-gray-700"
      v-text="label"
    />
    <select
      :id="id"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      :name="id"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pri focus:border-pri sm:text-sm"
    >
      <option
        v-for="option in countries"
        :key="option.value"
        :value="option.value"
        v-text="option.label"
      />
    </select>
  </div>
</template>

<style scoped></style>
