<template>
  <button type="button" class="btn btn-google w-100" @click.prevent="signIn">
    <i class="fa-brands fa-google me-2"></i>
    Continuar con Google
    <div
      class="spinner-border spinner-border-sm ms-2"
      role="status"
      v-if="loading"
    ></div>
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "@/services/firebase.service";
import { useSwal } from "@/hooks";
import Swal from "sweetalert2";

//  Refs
const loading = ref<boolean>(false);

//  Hooks
const { Toast } = useSwal();
const router = useRouter();

//  Methods
const signIn = async () => {
  const provider = new GoogleAuthProvider();
  loading.value = true;
  await signInWithPopup(auth, provider)
    .then(() => {
      router.push({ path: "/home" }).then(() => {
        Swal.fire("Bienvenido/a", "", "success");
      });
    })
    .catch((e) => {
      console.log(e);
      Toast.fire("No se pudo iniciar sesión", "", "error");
    });
  loading.value = false;
};
</script>
