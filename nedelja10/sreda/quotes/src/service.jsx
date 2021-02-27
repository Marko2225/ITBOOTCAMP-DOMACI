import axios from 'axios'

const BASE_URL = 'http://localhost:5000'
const ALL_USERS = 'users'
const ALL_QUOTES = 'quotes'

export const getAllUsers = () => {
    return axios.get(`${BASE_URL}/${ALL_USERS}`)
}

export const saveUser = (user) => {
    return axios.post(`${BASE_URL}/${ALL_USERS}`, user)
}

export const getAllQuotes = () => {
    return axios.get(`${BASE_URL}/${ALL_QUOTES}`)
}

export const getQuoteById = (id) => {
    return axios.get(`${BASE_URL}/${ALL_QUOTES}/${id}`)
}

export const saveQuote = (quote) => {
    return axios.post(`${BASE_URL}/${ALL_QUOTES}`, quote)
}


