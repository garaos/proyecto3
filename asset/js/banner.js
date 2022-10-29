const banner = document.querySelector("#orig");

fetch("https://api.coincap.io/v2/assets/")
  .then((res) => res.json())
  .then((datos) => {
    datos.data
      .sort((a, b) => b.priceUsd - a.priceUsd)
      .slice(0, 20)
      .forEach((moneda) => {
        //	datos.data.forEach( moneda => {

        //console.log(moneda)// esto esta OK muestra todo

        const { id, name, symbol, priceUsd } = moneda;

        orig.innerHTML += `
		<span>..::${symbol} - ${Number(priceUsd).toFixed(2)}::..</span>
		`;
      });
  });
