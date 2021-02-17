import React from "react";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './saveToggle.css'

export interface props {
    view,
    setView
}

const SaveToggle: React.FC<props> = ({ view, setView }: props) => {
    const updateView = (input) => {
        setView(input)
    }

    return (
        <div className='SaveToggle'>
            <RadioGroup onChange={updateView.bind(this)} horizontal>
                <RadioButton value="search">
                    Search Results
                </RadioButton>
                <RadioButton value="saved">
                    Saved Cards
                </RadioButton>
            </RadioGroup>
        </div>
    );
}

export default SaveToggle;