import React from "react";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './saveToggle.css'

export interface props {
    view,
    setView
}

const SaveToggle: React.FC<props> = ({ view, setView }: props) => {
    return (
        <div className='SaveToggle'>
            <RadioGroup onChange={setView} horizontal>
                <RadioButton value='search' iconSize={20} checked={view === 'search'}>
                    Search Results
                </RadioButton>
                <RadioButton value='saved' iconSize={20} checked={view === 'saved'}>
                    Saved Results
                </RadioButton>
            </RadioGroup>
        </div>
    );
}

export default SaveToggle;
