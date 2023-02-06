<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import Swal from "sweetalert2";
import { signInWithEmailAndPassword } from "firebase/auth";

import { loginSchema } from "@/validations";
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
}>({
  validationSchema: loginSchema,
});

const submit = handleSubmit(async (values) => {
  loading.value = true;
  const { email, password } = values;
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      router.push({ path: "/home" }).then(() => {
        Swal.fire("Bienvenido/a", "", "success");
      });
    })
    .catch((e) => {
      const { code } = e;
      switch (code) {
        case "auth/user-not-found":
          return setFieldError("email", "El usuario no está registrado");
        case "auth/wrong-password":
          return setFieldError("password", "Contraseña inválida");
      }
      console.log(e);
      Toast.fire("No se pudo iniciar sesión", "", "error");
    });
  loading.value = false;
});
</script>

<template>
  <div class="text-center mb-10">
    <span class="text-dark fw-bolder fs-1 mb-3">Iniciar sesión</span>
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
    <button class="btn btn-primary w-100 mb-10">
      Ingresar
      <div
        class="spinner-border spinner-border-sm ms-2"
        role="status"
        v-if="loading"
      ></div>
    </button>
    <div class="text-gray-500 text-center fw-semibold fs-6">
      ¿No tenés cuenta?
      <RouterLink to="/register" class="link-primary"
        >Registrate acá</RouterLink
      >
    </div>
  </form>
</template>
