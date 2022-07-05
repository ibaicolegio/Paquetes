function calcular() {
  document.getElementById("solucion1").style.display = "none";
  document.getElementById("solucion2").style.display = "none";

  pesoBarra = document.getElementById("pesoBarra").value;
  cantBarra = document.getElementById("cantBarra").value;
  pesoMaxPaquete = document.getElementById("pesoMaxPaquete").value;

  //Repoblar
  document.getElementById("pesoBarra").value = pesoBarra;
  document.getElementById("cantBarra").value = cantBarra;
  document.getElementById("pesoMaxPaquete").value = pesoMaxPaquete;

  ///
  //Cantidad barras paquete 1
  cantBarrasPaquete1 = Math.floor(pesoMaxPaquete / pesoBarra);

  //Peso paquete 1
  pesoPaquete1 = cantBarrasPaquete1 * pesoBarra;

  //Cantidad de paquetes 1
  cantPaquete1 = Math.floor(cantBarra / cantBarrasPaquete1);

  if (cantBarrasPaquete1 < cantBarra) {
    ///
    //Cantidad barras paquete 2
    cantBarrasPaquete2 = Math.floor(
      cantBarra - cantBarrasPaquete1 * cantPaquete1
    );

    //Cantidad de paquetes 2
    cantPaquete2 = 1;

    paquetesAux = 0;
    cantBarrasPaqueteAux = cantBarrasPaquete1 - 1;

    while (cantBarrasPaquete1 > cantBarrasPaquete2 + 1) {
      cantPaquete1 -= 1;
      paquetesAux += 1;
      cantBarrasPaquete2 += 1;
      if (cantPaquete1 == 0) {
        cantPaquete1 = paquetesAux;
        paquetesAux = 0;
        cantBarrasPaquete1 = cantBarrasPaqueteAux;
        cantBarrasPaqueteAux = cantBarrasPaquete1 - 1;
      }
    }
    if (cantBarrasPaquete2 != cantBarrasPaquete1) {
      cantPaquete2 += paquetesAux;

      //Peso paquete 2
      pesoPaquete2 = cantBarrasPaquete2 * pesoBarra;

      document.getElementById("aBarras").innerHTML =
        cantBarrasPaquete2 + " barras";
      document.getElementById("cPesoPorPaquete").innerHTML =
        pesoPaquete2 + " KG de peso";
      document.getElementById("bPaquetes").innerHTML =
        cantPaquete2 + " paquetes";

      document.getElementById("solucion2").style.display = "block";
    } else {
      cantPaquete1++;
    }
  } else {
    ///
    //Cantidad barras paquete 1
    cantBarrasPaquete1 = cantBarra;

    //Cantidad de paquetes 1
    cantPaquete1 = 1;
  }

  //Peso paquete 1
  pesoPaquete1 = cantBarrasPaquete1 * pesoBarra;

  document.getElementById("xBarras").innerHTML =
    cantBarrasPaquete1 + " barras";
  document.getElementById("zPesoPorPaquete").innerHTML =
    pesoPaquete1 + " KG de peso";
  document.getElementById("yPaquetes").innerHTML = cantPaquete1 + " paquetes";

  document.getElementById("solucion1").style.display = "block";
}
