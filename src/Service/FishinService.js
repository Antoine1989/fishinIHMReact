
import axios from 'axios';

const CAPTURES_API_URL ="http://localhost:8082/api/v1/spots/{spotId}/captures";
const USERS_API_URL ="http://localhost:8082/api/v1/users";
const SPOTS_API_URL ="http://localhost:8082/api/v1/spots";

class FishinService {
    getCaptures(){
        return axios.get(CAPTURES_API_URL);
    }

    getUsers(){
        return axios.get(USERS_API_URL);
    }

    getSpots(){
        return axios.get(SPOTS_API_URL);
    }
}

export default new FishinService;