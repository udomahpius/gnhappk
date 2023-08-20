import React from 'react';
import { SpinnerRoundFilled } from "spinners-react";

function Button({ text, background, color, shadow, onClick, type, disabled, disable }) {
    return (
        <button className="disabled:bg-gray-400 disabled:text-white bg-[#269ACE] text-white relative mb-3 h-[48px] px-4 flex rounded-md justify-center items-center text-[16px]" onClick={onClick} type={type} disabled={disabled}>
            <span className={ disable ? "hidden" : "flex"}>{ text }</span>
            <SpinnerRoundFilled enabled={disable} size={50} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" className="absolute top-0" />
        </button>
    )
}

export default Button;