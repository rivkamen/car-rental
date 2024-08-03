import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5111"

export async function getAllWinners() {
    return await axios.get('/Winner/getAll')
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
export async function getWinnerByGift(giftId) {
    return await axios.get(`/Winner/getByGift?giftId=${giftId}`)
        .then((response) => {
            console.log(response)
            return response.data.name
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}

export async function addWinner(winner) {
    debugger
    return await axios.post('/Winner/addWinner', winner)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
