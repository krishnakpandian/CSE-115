import {results, props} from "../Results/result-body";
import {ModalInfoProps} from "../Modals/Modals";
/* These are the interfaces definitions
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

// request() Sends a request to the backend to get information of surrounding cities
//         paramters: city and filters
//         returns:  a promise


export async function request(city: string, radius_of_results: number, number_of_people: number): Promise<props>{
    const response: props = {
        results: [],
        statusCode: 0,
        message:"",
        lat: 0,
        lng: 0,
        address: "",
        updateSaves: (add_or_delete: boolean, res: results) => {console.log(res);}
    };
    const values = {
        'place': city,
        'radius': radius_of_results,
        'people': number_of_people
    };
    await fetch(process.env.REACT_APP_BACKEND + '/places', {
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
    }).catch(error => {
        console.error("Error getting requests: ", error);
        return response;
    });
    return response;
}

// createRequest() Sends a request to the backend to save a card to firestore
//         paramters: user id, city information
//         returns:  a promise
export async function createRequest(id?: string, city_name?: string, travel_time?: number, distance?: number, average_cost?: number, travelSeconds?:number, search_address?: string): Promise<string>{
    console.log(id);
    let message = "";
    const values = {
        'id': id,
        'cityName': city_name,
        'travelTime': travel_time,
        'distance': distance,
        'averageCost': average_cost,
        'searchAddress': search_address,
        'travelSeconds': travelSeconds
    };
    await fetch(process.env.REACT_APP_BACKEND +  '/add', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            message = data['success'];
        
    }).catch(error => {
        console.error("Error saving card to firestore: ", error);
        return message;
    });
    console.log(message);
    return message;
}

// deleteRequest() Sends a request to the backend to delete the save in firestore
//         paramters: user id, city information
//         returns:  a promise
export async function deleteRequest(id?: string, city_name?: string, travel_time?: number, distance?: number, average_cost?: number, travelSeconds?: number, search_address?: string): Promise<string>{
    console.log(id);
    let message = "";
    const values = {
        'id': id,
        'cityName': city_name,
        'travelTime': travel_time,
        'distance': distance,
        'averageCost': average_cost,
        'searchAddress': search_address,
        'travelSeconds': travelSeconds
    };
    await fetch(process.env.REACT_APP_BACKEND + '/delete', {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            message = data['success'];
        
    }).catch(error => {
        console.error("Error deleting card in firestore: ", error);
        return message;
    });
    console.log(message);
    return message;
}

// getRequest() Sends a request to the backend to get the users list of saved cards
//         paramters: user id
//         returns:  a promise
export async function getRequest(id?: string): Promise<results[]> {
    console.log(id);
    let results: results[] = [];
    const values = {
        'id': id
    };
    await fetch(process.env.REACT_APP_BACKEND + '/cards', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            console.log(data);
            if(data){
                if('cards' in data){
                    results = data['cards'].map(obj => ({ ...obj, saved : true}));
                }else{
                    results = [];
                }  
            }    
    }).catch(error => {
        console.error("Error getting cards from firestore: ", error);
        return results;
    });
    console.log(results);
    return results;
}



// getRequest() Sends a request to the backend to get the users list of saved cards
//         parameters: user id
//         returns:  a promise
export async function getModalView(city: string): Promise<ModalInfoProps> {
    let result: ModalInfoProps = {
        cleanliness: -1,
        airPollution: -1,
        safety: -1,
        healthcare: -1
    };
    const values = {
        'city': city
    };
    await fetch(process.env.REACT_APP_BACKEND + '/views', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            if (data['statusCode'] == 200) {
                result = data.results;
            }
    });
    return result;
}