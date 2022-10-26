// import axios from '/node_modules/axios/dist/axios.min.js'

async function actdata() {
    let coin = document.getElementById("tablaCrip").value
    const url = `https://api.coincap.io/v2/assets/${coin}`
    try {
       let tabla = await axios.get(url)
       tabla = tabla.data
       return tabla

        
    }catch(err){
        return false
    }
}

export default actdata