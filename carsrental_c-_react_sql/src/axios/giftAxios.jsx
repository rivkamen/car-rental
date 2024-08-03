import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5111"

export async function getAllGifts() {
    return await axios.get('/Gift/getAll')
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
export async function getAllNoGifts() {
    return await axios.get('/Gift/getAllNo')
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
export async function addGift(giftDto) {
    debugger
    return await axios.post('/Gift/add', giftDto)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
export async function deleteGift(giftId) {
    debugger
    try {
        const response = await axios.delete(`/Gift/delete?IdGift=${giftId}`);
        return response;
    } 
    catch (error) {
        console.log(error);
        return error;
    }
}

export async function changeToStatusTrue(gift) {
    debugger
    return await axios.put('/Gift/ChangeStatusT',gift)
        .then((response) => {
            console.log("changeToStatusTrue",response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
export async function getGiftsByDonor(donorId) {
    debugger
    return await axios.get(`/Gift/getByDonor?DonorId=${donorId}`)
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
