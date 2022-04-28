import axios from "axios";

const axios_base = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://toc-fastapi-backend.herokuapp.com/"

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

  getPackageTrue(provider:string,id:string){
      return axios_base.get<any>(`/provider/${provider}/${id}`)
  }

}

export default new DataService();
