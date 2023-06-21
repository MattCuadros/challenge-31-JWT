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
    case "501": {
      return {
        status: 501,
        message: "No existe el header de autenticacion",
      };
    }
    default:
      return {
        status: 500,
        message: "Error de Server",
      };
  }
};
