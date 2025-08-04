import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
  y?: number
  x?: number
  opacity?: number
  scale?: number
  rotation?: number
}

export const useGSAP = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null)

  const fadeInUp = (config: AnimationConfig = {}) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'power2.out',
      stagger = 0.1,
      y = 50,
      opacity = 0
    } = config

    return gsap.fromTo(
      elementRef.current,
      {
        y,
        opacity
      },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        stagger
      }
    )
  }

  const fadeIn = (config: AnimationConfig = {}) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'power2.out',
      stagger = 0.1,
      opacity = 0
    } = config

    return gsap.fromTo(
      elementRef.current,
      {
        opacity
      },
      {
        opacity: 1,
        duration,
        delay,
        ease,
        stagger
      }
    )
  }

  const scaleIn = (config: AnimationConfig = {}) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'back.out(1.7)',
      stagger = 0.1,
      scale = 0
    } = config

    return gsap.fromTo(
      elementRef.current,
      {
        scale
      },
      {
        scale: 1,
        duration,
        delay,
        ease,
        stagger
      }
    )
  }

  const slideInLeft = (config: AnimationConfig = {}) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'power2.out',
      stagger = 0.1,
      x = -100
    } = config

    return gsap.fromTo(
      elementRef.current,
      {
        x
      },
      {
        x: 0,
        duration,
        delay,
        ease,
        stagger
      }
    )
  }

  const slideInRight = (config: AnimationConfig = {}) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'power2.out',
      stagger = 0.1,
      x = 100
    } = config

    return gsap.fromTo(
      elementRef.current,
      {
        x
      },
      {
        x: 0,
        duration,
        delay,
        ease,
        stagger
      }
    )
  }

  const rotateIn = (config: AnimationConfig = {}) => {
    const {
      duration = 1,
      delay = 0,
      ease = 'back.out(1.7)',
      stagger = 0.1,
      rotation = -180
    } = config

    return gsap.fromTo(
      elementRef.current,
      {
        rotation
      },
      {
        rotation: 0,
        duration,
        delay,
        ease,
        stagger
      }
    )
  }

  const scrollTriggerAnimation = (
    animation: () => gsap.core.Timeline | gsap.core.Tween,
    triggerConfig: any = {}
  ) => {
    const defaultConfig = {
      trigger: elementRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }

    return ScrollTrigger.create({
      ...defaultConfig,
      ...triggerConfig,
      animation: animation()
    })
  }

  const timeline = () => gsap.timeline()

  const killAnimations = () => {
    if (elementRef.current) {
      gsap.killTweensOf(elementRef.current)
    }
  }

  useEffect(() => {
    return () => {
      killAnimations()
    }
  }, [])

  return {
    elementRef,
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInLeft,
    slideInRight,
    rotateIn,
    scrollTriggerAnimation,
    timeline,
    killAnimations
  }
} 