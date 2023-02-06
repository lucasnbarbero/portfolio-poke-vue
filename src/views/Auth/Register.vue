<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { registerSchema } from "@/validations";
import { useSwal } from "@/hooks";
import { auth } from "@/services/firebase.service";

//  Refs
const loading = ref<boolean>(false);

//  Hooks
const router = useRouter();
const { Toast } = useSwal();
const { handleSubmit, setFieldError } = useForm<{
  email: string;
  password: string;
  confirmPassword: string;
}>({
  validationSchema: registerSchema,
});

const submit = handleSubmit(async (values) => {
  const { email, password } = values;
  loading.value = true;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      router.push({ path: "/home" }).then(() => {
        Swal.fire("Bienvenido/a", "", "success");
      });
    })
    .catch((e) => {
      const { code } = e;
      switch (code) {
        case "auth/email-already-in-use":
          return setFieldError("email", "El correo ya está en uso");
      }
      console.log(e);
      Toast.fire("No se pudo crear la cuenta", "", "error");
    });
  loading.value = false;
});
</script>

<template>
  <div class="text-center mb-10">
    <span class="text-dark fw-bolder fs-1 mb-3">Creá tu cuenta</span>
    <div class="text-gray-500 fw-semibold fs-6">Con tus redes sociales</div>
  </div>
  <form class="form w-100" @submit.prevent="submit">
    <ButtonGoogle />
    <div class="separator separator-content my-10">
      <span class="text-gray-500 fw-semibold fs-7">O</span>
    </div>
    <div class="mb-10">
      <InputText
        name="email"
        placeholder="Ingresá tu correo electrónico"
        label="Correo electrónico"
      />
    </div>
    <div class="mb-10">
      <InputPassword
        name="password"
        placeholder="Ingresá tu contraseña"
        label="Contraseña"
      />
    </div>
    <div class="mb-10">
      <InputPassword
        name="confirmPassword"
        placeholder="Repetí tu contraseña"
        label="Repetir contraseña"
      />
    </div>
    <button class="btn btn-primary w-100 mb-10">
      Ingresar
      <div
        class="spinner-border spinner-border-sm ms-2"
        role="status"
        v-if="loading"
      ></div>
    </button>
    <div class="text-gray-500 text-center fw-semibold fs-6">
      ¿Ya tenés tu cuenta?
      <RouterLink to="/login" class="link-primary">Ingresá acá</RouterLink>
    </div>
  </form>
</template>
