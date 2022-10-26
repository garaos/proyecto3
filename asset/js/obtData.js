// import axios from './axios'

async function obtdata() {
    let coin = document.getElementById("tablaCrip").value
    let inter = document.getElementById("tablaInter").value
    const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=${inter}`

console.log(url);

    try {
        let listaCoin = await axios.get(url)
        listaCoin = listaCoin.data
        console.log("oli");
        return listaCoin
    }catch(err){
        return false
    }
}
export default obtdata