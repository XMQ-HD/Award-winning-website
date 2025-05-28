import React, { use } from 'react'
import { useState, useRef } from 'react';

const Hero = () => {
  const [currenIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  const upcomingVideosIndex = (currenIndex % totalVideos) + 1


  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideosIndex);
     
  }
    
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`
    



  return (
    //dvh is used to ensure the hero section takes the full viewport height
    // z-10 is used to ensure the hero section is above other elements
    //rounded-lg is used to give the hero section rounded corners
    // muted is used to ensure the video play without sound
    <div className='relative  h-dvh w-screen overflow-x-hidden'>
        <div id="video-frame" className='relative  h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className='mask-click-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                    <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                        <video ref={nextVideoRef}
                               src={getVideoSrc(upcomingVideosIndex)}
                               loop
                               muted
                               id='current-video'
                               className='size-64 origin-center scale-150 object-cover object-center'
                               onLoadedData = {handleVideoLoad}
                               />
                    </div>

                </div>

                <video
                ref={nextVideoRef}
                src={getVideoSrc(currenIndex)}
                loop
                muted
                id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                onLoadedData={handleVideoLoad}
                />

                <video
                src={getVideoSrc(currenIndex === totalVideos - 1 ? 1 : currenIndex)}
                autoPlay
                loop
                muted
                className='absolute left-0 top-0 size-full object-cover object-center'
                onLoadedData={handleVideoLoad}
                />
            </div>

            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                G<b>a</b>ming
            </h1>

            <div className='absolute left-0 top-0 z-40 size-full'>
                <div className='mt-24 px-5 sm:px-10'>
                    <h1 className='special-font hero-heading text-blue-100'>redefi<b>n</b>e</h1>

                    <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                        Enter the Metagame Layer <br/>
                        Unleash the Play Economy
                    </p>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Hero
