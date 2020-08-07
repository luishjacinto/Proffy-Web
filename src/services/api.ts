import axios from 'axios'

const api = axios.create({
    baseURL: 'https://proffy06082020.herokuapp.com/'
})

export default api