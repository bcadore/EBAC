$(document).ready(function () {
  //Aplicar a máscara ao número de telefone
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(XX) XXXXX-XXXX",
    definitions: {
      0: "[0-9]",
    },
  });

  //Aplicar a máscara ao CPF
  $("#cpf").mask("000.000.000-00", {
    placeholder: "XXX.XXX.XXX-XX",
    definitions: {
      0: "[0-9]",
    },
  });

  //Aplicar a máscara ao CEP
  $("#cep").mask("00.000-000", {
    placeholder: "XX.XXX-XXX",
    definitions: {
      0: "[0-9]",
    },
  });
});
