import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Hero() {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSource = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSource)
        return () => {
            window.removeEventListener('resize', handleVideoSource)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: '2'
        })
    }, [])

    useGSAP(() => {
        gsap.to('#cta', {
            opacity: 1,
            y:-40,
            delay: '2'
        })
    }, [])

    return (
        <section className='w-full nav-height bg-black'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id='hero' className='hero-title'>iPhone 15 Pro </p>
                <div className='w-9/12 md:w-10/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} >
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>

            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>
        </section>
    )
}
