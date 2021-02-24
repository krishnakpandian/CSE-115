import React, {useState, useEffect} from 'react';
import './Modals.css'
import Modal from '@material-ui/core/Modal';
import { results } from '../Results/result-body';
import { getModalView } from '../Request/request';
import "../../bulma.css"

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
    const handleOpen = () => {
        setOpen(true);
        console.log(props);
        console.log(data);
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
                    <div className="modal-content">
                       
                    <div className="column is-half" id="data_bars">
                    <div><h1>City Indeces Information</h1></div>
                        <div id="bar" className="mgt-medium"> {data ? <ResultBar name={"Air Pollution Index"} color={"darkturquoise"} value={data.airPollution} upper= {2} lower={-2}/>: 'N/A'}</div>
                        <div id="bar" className="mgt-medium"> {data ? <ResultBar name={"Cleanliness Index"} color={"darkturquoise"} value={data.cleanliness} upper= {2} lower={-2} />: 'N/A'}</div>
                        <div id="bar" className="mgt-medium">{data ? <ResultBar name={"Safety Index"} color={"darkturquoise"} value={data.safety} upper= {100} lower={0}/>: 'N/A'}</div>
                        <div id="bar" className="mgt-medium">{data ? <ResultBar  name={"Healthcare Index"} color={"darkturquoise"} value={data.healthcare} upper= {100} lower={0}/>: 'N/A'}</div>
                    </div>
                    <div className="column is-half" id="legend">
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
    return(
        <>
            <div className="column is-half" style = {{paddingLeft: percent}}>{percent}</div>
            
            <div className="progress-bar-container">
                <div className="filled" style = {{width: percent, background: color}} />
            </div>
            <div className="column is-half"id="barName" style= {{paddingLeft: 0}}>{name}</div>
            
        </>
    );
}