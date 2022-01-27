import axios from 'axios'

export const fetchURL = async(url, callback) => {
    if(url === null) return false;
    let response = {success: false, data: null}

    return await axios.get(url)
            .then(response => response = callback({success: true, data: response.data}))
            .catch(error => response = callback({success: false, data: null}))
}