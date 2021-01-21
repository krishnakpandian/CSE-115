export async function request(city: string, radius_of_results: number, number_of_people: number){
    let results: object[] = [];
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
            results = data['results'];
        
    });
    console.log(results);
    return results;
}