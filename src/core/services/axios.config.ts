import type { App } from "vue";
import axios from "axios";
import VueAxios from 'vue-axios';
import type { AxiosResponse, AxiosRequestConfig } from "axios";

/**
 * @description servicio para llamar a la API con protocolo HTTP a traves de Axios
 */

class API_SERVICE {
  /**
   * @description Propiedad para compartir la instancia en Vue
   */
  public static vueInstance: App;

  /**
   * @description Inicializar Vue Axios
   */
  public static init(app: App<Element>) {
    API_SERVICE.vueInstance = app;
    API_SERVICE.vueInstance.use(VueAxios, axios);
    API_SERVICE.vueInstance.axios.defaults.baseURL =
      import.meta.env.VITE_APP_API_URL;
  }

  /**
   * @description Establecer los encabezados de HTTP predeterminados
   */
  public static setHeader(): void {
    API_SERVICE.vueInstance.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return API_SERVICE.vueInstance.axios.get(resource, params);
  }

  /**
   * @description Enviar solicitud GET
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(
    resource: string,
    slug = "" as string
  ): Promise<AxiosResponse> {
    return API_SERVICE.vueInstance.axios.get(`${resource}/${slug}`);
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params: any): Promise<AxiosResponse> {
    return API_SERVICE.vueInstance.axios.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return API_SERVICE.vueInstance.axios.patch(`${resource}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(resource: string, params: any): Promise<AxiosResponse> {
    return API_SERVICE.vueInstance.axios.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return API_SERVICE.vueInstance.axios.delete(resource);
  }
}

export default API_SERVICE;
