import { object, string } from "yup";

export const loginSchema = object().shape({
  email: string().email("Formato incorrecto").required("Campo obligatorio"),
  password: string()
    .min(6, "Mínimo 6 caracteres")
    .required("Campo obligatorio"),
});
