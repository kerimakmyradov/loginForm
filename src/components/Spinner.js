import React from 'react';

const Spinner = () => {
    return (
        <div className='container'>
            <div className='flex flex-col gap-3 justify-center items-center h-screen text-2xl font-bold'>
                <div>Loading...</div>
                <div>
                    <svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="spinner_98HH" cx="12" cy="12" r="0"/>
                        <circle className="spinner_98HH spinner_roCJ" cx="12" cy="12" r="0"/>
                        <circle className="spinner_98HH spinner_q4Oo" cx="12" cy="12" r="0"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Spinner;