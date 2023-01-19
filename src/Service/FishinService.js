
import axios from 'axios';

const CAPTURES_API_URL ="http://localhost:8082/api/v1/spots/{spotId}/captures";
const USERS_API_URL ="http://localhost:8082/api/v1/users";
const SPOTS_API_URL ="http://localhost:8082/api/v1/spots";
const CAPTURES_DEL_API_URL="http://localhost:8082/api/v1/captures/";
//const CAPTURES2_API_URL ="http://localhost:8082/api/v1/spots/"+spotId+"/captures";

class FishinService {

   
    getCaptures(){

        return axios.get(CAPTURES_API_URL);

    }

    getCaptures2(spotId){
       
        return axios.get("http://localhost:8082/api/v1/spots/"+spotId+"/captures");

    }

    postCapture(spotId,capturedata){
        return axios.post("http://localhost:8082/api/v1/spots/"+spotId+"/captures",capturedata);
    }

    deleteCapture(captureId){
        return axios.delete(CAPTURES_DEL_API_URL+captureId)
    }
     getDonnees() {
        
        const reponse =  axios.get(CAPTURES_API_URL)
        return reponse.data;
    }

    getUsers(){
        return axios.get(USERS_API_URL);
    }

    getSpots(){
        return axios.get(SPOTS_API_URL);
    }
    addSpot(spotdata){
        return axios.post(SPOTS_API_URL,spotdata);
    }

    deleteSpot(spotId){
        return axios.delete(`http://localhost:8082/api/v1/spots/${spotId}`)
    }
}

export default new FishinService();