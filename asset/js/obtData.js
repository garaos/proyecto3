// import axios from './axios'

async function obtData() {
    const coin = document.getElementById("tablaCrip").value
    const inter = document.getElementById("tablaInter").value
    const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=${inter}`

    try {
        let listaCoin = await axios.get(url)
        listaCoin = listaCoin.data
        return listaCoin
    }catch(err){
        return false
    }
}
export default obtData