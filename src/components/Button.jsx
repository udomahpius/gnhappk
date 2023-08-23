import React from 'react';
import { SpinnerRoundFilled } from "spinners-react";

function Button({ text, background, color, shadow, onClick, type, disabled, disable }) {
    return (
        <button className="disabled:bg-gray-400 disabled:text-white text-white relative mb-3 h-[40px] px-4 w-full bg-gradient-to-r from-[#31BDFD] to-[#49E7B6] flex rounded-lg justify-center items-center text-[16px]" style={{background: background }} onClick={onClick} type={type} disabled={disabled}>
            <span className={ disable ? "hidden" : "flex"}>{ text }</span>
            <SpinnerRoundFilled enabled={disable} size={50} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" className="absolute top-0" />
        </button>
    )
}

export default Button;