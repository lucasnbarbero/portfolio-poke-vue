import ButtonGoogle from "@/components/ButtonGoogle.vue";
import InputText from "@/components/InputText.vue";
import InputPassword from "@/components/InputPassword.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ButtonGoogle: typeof ButtonGoogle;
    InputText: typeof InputText;
    InputPassword: typeof InputPassword;
  }
}
