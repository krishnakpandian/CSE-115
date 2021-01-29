import {results, props} from "../Results/result-body";
/*
interface results {
    cityName: string,
    distance?: number,
    travelTime?: number,
    averageCost?: number
}
  
interface props {
    results: results[],
    statusCode: number,
    message: string,
    lat: number,
    lng: number,
    address: string
}
*/

export async function request(city: string, radius_of_results: number, number_of_people: number){
    let response: props = {
        results: [],
        statusCode: 0,
        message:"",
        lat: 0,
        lng: 0,
        address: ""
    };
    let values = {
        'place': city,
        'radius': radius_of_results,
        'people': number_of_people
    };
    await fetch('/places', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            response.results = data['results'];
            response.statusCode = data['statusCode'];
            response.message = data['message'];
            response.lat = data['lat'];
            response.lat = data['lng'];
            response.address = data['address'];
    });
    console.log(response);
    return response;
}