import React from 'react';
import Loader from '../public/loader.svg';



interface ButtonProps {
    onSubmit: () => void
    text: string
    loading: boolean
    disabled: boolean
}

const Button: React.FC<ButtonProps> = ({ onSubmit, text, loading }) => {
    return (
        <button className="submit-btn w-1/2  flex justify-center items-center p-6 space-x-4 font-sans font-bold text-black rounded-md shadow-lg px-9 bg-[#6ce9b1] shadow-cyan-100 hover:bg-opacity-909 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150" onClick={onSubmit}>
            {!loading ? text : <Loader className="spinner" />}
        </button>
    )
}

export default Button;




