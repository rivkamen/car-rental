import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5111"

export async function getAllSalesByStatusT() {
    return await axios.get('/getAllByStatusT')
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}

export async function GetSaleByCustomer(customerId) {
    debugger
    return await axios.get(`/getByCustomer?CustomerId=${customerId}`)
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
export async function GetSaleByGift(giftId) {
    return await axios.get(`/getByGift?GiftId=${giftId}`)
        .then((response) => {
            debugger
            console.log("GetSaleByGift",response)
            return response.data
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
export async function addSale(SaleDto) {
    debugger
    return await axios.post('/addSale', SaleDto)
        .then((response) => {
            debugger
            console.log(response)
            return response
        })
        .catch((e) => {
            debugger
            console.log(e)
            return 0
        })
}

// export async function deleteSale(saleId) {
//     debugger
//     await axios.delete(`/deleteSale?IdSale=${saleId}`)
//         .then((response) => {
//             console.log(response,"aaaaa");
//             debugger
//             return response
//         })
//         .catch((e) => {
//             console.log(e)
//         })
// }

export async function deleteSale(saleId) {
    debugger
    try {
        const response = await axios.delete(`/deleteSale?IdSale=${saleId}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function changeToStatusTrue(saleId) {
    debugger
    return await axios.put(`/ChangeToStatusT?IdSale=${saleId}`)
        .then((response) => {
            debugger

            console.log(response)
            return response
        })
        .catch((e) => {
            debugger

            console.log(e)
            return 0
        })
}

export async function RandomCustomer(giftId) {
    debugger
    return await axios.get(`/random?giftId=${giftId}`)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}