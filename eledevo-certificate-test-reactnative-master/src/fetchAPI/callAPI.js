import * as constants from "../constant"
export default function addDataApi(method, path, data) {
    let objFetch = {}
    if(method === constants.HTTP_READ || method === constants.HTTP_DELETE){
        objFetch = {
            method
          }
    }else{
        objFetch = {
            method,
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
          }
    }
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + path
        fetch(url, objFetch)
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
