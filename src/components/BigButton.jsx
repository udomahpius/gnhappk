import React from 'react';
import spinner from "@/assets/spinner.gif"
import Image from 'next/image';

function BigButton({ text, background, color, shadow, onClick, type, disabled, disable }) {
    return (
        <button className="disabled:bg-gray-400 disabled:text-white text-white relative h-[55px] px-4 w-full bg-gradient-to-r from-[#31BDFD] to-[#49E7B6] flex rounded-lg justify-center items-center text-[16px]" style={{background: background }} onClick={onClick} type={type} disabled={disabled}>
            <span className={ disable ? "hidden" : "flex"}>{ text }</span>
            <Image src={spinner} className={`${disable ? "flex" : "hidden"}`} height="20" width="40" alt="" />
        </button>
    )
}

export default BigButton;