import axios from "axios";

const axios_base = axios.create({
  baseURL: "http://127.0.0.1:8000",

});

class DataService {
  getBrands() {
    return axios_base.get<any>("/brands");
  }

  getBrandById(id:string){
      return axios_base.get<any>(`/brand/${id}`);
  }

  getPhoneById(id:string){
      return axios_base.get<any>(`/model/${id}`);
  }

}

export default new DataService();
