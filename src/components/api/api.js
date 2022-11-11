import axios from "axios"
var baseurl = ""
console.log(window.location);

// axios.defaults.baseURL = "http://localhost:3001/api/portfolio/"
axios.defaults.baseURL = "https://backendservers.herokuapp.com/api/portfolio/"
export function userdetails(data){
    return axios.post("home/userdetails",data);
}