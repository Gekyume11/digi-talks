import React, { useEffect } from 'react'
import Lenis from "lenis";
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import { AnimatePresence } from 'framer-motion';

const index = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis: Lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // easing function
      });

      function raf(time: number): void {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, [])

  return (
    <>

      <AnimatePresence>
        <Header />
        <Hero />
      </AnimatePresence>

    </>
  )
}

export default index