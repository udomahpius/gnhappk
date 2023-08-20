import React from 'react';
import { SpinnerRoundFilled } from "spinners-react";

function LinkedinButton({ text, background, color, shadow, onClick, type, disabled, disable }) {
    return (
        <button className="disabled:bg-gray-400 disabled:text-white linkedin-btn" onClick={onClick} type={type} disabled={disabled}>
            <span>{ text }</span>
        </button>
    )
}

export default LinkedinButton;