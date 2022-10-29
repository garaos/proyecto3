![alt text](./asset/img/coin_money_icon-icons.com_51091.png)
# Proyecto 3 Dashboard

Este es una pequeña muestra de lo que se puede hacer por medio de Chart.js, el funcionamientos se puede visualizar en [Página](https://garaos.github.io/proyecto3/)

## API

Para la ejecucion se esta consumiento la API "CoinCAP API 2.0", la documentacion se encuentra disponible en [Doc API](https://docs.coincap.io/)

## Datos

La API para el proyecto se utilizaron tres solicitudes

```bash
const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=${inter}`

    try {
        let listaCoin = await axios.get(url)
        listaCoin = listaCoin.data
        return listaCoin
    }catch(err){
        return false
    }
```
```bash
const url = `https://api.coincap.io/v2/assets/${coin}`
    try {
       let tabla = await axios.get(url)
       tabla = tabla.data
       return tabla
        
    }catch(err){
        return false
    }
```
```bash
fetch("https://api.coincap.io/v2/assets/")
  .then((res) => res.json())
  .then((datos) => {
    datos.data
      .sort((a, b) => b.priceUsd - a.priceUsd)
      .slice(0, 10)
      .forEach((moneda) => {
        const {name, priceUsd } = moneda;
        orig.innerHTML += `<span>..:: </span><span class="prbnr">${name}</span><span class="prclr"> $${Number(priceUsd).toFixed(2)}</span><span> ::..</span>`;
      });
  });

```
## Librerias

[Chart.js](https://www.chartjs.org)

[Axios](https://axios-http.com/)

*Se deja trabajando por medio de los CDN tanto para Chart JS, como para Axios*

## Uso

Todos los datos mostrados serán utilizados solo con fines academicos.


## integrantes

- Patricio Hugo Bravo Gallardo
- Luis Gonzalo Araos Vilches

