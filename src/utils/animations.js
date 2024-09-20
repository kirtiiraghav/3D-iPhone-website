import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse', //enter leave re-enter leave-back
            start: 'top 85%', //top of trigger is 85% from the top of the viewport it's going to activate
            ...scrollProps,
        }
    })
}