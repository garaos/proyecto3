// import Chart from '/node_modules/chart.js/dist/chart.min.js';
import obtdata from './obtData.js';
import actdata from './ActData.js';



let pricesArray = [];
let datesArray = [];
let myChart;



if (!pricesArray.length) {
    graficar();
}

document.querySelector("#tablaCrip").addEventListener("change", graficar);
document.querySelector("#tablaInter").addEventListener("change", graficar);
document.querySelector("#tablaInter2").addEventListener("change", graficar);

function graficar() {
    graphCrip()
    tablaInfo()
}

async function graphCrip() {
    let datos = await obtdata();
    console.log("hola");
    console.log(datos);
    if (datos) {
        let crip = datos.data;
        let frecuencia = document.getElementById("tablaInter2").value;
        let b = crip.reverse();
        let a = b.slice(0, frecuencia);
        let c = a.reverse();

        pricesArray = c.map((datos) => datos.priceUsd);
        datesArray = c.map((datos) => datos.date.split('T')[0]);

        let titulo = document.getElementById("tablaCrip").value;
        // Grafico
        const graph = document.getElementById('cripto');
        if(myChart){
            myChart.destroy();
        }

        myChart = new Chart(graph, {
            type: 'line',
            data: {
                labels: datesArray,
                datasets: [{
                    label: titulo,
                    data: pricesArray,
                    fill: false,
                    borderColor: 'rgb(255, 0, 220)',
                    fill: true,
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        
        // Fin grafico
    }
}

async function tablaInfo(){
    let tablita = await actdata();
if (tablita) {
   let panel = tablita.data;

   document.getElementById("currenPrice").innerHTML= panel.priceUsd
   document.getElementById("variation").innerHTML= panel.changePercent24Hr
   if (panel.changePercent24Hr < 0) {
    document.getElementById("variation").style.color = "red"
   }else{
    document.getElementById("variation").style.color = "green"
   }
  
   document.getElementById("vwap").innerHTML= panel.vwap24Hr
}
 
}