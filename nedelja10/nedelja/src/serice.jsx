import axios from 'axios'

const BASE_URL = 'http://localhost:5000'
const PRODUCTS = 'products'

export const getAllProducts = () => {
    return axios.get(`${BASE_URL}/${PRODUCTS}`)
}