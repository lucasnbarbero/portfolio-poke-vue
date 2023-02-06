<script lang="ts" setup>
import { ref } from "vue";
import { Field, ErrorMessage } from "vee-validate";

defineProps<{
  name: string;
  placeholder: string;
  label: string;
}>();

const showPass = ref<boolean>(false);
</script>

<template>
  <label class="form-label fw-bold">{{ label }}</label>
  <Field :name="name" v-slot="{ field, meta }">
    <div class="position-relative">
      <input
        v-bind="field"
        :type="showPass ? 'text' : 'password'"
        class="form-control form-control-solid"
        :class="{ 'border-danger': meta.touched && !meta.valid }"
        :placeholder="placeholder"
      />

      <div class="position-absolute translate-middle-y top-50 end-0 me-3">
        <a
          href="#"
          class="btn p-0 svg-icon svg-icon-2hx"
          @click="() => (showPass = !showPass)"
        >
          <i class="fa-solid" :class="showPass ? 'fa-eye' : 'fa-eye-slash'"></i>
        </a>
      </div>
    </div>
  </Field>
  <ErrorMessage :name="name" class="text-danger" />
</template>
