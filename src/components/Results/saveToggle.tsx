import React, { useState, useEffect } from "react";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './saveToggle.css'

export interface props {
    view,
    setView
}

const SaveToggle: React.FC<props> = ({ view, setView }: props) => {
    const [val, setVal] = useState('search');

    const updateView = (input) => {
        setView(input)
    }

    useEffect(() => {
        setVal(view);
    }, [view])

    return (
        <div className='SaveToggle'>
            <RadioGroup currentValue='search' onChange={updateView.bind(this)} horizontal>
                <RadioButton value='search' iconSize={20} checked={val === 'search'}>
                    Search Results
                </RadioButton>
                <RadioButton value='saved' iconSize={20} checked={val === 'saved'}>
                    Saved Cards
                </RadioButton>
            </RadioGroup>
        </div>
    );
}

export default SaveToggle;