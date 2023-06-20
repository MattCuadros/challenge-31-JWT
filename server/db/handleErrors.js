export const handleErrors = (code) => {
  if (!code) {
    return {
      status: 500,
      message: "Error de Servidor",
    };
  }

  switch (code) {
    case "22P02": {
      return {
        status: 400,
        message: "Formato no válido en el parámetro",
      };
    }
    case "404": {
      return {
        status: 404,
        message: "No existe ese registro",
      };
    }
    default:
      return {
        status: 500,
        message: "Error de Server",
      };
  }
};
