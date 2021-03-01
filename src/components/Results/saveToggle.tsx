import React, { useState, useEffect } from "react";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './saveToggle.css'

export interface props {
    view,
    setView
}

const SaveToggle: React.FC<props> = ({ view, setView }: props) => {
    // state for display if its on search or saved results
    const [val, setVal] = useState('search');

    // update view state
    const updateView = (input) => {
        setView(input)
    }

    // on view state change, set view
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
                    Saved Results
                </RadioButton>
            </RadioGroup>
        </div>
    );
}

export default SaveToggle;