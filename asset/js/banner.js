const banner = document.querySelector("#orig");

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


