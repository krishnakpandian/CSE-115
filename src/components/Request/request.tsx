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

export async function request(city: string, radius_of_results: number, number_of_people: number): Promise<props>{
    const response: props = {
        results: [],
        statusCode: 0,
        message:"",
        lat: 0,
        lng: 0,
        address: "",
        setSave: (() => {return [];})
    };
    const values = {
        'place': city,
        'radius': radius_of_results,
        'people': number_of_people
    };
    await fetch('/places', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            response.results = data['results'].map(obj=> ({ ...obj, saved : false}));
            response.statusCode = data['statusCode'];
            response.message = data['message'];
            response.lat = data['lat'];
            response.lng = data['lng'];
            response.address = data['address'];
    });
    console.log(response);
    return response;
}

export async function createRequest(id: string, city_name: string, travel_time: number, distance: number, average_cost: number): Promise<string>{
    let message = "";
    const values = {
        'id': id,
        'cityName': city_name,
        'travelTime': travel_time,
        'distance': distance,
        'averageCost': average_cost
    };
    await fetch('/add', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            message = data['success'];
        
    });
    console.log(message);
    return message;
}

export async function deleteRequest(id: string, city_name: string, travel_time: number, distance: number, average_cost: number): Promise<string>{
    let message = "";
    const values = {
        'id': id,
        'cityName': city_name,
        'travelTime': travel_time,
        'distance': distance,
        'averageCost': average_cost
    };
    await fetch('/delete', {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            message = data['success'];
        
    });
    console.log(message);
    return message;
}

export async function getRequest(id: string): Promise<results[]> {
    let results: results[] = [];
    const values = {
        'id': id
    };
    await fetch('/cards', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            results = data['cards'].map(obj => ({ ...obj, saved : true}));
        
    });
    console.log(results);
    return results;
}