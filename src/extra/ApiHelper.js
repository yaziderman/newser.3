import config from "./config"
import Axios from 'axios'
import Helper from './custom'

const ApiHelper = {
    fetchNews : (endpoint, criteria, callback) => {
        let GeneralCriteria = {country:config.country,apiKey:config.apiKey};
        let fullCriteria = {...GeneralCriteria, ...criteria };
        Axios.get(
            Helper.apiURL({
                uri:"https://newsapi.org/v2/"+endpoint,
                query:fullCriteria
            })
        )
        .then( (response) => {
            if(callback){
                callback(response);
            }
        })
        .catch((err) => {
            console.log("Error fetching cities");
        });

    }
}

export default ApiHelper;