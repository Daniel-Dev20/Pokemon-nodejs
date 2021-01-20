

const axios = require('axios');

//Funcion para consumir el servicio de la API
const getInfo = async (nombre) => {

    const name = nombre;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);


    const datos = {
        name:response.data.name,
        base_experiencia: response.data.base_experience,
        orden: response.data.order,
        especie: response.data.species.name,
        peso: response.data.weight


    }

    console.log(datos);

    

}

module.exports = {
    getInfo
}