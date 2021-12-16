const locale = {
  En: {
    S0: { code: 0, message: "Success" },
    S1: { code: 1, message: "Unauthorized" },
    S500: { code: 500, message: "Internal Error" },
  },
  Pt: {
    S0: { code: 0, message: "Successo" },
    S1: { code: 1, message: "Não Autorizado" },
    S500: { code: 500, message: "Erro interno" },
  },
};
const language: string = process.env.LOCALE || "En";
var Code = locale["En"];

switch (language) {
  case "En":
    Code = locale["En"];
    break;
  case "Pt":
    Code = locale["Pt"];
    break;
}

export default Code;
