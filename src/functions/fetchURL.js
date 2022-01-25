import axios from 'axios'

export const fetchURL = async(url) => {
    let response = {success: false, data: null}

    await axios.get(url)
            .then(response => response = {success: true, data: response.data})
            .catch(error => response = {success: false, data: null})

    return response
}