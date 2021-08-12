function mostrar() {
  let cont = 0;
  let contImportados = 0;
  let otro = "s";

  let tipoJuguete;
  let precio = 0;
  let origen;

  let contMuneca = 0;
  let contRompe = 0;
  let contPelota = 0;

  let tipoMasVendido;
  let promImportados = 0;
  let acumImportados = 0;
  let recaudacion = 0;
  let rompeMasBarato = 0;
  let totalIva = 0;

  while (otro == "s") {
    precio = 0;
    origen = "";
    tipoJuguete = "";

    //tipo de juguetes
    while (
      tipoJuguete != "muneca" &&
      tipoJuguete != "rompecabezas" &&
      tipoJuguete != "pelota"
    ) {
      tipoJuguete = prompt(
        "Ingrese el tipo de juguete (muñeca, rompecabezas, pelota)"
      );
    }

    switch (tipoJuguete) {
      case "muñeca":
        contMuneca++;
        break;

      case "rompecabezas":
        contRompe++;
        break;

      case "pelota":
        contPelota++;
        break;
    }

    //* origen: "nacional", "mercosur", "resto del mundo"
    while (origen != "nacional" && origen != "importado") {
      origen = prompt("Ingrese el origen del producto (nacional, importado)");
    }

    if (origen == "importado") {
      contImportados++;
    }

    //* precio entre 1000 y 5000
    while (precio < 1000 || precio > 5000) {
      precio = parseInt(prompt("Ingrese el precio (entre 1000 y 5000)"));
    }

    // c- La recaudacion total
    recaudacion = recaudacion + precio;

    //d- Cual es el precio del rompecabezas nacional mas barato
    if (tipoJuguete == "rompecabezas" && origen == "nacional") {
      if (rompeMasBarato == 0) {
        rompeMasBarato = precio;
      } else {
        if (precio < rompeMasBarato) {
          rompeMasBarato = precio;
        }
      }
    }

    if (origen == "importado") {
      acumImportados = acumImportados + precio;
    }

    otro = prompt("Ingresar otra venta? (s/n)");

    cont++;
  }

  //a- El tipo de juguete mas vendido
  if (contMuneca > contRompe) {
    if (contMuneca > contPelota) {
      tipoMasVendido = "Muñeca";
    } else {
      tipoMasVendido = "Pelota";
    }
  } else {
    if (contRompe > contPelota) {
      tipoMasVendido = "Rompecabezas";
    } else {
      tipoMasVendido = "Pelota";
    }
  }

  //b- El promedio de precio de los juguetes importados
  promImportados = acumImportados / contImportados;

  // e- Cuanto se percibio de iva en total (es el 21% de las ventas)
  totalIva = (recaudacion / 100) * 21;

  mostrarDatos(
    tipoMasVendido,
    promImportados,
    recaudacion,
    rompeMasBarato,
    totalIva
  );
}

function mostrarDatos(
  tipoMasVendido,
  promImportados,
  recaudacion,
  rompeMasBarato,
  totalIva
) {
  document.write("Tipo mas vendido: " + tipoMasVendido + "<br><br>");
  document.write(
    "Promedio de precios de importados: " + promImportados + "<br><br>"
  );
  document.write("Recaudación: " + recaudacion + "<br><br>");
  document.write(
    "Rompecabezas nacional mas barato: " + rompeMasBarato + "<br><br>"
  );
  document.write("Total IVA: " + totalIva + "<br><br>");
}
