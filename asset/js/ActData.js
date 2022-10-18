let tabla = []
async function actdata() {
    let coin = document.getElementById("tablaCrip").value
    let inter = document.getElementById("tablaInter").value
    const url = `https://api.coincap.io/v2/assets/${coin}/history?interval=${inter}`
    try {
       tabla = await axios.get(url)
       tabla = tabla.data
       return tabla
        
    }catch(err){
        return false
    }
}

export default actdata