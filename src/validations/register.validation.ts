import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  email: string().email("Formato incorrecto").required("Campo obligatorio"),
  password: string()
    .min(6, "Mínimo 6 caracteres")
    .required("Campo obligatorio"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas no coinciden")
    .required("Campo obligatorio"),
});
