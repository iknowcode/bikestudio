import React from 'react'
import video from '../videos/bikeclip.mp4'

export const Content = () => {
    return (
        <div> 
            <div className="h-96 bg-black z-20 flex justify-end">
            <video className="md:mr-6" autoPlay muted loop >
            <source src={video} className="md:w-1/2 md:h-auto h-1/3 w-1/3" type="video/mp4"></source>
            </video>
            </div>
            <div className="h-96 bg-gray-800 opacity-90">

            </div>
            <div className="h-96 bg-gray-800">

            </div>
        </div>
    )
}

export default Content;