

function SmallButton({ text, type, onClick, disabled }) {
    return (
        <button className="w-[300px] px-2 py-4 text-white relative bg-purple-700 rounded-lg flex justify-center items-center disabled:bg-[#A6AFC2] disabled:border-[#A6AFC2] border border-purple-700 text-[15px]"
         type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default SmallButton;