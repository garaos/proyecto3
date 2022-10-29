// import Chart from '/node_modules/chart.js/dist/chart.min.js';

import obtData from "./obtData.js";
import actData from "./ActData.js";

let pricesArray = [];
let datesArray = [];
let myChart;

if (!pricesArray.length) graficar();

["#tablaCrip", "#tablaInter", "#tablaInter2"].forEach((el) => {
  document.querySelector(el).addEventListener("change", graficar);
});

function graficar() {
  graphCrip();
  tablaInfo();
}

async function graphCrip() {
  let datos = await obtData();
  if (datos) {
    let crip = datos.data;
    let frecuencia = document.getElementById("tablaInter2").value;
    let b = crip.reverse().slice(0, frecuencia).reverse();

    pricesArray = b.map((datos) => datos.priceUsd);
    datesArray = b.map((datos) =>
      datos.date.split("T")[0].split("-").reverse().join("-")
    );
    const titulo = document.getElementById("tablaCrip").value;
    // Grafico
    const graph = document.getElementById("cripto");
    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(graph, {
      type: "line",
      data: {
        labels: datesArray,
        datasets: [
          {
            label: titulo,
            data: pricesArray,
            fill: false,
            borderColor: "rgb(255, 0, 220)",
            fill: true,
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Fin grafico
  }
}

async function tablaInfo() {
  let tablita = await actData();
  if (tablita) {
    let panel = tablita.data;

    document.getElementById("currenPrice").innerHTML =`USD $ ${Number(panel.priceUsd).toFixed(2)}`;
    document.getElementById("variation").innerHTML = `${Number(panel.changePercent24Hr).toFixed(2)}%`;
    if (panel.changePercent24Hr < 0) {
      document.getElementById("variation").style.color = "red";
    } else {
      document.getElementById("variation").style.color = "green";
    }

    document.getElementById("vwap").innerHTML =`USD $ ${Number(panel.vwap24Hr).toFixed(2)}`;
  }
}
