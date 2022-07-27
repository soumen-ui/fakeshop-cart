/////////   use below code for mock API

// import axios from 'axios';
// //mock API
// let API_URL = 'https://5adc8779b80f490014fb883a.mockapi.io';
//    export default function callApi(endpoint, method = 'GET', body) {
//        return axios({
//            method,
//            url: `${API_URL}/${endpoint}`,
//            data: body
//        }).catch(err => {
//            console.log(err);
//        });
// }

import axios from "axios";
//mock API
// let API_URL = 'https://5adc8779b80f490014fb883a.mockapi.io';
export default function callApi() {
  return axios({
    url: "https://fakestoreapi.com/products/"
  }).catch((err) => {
    console.log(err);
  });
}
