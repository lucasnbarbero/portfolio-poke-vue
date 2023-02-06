<script lang="ts" setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps<{
  name: string;
  placeholder: string;
  label: string;
  type?: string;
}>();
</script>

<template>
  <label class="form-label fw-bold">{{ label }}</label>
  <Field :name="name" v-slot="{ field, meta }">
    <input
      v-bind="field"
      :type="type ? type : 'text'"
      class="form-control form-control-solid"
      :class="{ 'border-danger': meta.touched && !meta.valid }"
      :placeholder="placeholder"
    />
  </Field>
  <ErrorMessage :name="name" class="text-danger" />
</template>
