import axios from 'axios';

axios.defaults.baseURL = "http://localhost:1696"

export async function getAllDonors() {
   return await axios.get('/Donor/getAll')
    .then((response) => {
        console.log(response)
        console.log("response.data",response.data)

        return response.data
    })
    .catch((e) => {
        console.log(e)
        return 0
    })
}

export async function addDonor(donotDto) {
   return await axios.post('/Donor/add',donotDto)
        .then((response) => {
            console.log(response)
            return response.data.statusCode
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}

export async function deleteDonor(donorId) {
    await axios.delete('/Donor/delete',donorId)
        .then((response) => {
            return response.data.statusCode
        })
        .catch((e) => {
            console.log(e)
        })
}

export async function updateDonor(donotDto) {
    debugger
    // const a={"IdDonor":id,"donorDto":donotDto}
    return await axios.put('/Donor/updateDetails', donotDto)
         .then((response) => {
             console.log(response)
             debugger
             return response.data
         })
         .catch((e) => {
             console.log(e)
             return e
         })
 }