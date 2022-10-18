import obtdata from './obtData.js';
// import actdata from './ActData.js';

let pricesArray = [];
let datesArray = [];
let myChart;


document.querySelector("#tablaCrip").addEventListener("click", graficar);
// document.querySelector("#tablaInter").addEventListener("click", graficar)

function graficar() {
    console.log("grafica");
    graphCrip()
}

async function graphCrip() {
    console.log("entra");
    let datos = await obtdata()
    console.log("obtdata");
    console.log("hola"+ datos);
    if (datos) {
        let crip = datos.data;
        let frecuencia = document.getElementById("tablaInter2").value;
        console.log(frecuencia);
        let b = crip.reverse();
        let a = b.slice(0, frecuencia);
        let c = a.reverse();
        console.log(a);
        console.log(c);
        pricesArray = c.map((datos) => datos.priceUsd);
        datesArray = c.map((datos) => datos.date.split('T')[0]);

        console.log(pricesArray);
        console.log(datesArray);

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