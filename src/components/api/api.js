import axios from "axios"
axios.defaults.baseURL = "https://backendservers.herokuapp.com/api/portfolio/"
export function userdetails(data){
    return axios.post("home/userdetails",data);
}