import axios from 'axios';

axios.defaults.baseURL = "https://localhost:44360"

export async function getAllCompanies() {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk");
   return await axios.get('api/Company')
    .then((response) => {
        console.log(response)
        return response.data
    })
    .catch((e) => {
        console.log(e)
        return 0
    })
}

// export async function getCarByName(name) {
//     debugger
//     name=String(name)
//     return await axios.get('/Car/getByName',name)
//      .then((response) => {
//          console.log(response)
//          return response.data
//      })
//      .catch((e) => {
//          console.log(e)
//          return 0
//      })
//  }
 export async function getCompanyById(id) {
    debugger
    id=String(id)
    return await axios.get('/company/getById',id)
     .then((response) => {
         console.log(response)
         return response.data
     })
     .catch((e) => {
         console.log(e)
         return 0
     })
 }

export async function addCompany(company) {
   return await axios.post('/company/add',company)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}

export async function deleteCompany(companyId) {
    await axios.delete('/company/delete',companyId)
        .then((response) => {
            return response.data.statusCode
        })
        .catch((e) => {
            console.log(e)
        })
}