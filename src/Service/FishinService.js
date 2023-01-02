
import axios from 'axios';

const CAPTURES_API_URL ="http://localhost:8082/api/v1/spots/{spotId}/captures";
const USERS_API_URL ="http://localhost:8082/api/v1/users";
const SPOTS_API_URL ="http://localhost:8082/api/v1/spots";
//const CAPTURES2_API_URL ="http://localhost:8082/api/v1/spots/"+spotId+"/captures";

class FishinService {

   
    getCaptures(){

        return axios.get(CAPTURES_API_URL);

    }

    getCaptures2(spotId){
       
        return axios.get("http://localhost:8082/api/v1/spots/"+spotId+"/captures");

    }

    postCaptures(spotId){
        return axios.post("http://localhost:8082/api/v1/spots/"+spotId+"/captures");
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
}

export default new FishinService();