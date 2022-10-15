(() => {
    function get(url) {
        console.log(url);
        return Promise.resolve(
            fetch(url)
                .then((response) => response.json())
            // .catch(error => console.error('error', error))
        );
    }
    // Axis
    let pricesArray = [];
    let datesArray = [];
    // request Options
    let coin = 'bitcoin';
    let inter = 'd1';

    // Busca donde graficar
    const graph = document.getElementById('cripto');

    // Crea el grafico
    get(`https://api.coincap.io/v2/assets/${coin}/history?interval=${inter}`)
        .then((data) => {
            let crip = data.data;

            // Recorre el arreglo para obtener los datos
            pricesArray = crip.map((data) => data.priceUsd);
            // El split es para separar el formato de la fecha date": "2021-10-15T00:00:00.000Z", corta en T, y quedando solo el primer elemento [0]
            datesArray = crip.map((data) => data.date.split('T')[0]);

            // Construccion del grafico 
            const myChart = new Chart(graph, {
                type: 'line',
                data: {
                    labels: datesArray,
                    datasets: [{
                        label: coin,
                        data: pricesArray,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
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
        });
})();

