import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import gsap from 'gsap'
import { pauseImg, playImg, replayImg } from '../utils'
import { useGSAP } from '@gsap/react'

export default function VideoCarousel() {
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    })

    const [loadedData, setLoadedData] = useState([])

    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video

    useGSAP(() => {
        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: 'restart none none none'
            },
            onComplete: () => {
                setVideo((prevVideo) => ({ ...prevVideo, startPlay: true, isPlaying: true }))
            }
        })
    }, [isEnd, videoId])

    //deals specifically with playing of the video
    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) { //checks if the video is not playing
                videoRef.current[videoId].pause() //at the last video (since loadedData.length > 3) and the video isn't playing (!isPlaying), the code will pause the video.
            } else {
                startPlay && videoRef.current[videoId].play()
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData])

    const handleLoadedMetaData = (idx, event) => setLoadedData((prev) => [...prev, event])

    useEffect(() => {
        //where are we in video playing journey?
        const currentProgress = 0
        let span = videoSpanRef.current

        if (span[videoId]) {
            //animate the progress of the video
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {

                },

                onComplete: () => {

                }

            })
        }

    }, [videoId, startPlay]) //call useEffect when videoId or startPlay changes

    const handleProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((prevVideo) => ({ ...prevVideo, isEnd: true, videoId: i + 1 }))
                break
            case 'video-last':
                setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: true }))
                break
            case 'video-reset':
                setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: false, videoId: 0 }))
                break
            case 'play':
                setVideo((prevVideo) => ({ ...prevVideo, isPlaying: !prevVideo.isPlaying }))
                break
            default:
                return video
        }
    }

    return (
        <>
            <div className='flex items-center'>
                {hightlightsSlides.map((list, i) => (
                    <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
                        <div className='video-carousel_container'>
                            <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                                <video id='video' playsInline={true} preload='auto' muted ref={(el) => (videoRef.current[i] = el)}
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo, isPlaying: true
                                        }))
                                    }}
                                    onLoadedMetadata={(event) => handleLoadedMetaData(i, event)}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>
                            {/* because we want to absolutely position text on top of our video */}
                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.textLists.map((text) => (<p className='md:text-2xl text-xl font-medium' key={text}>{text}</p>))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='relative flex-center mt-10'>
                <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
                    {videoRef.current.map((_, i) => (
                        <span key={i} ref={(el) => (videoDivRef.current[i] = el)} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'>
                            <span ref={(el) => (videoSpanRef.current[i] = el)} className='absolute h-full w-full rounded-full'></span>
                        </span>
                    ))}
                </div>

                {/* btn has three functionalities - play, pause, replay */}
                <button className='control-btn'>
                    <img src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
                        onClick={isLastVideo
                            ? () => handleProcess('video-reset')
                            : !isPlaying
                                ? () => handleProcess('play')
                                : () => handleProcess('pause')
                        } />
                </button>
            </div>
        </>
    )
}
