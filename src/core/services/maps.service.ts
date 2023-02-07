import { Loader } from "@googlemaps/js-api-loader";

const LoaderMap = new Loader({
  apiKey: import.meta.env.VITE_MAPS_APIKEY,
  libraries: ["places"],
});

export default LoaderMap;
