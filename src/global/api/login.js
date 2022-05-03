import axios from "axios";
const apiloguin = axios.create({
    baseURL:"https://mergulharte.com.br/api/v1",
    //baseURL:"https://localhost/api/public/api/v1",
  })
  export{
      apiloguin
  }