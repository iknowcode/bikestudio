import React from 'react'
import video from '../videos/bikeclip.mp4'

export const Content = () => {
    return (
        <div> 
            <div className="md:h-96 bg-black z-20 flex md:flex-row flex-col justify-between">

               

                <video className="md:mr-6 mt-10 md:mt-0 bwfilter bg-black-2" autoPlay muted loop >
                <source src={video} className="md:w-1/2 md:h-auto h-1/3 w-1/3" type="video/mp4"></source>
                </video>

                <div className="bwfilter md:px-0 px-4 h-72 mr-24 mt-12 md:w-1/3 w-full bg-gray-100 rounded-md " >
                <iframe className="rounded-md p-4" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27038.01097796888!2d76.25511636700946!3d32.10300464914203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b458198590ddf%3A0xad8e3ff3dfe5b1fe!2sKangra%2C%20Himachal%20Pradesh%20176001!5e0!3m2!1sen!2sin!4v1607282551193!5m2!1sen!2sin" width="100%" height="100%" frameborder="0"></iframe>

                </div>
           
            </div>
            <div className="h-96 bg-black-2 opacity-90">

            </div>
            <div className="h-96 bg-black-2 opacity-80">

            </div>
        </div>
    )
}

export default Content;