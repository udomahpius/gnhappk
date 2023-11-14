import Image from "next/image"
import Link from "next/link"
import React, { useState} from "react";

const RadioButton = ({ plan, amount, onSelect, selected }) => {
    const [activePlan, setActivePlan] = useState("");

    return (
        <div className={`text-black w-56 bg-white rounded-lg shadow-md p-6 cursor-pointer mb-8 hover:bg-green-lightest focus:outline-none focus:shadow-outline-green  ${ selected === plan ? "bg-green-200 shadow-outline-green border border-green-600" : ""}`} tabindex="0" onClick={onSelect}>
            <div className="flex justify-between items-center mb-3">
                <h1 className="uppercase text-base tracking-wide text-blue-darker my-2">{plan}</h1>
                { selected === plan &&
                    <div>
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                    </div>
                }
            </div>

            <div className="mb-1 font-semibold text-blue-darker">
                <span className="text-2xl"></span>
                <span className="text-4xl">{amount}</span>
            </div>
        </div>
    )
}

export default RadioButton;