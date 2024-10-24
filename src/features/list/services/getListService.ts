import axios, { AxiosError } from "axios";

export const getListService = async () => {
  try {
    const response = await axios.get(
      "https://6172cfe5110a740017222e2b.mockapi.io/elements"
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.error("Error en la respuesta de la API:", error.response.data);
        throw new Error(error.response.data.message);
      } else if (error.request) {
        console.error(
          "Error en la solicitud. Sin respuesta del servidor:",
          error.request
        );
        throw new Error("No se recibió respuesta del servidor");
      }
    }
    console.error("Error desconocido:", error);
    throw new Error("Ocurrió un error desconocido ");
  }
};
