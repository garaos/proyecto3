async function obtdata() {
    let coin = document.getElementById("tablaCrip").value
    let inter = document.getElementById("tablaInter").value
    const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=${inter}`
    console.log(coin);
    console.log(inter);
    console.log(url);

    // const url = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1"

    try {
        let listaCoin = await axios.get(url)
        listaCoin = listaCoin.data
        return listaCoin
    }catch(err){
        return false
    }
}
export default obtdata