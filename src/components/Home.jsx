import React from 'react'
import HomeMainContaner from './HomeMainContaner'
import HomeFooterContainer from './HomeFooterContainer'

const Home = () => {
  return (
    <>
      <header>
        <div className='h-screen flex overflow-auto hide-scrollbar relative'>
          {/* Image 1 */}
          <div className='relative w-screen flex-shrink-0'>
            <img
              className='h-full w-screen object-cover'
              src="/CargoPortSunset.jpg"
              alt="Sunset"
            />
            <div className='absolute inset-0 flex flex-col justify-center bg-black/30'>
              <h1 className='text-white text-5xl font-semibold uppercase p-5 leading-tight'>Expand your global<br /> logistics network</h1>
              <p className='text-gray-300 px-5 text-lg '>
                Connect with reliable freight forwarding partners and gain
                access to new markets, <br /> shipping lanes, and international opportunities.
              </p>
              <button className='border-2 text-white border-white hover:bg-white hover:text-black text-2xl px-10 py-3 m-6 w-max uppercase '>
                Learn More
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div className='relative w-screen flex-shrink-0'>

            <img
              className='h-full w-screen object-cover'
              src="https://i.pinimg.com/736x/52/bc/c1/52bcc11edc13082ca64e2672dd04aced.jpg"
              alt="Morning"
            />
            <div className='absolute inset-0 flex flex-col justify-center bg-black/30 p-7'>
              <h1 className='text-white text-5xl font-semibold uppercase p-4 leading-tight'> CONNECT YOUR <br /> <span className=''>LOGISTICS BUSINESS</span>  <br /> <span>TO THE WORLD</span></h1>
              <p className='text-gray-300 p-4 text-lg '>
                Collaborate with a global community of freight forwarders, create strong <br /> partnerships, and unlock new opportunities across international supply chains.
              </p>
              <button className='border-2 text-white border-white hover:bg-white hover:text-black text-2xl px-10 py-3 m-6 w-max  uppercase'>
                Explore Membership
              </button>
            </div>
          </div>

          {/* Image 3 */}
          <div className='relative w-screen flex-shrink-0'>
            <img
              className='h-full w-screen object-cover'
              src="https://i.pinimg.com/1200x/d8/4f/b9/d84fb9a7305b5221ac81c191791f2c8b.jpg"
              alt="Night"
            />
            <div className='absolute inset-0 flex flex-col justify-center bg-black/30 p-7'>
              <h1 className='text-white text-5xl font-semibold uppercase p-4 leading-tight'>FINANCIAL SECURITY FOR <br /><span>GLOBAL LOGISTICS</span></h1>
              <p className='text-gray-300 p-4 text-lg '>
                Protect your transactions and streamline operations by partnering with verified <br />logistics professionals committed to reliability, transparency, <br /> and industry standards
              </p>
              <button className='border-2 text-white border-white hover:bg-white hover:text-black text-2xl px-10 py-3 m-6 w-max  uppercase'>
                Join Effen
              </button>
            </div>
          </div>
          {/* Image 4 */}
          <div className='relative w-screen flex-shrink-0'>
            <img
              className='h-full w-screen object-cover'
              src="https://i.pinimg.com/1200x/4d/f2/e8/4df2e8cfb1120e843c26e168b24ed16e.jpg"
              alt="Night"
            />
            <div className='absolute inset-0 flex flex-col justify-center bg-black/30 p-7'>
              <h1 className='text-white text-5xl font-semibold uppercase p-4 leading-tight'>FINANCIAL SECURITY FOR <br /><span>GLOBAL LOGISTICS</span></h1>
              <p className='text-gray-300 pl-4 text-lg '>
                Connecting independent freight forwarders and logistics companies to <br />
                strengthen global supply chains and unlock new opportunities worldwide. <br />
                EFFN is a professional network empowering members to maintain their identity <br />
                while accessing a coordinated network of trusted partners to grow and <br />
                compete globally.
              </p>
              <button className='border-2 text-white border-white hover:bg-white hover:text-black text-2xl px-10 py-3 m-6 w-max  uppercase'>
                Explore Membership
              </button>
            </div>
          </div>

        </div>
      </header>

      <main className='p-4'>
        <div>
          <HomeMainContaner />
        </div>
      </main>

      <footer className='p-4'>
        <HomeFooterContainer />
      </footer>
    </>
  )
}

export default Home












// ===================================================================

/*
import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  "/CargoPortSunset.jpg",
  "https://i.pinimg.com/736x/52/bc/c1/52bcc11edc13082ca64e2672dd04aced.jpg",
  "https://i.pinimg.com/1200x/d8/4f/b9/d84fb9a7305b5221ac81c191791f2c8b.jpg",
]

const Home = () => {
  const [current, setCurrent] = useState(1) // start from first real slide
  const sliderRef = useRef(null)

  // Prepare slides with clones for infinite loop
  const slides = [images[images.length - 1], ...images, images[0]] // clone last at start, first at end

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 2000)
    return () => clearInterval(interval)
  }, [current])

  const nextSlide = () => {
    setCurrent(prev => prev + 1)
  }

  const prevSlide = () => {
    setCurrent(prev => prev - 1)
  }

  // Handle smooth infinite transition
  useEffect(() => {
    if (!sliderRef.current) return
    sliderRef.current.style.transition = 'transform 0.5s ease-in-out'
    sliderRef.current.style.transform = `translateX(-${current * 100}vw)`

    // If we reached cloned slides, jump instantly without transition
    const handleTransitionEnd = () => {
      if (current === slides.length - 1) {
        sliderRef.current.style.transition = 'none'
        setCurrent(1)
        sliderRef.current.style.transform = `translateX(-100vw)`
      }
      if (current === 0) {
        sliderRef.current.style.transition = 'none'
        setCurrent(slides.length - 2)
        sliderRef.current.style.transform = `translateX(-${(slides.length - 2) * 100}vw)`
      }
    }

    sliderRef.current.addEventListener('transitionend', handleTransitionEnd)
    return () => sliderRef.current.removeEventListener('transitionend', handleTransitionEnd)
  }, [current])

  return (
    <header className='relative h-screen w-screen overflow-hidden'>
      //  Slides 
<div ref={sliderRef} className='flex'>
  {slides.map((img, index) => (
    <img key={index} className='w-screen h-screen object-cover flex-shrink-0' src={img} alt={`Slide ${index}`} />
  ))}
</div>

//  Arrows 
      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-4 -translate-y-1/2  bg-opacity-50  text-gray-400  py-2  px-3 border-2 border-gray-400'
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-4 -translate-y-1/2 bg-opacity-50 text-gray-400  py-2  px-3 border-2 border-gray-400'
      >
        <ChevronRight size={24} />
      </button>

// Dots 
<div className='absolute bottom-6 w-full flex justify-center gap-2'>
  {images.map((_, index) => (
    <span
      key={index}
      onClick={() => setCurrent(index + 1)}
      className={`w-2 h-2 rounded-full cursor-pointer transition-all ${index + 1 === current ? 'bg-white scale-125' : 'bg-gray-400'
        }`}
    ></span>
  ))}
</div>
    </header >
  )
}

export default Home

  */ 