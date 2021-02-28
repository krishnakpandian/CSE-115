import React, {useState, useEffect} from 'react';
import './Modals.css'
import { results } from '../Results/result-body';
import { getModalView } from '../Request/request';
import { resourceLimits } from 'worker_threads';
import Modal from '@material-ui/core/Modal';
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GMAPS_API_KEY);


// set response language. Defaults to english.
Geocode.setLanguage("en");

export interface ModalInfoProps {
    cleanliness: number,
    airPollution: number,
    safety: number,
    healthcare: number
}


interface dataBar{
    name: string,
    color: string,
    upper: number,
    lower: number,
    value: number
}

const ImageModal: React.FC<results> = (props: results) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<ModalInfoProps>();
    const [url, setURL] = useState<any>('');
    const handleOpen = async () => {
        setOpen(true);
        console.log(props);
        console.log(data);
        setURL("https://maps.googleapis.com/maps/api/staticmap?center=" + props.lat + "," + props.lng + "&zoom=12&size=400x400&key=AIzaSyDQnX9w8MERcEdazmtldZsJR0PTHfprQSY");
        // Geocode.fromAddress(props.cityName).then(
        //     (response) => {
        //       const { lat, lng } = response.results[0].geometry.location;
        //       console.log(lat, lng);
        //       setURL("https://maps.googleapis.com/maps/api/staticmap?center=" + props.lat + "," + props.lng + "&zoom=12&size=400x400&key=AIzaSyDQnX9w8MERcEdazmtldZsJR0PTHfprQSY");
        //     },
        //     (error) => {
        //       console.error(error);
        //     }
        //   );
        // console.log('https://maps.googleapis.com/maps/api/geocode/json?address=' + props.cityName + '&key=' + `${process.env.REACT_APP_GMAPS_API_KEY}`)
        // await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + props.cityName + '&key=' + `${process.env.REACT_APP_GMAPS_API_KEY}`).then(res => setURL(res))
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(props.cityName);
        
        getModalView(props.cityName).then(res => setData(res[0]))
    },[])

    return (
        <div className="modal-button-container">
            <button onClick={handleOpen}>
                View
            </button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}

            >
                { data != null ? 
                <div className="modal-container ">
                    <div className="modal-city-name">{props.cityName}</div>
                    <div className="modal-content-container">
                    <div><img className="modal-map" src={url}/></div>
                    <div className="dataBars">
                    <div><h1>City Indeces Information</h1></div>
                        <div id="bar" className="mgt-medium"> {data.airPollution ? <ResultBar name={"Air Pollution Index"} color={"darkturquoise"} value={data.airPollution} upper= {2} lower={-2}/>: 'N/A'}</div>
                        <div id="bar" className="mgt-medium"> {data.cleanliness ? <ResultBar name={"Cleanliness Index"} color={"darkturquoise"} value={data.cleanliness} upper= {2} lower={-2} />: 'N/A'}</div>
                        <div id="bar" className="mgt-medium">{data.safety ? <ResultBar name={"Safety Index"} color={"darkturquoise"} value={data.safety} upper= {100} lower={0}/>: 'N/A'}</div>
                        <div id="bar" className="mgt-medium">{data.healthcare ? <ResultBar  name={"Healthcare Index"} color={"darkturquoise"} value={data.healthcare} upper= {100} lower={0}/>: 'N/A'}</div>
                    </div>
                    <div className="mapLegend" id="legend">
                        <h2>Legend</h2>
                        <p>90-100%: Exceptional</p>
                        <p>80-89%: Very Good</p>
                        <p>70-79%: Good</p>
                        <p>60-69%: Decent</p>
                        <p>50-59%: Okay</p>
                        <p>0-49%: Low Quality</p>
                    </div>
                    </div>
                    
                </div>
                
                :
                <div className="modal-container">
                    <div>Sorry No Data Exists</div>
                </div>             
                }
                
            </Modal>
        </div>
    );
  }

export default ImageModal;



const ResultBar:React.FC<dataBar> = ({name, color, upper, lower, value}: dataBar) => {

    const updateNegative = (val,diff) => {
        return val -= diff
    }
    let percentage = 0;
    if (lower < 0) {
        percentage = (updateNegative(value, lower) * 100/(updateNegative(upper, lower)))
    }
    else {
        percentage = (value * 100/(upper - lower))
    }
    percentage = Math.round(percentage * 100) / 100
    const percent = `${percentage}%`;
    if (percentage < 50) {
        color = "red";
    }
    else if (percentage >=50 && percentage <=75) {
        color="yellow";
    }
    else {
        color="green";
    }
    
    function getGreenToRed(percent){
        const r = percent<50 ? 255 : Math.floor(255-(percent*2-100)*255/100);
        const g = percent>50 ? 255 : Math.floor((percent*2)*255/100);
        return 'rgb('+r+','+g+',0)';
    }
    const newColor = getGreenToRed(percentage);
    return(
        <>  
            <div className="progress-bar-container">
                <div className="filled" style = {{width: percent, background: newColor}} />
            </div>
            <div className="barName"id="barName">{name}: {percent}</div>
            
        </>
    );
}