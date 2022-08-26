<script setup lang="ts">
defineProps<{
  value: string;
  type: string;
}>();
defineEmits(["update:value"]);
</script>

<template>
  <div>
    <label
      class="block text-sm font-medium mb-1 text-gray-700"
      :for="($attrs.id as string)"
      >{{ $attrs.label }}</label
    >
    <input
      :placeholder="$attrs.placeholder as string"
      :id="$attrs.id as string"
      class="shadow-sm focus:ring-pri focus:border-pri block w-full sm:text-sm border-gray-300 rounded-md"
      :value="value"
      :type="type"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped></style>
