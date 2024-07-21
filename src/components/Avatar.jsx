import React from 'react'

function Avatar({ firstname, color }) {
    return (
        <div className="w-12 h-12 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer" style={{ backgroundColor: color }}>
            <p className='text-white text-2xl'>{firstname?.charAt(0).toUpperCase()}</p>
        </div>
    )
}

export default Avatar
