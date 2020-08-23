const axios = require('axios');

const getData = async (apiUrl) => {
    try {
    const response = await axios.get(apiUrl);
    return response.data;
    } catch (err) {
        throw err;
    }
}

module.exports = getData;