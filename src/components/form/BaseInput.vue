<script setup lang="ts">
defineProps<{
  value: string;
  type: string;
  label: string;
  id: string;
  placeholder: string;
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
    <input
      :placeholder="placeholder"
      :id="id"
      class="shadow-sm focus:ring-pri focus:border-pri block w-full sm:text-sm border-gray-300"
      :value="value"
      :type="type"
      :min="type === 'number' ? '1' : ''"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped></style>
