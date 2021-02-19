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
                    <div className="modal-content column is-half">
                    <div>Simple React Modal</div>
                        <div>Air Pollution {data ? <ResultBar color={"red"} value={data.airPollution} upper= {2} lower={-2}/>: 'N/A'}</div>
                        <div>Cleanliness {data ? <ResultBar color={"blue"} value={data.cleanliness} upper= {100} lower={0} />: 'N/A'}</div>
                        <div>Safety {data ? <ResultBar color={"yellow"} value={data.safety} upper= {100} lower={0}/>: 'N/A'}</div>
                        <div>Healthcare {data ? <ResultBar color={"green"} value={data.healthcare} upper= {100} lower={0}/>: 'N/A'}</div>
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



const ResultBar:React.FC<dataBar> = ({color, upper, lower, value}: dataBar) => {

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
    
    const percent = `${percentage}%`;
    return(
        <>
            <div className="progress-bar-container">
                <div className="filled" style = {{width: percent, background: color}} />
            </div>
        </>
    );
}