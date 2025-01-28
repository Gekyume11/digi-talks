import React from 'react'
import Image from 'next/image'

const Hero = () => {

  const images = [
    {
      path: "apple.png",
      host: "gekyume11.github.io",
      top: '15%',
      left: '50%',
    },
    {
      path: "saturn.png",
      host: "gekyume11.github.io",
      top: '24%',
      left: '5%',
    },
    {
      path: "bulb.png",
      host: "gekyume11.github.io",
      top: '20%',
      left: '20%',
    },
    {
      path: "triangle.png",
      host: "gekyume11.github.io",
      top: '70%',
      left: '40%',
    },
  ];

  const heroText = [
    "A IT Based-Solutions company",
    "Web Development Agency",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed fugit ad eligendi deleniti. Aspernatur aliquam ipsam at, dolorem debitis facere libero temporibus doloremque veniam odio voluptate, perferendis eveniet reprehenderit.",
  ]

  const buttonText = [
    "Get Started",
    "Contact Us",
  ]


  return (
    <>
      <section className={`h-dvh bg-center bg-cover relative before:top-1/2 before:-translate-y-1/2 before:left-[40%] before:-translate-x-1/2 before:absolute before:w-1/2 before:rounded-full before:h-[120%] grid grid-cols-2`}>

        <div className='grid place-items-center'>
          <div className='w-full grid gap-4'>

            <span className='uppercase font-semibold tracking-[3px] text-sm sm:text-base text-red-800'>{heroText[0]}</span>

            <h1 className='text-[clamp(1.875rem,1.3922rem_+_2.7586vw,3.875rem)] font-bold leading-[1.2] text-[rgba(0,0,0,.8)] uppercase'>{heroText[1]}</h1>

            <p className='max-w-[620px] leading-[1.5] text-[rgba(0,0,0,.7)]'>{heroText[2]}</p>

            <div className='flex'>

              <a className='py-2 cursor-pointer rounded-md px-4 block tracking-[1px] transition-all duration-300 hover:tracking-[3px] text-white bg-red-900'>{buttonText[0]}</a>

            </div>

          </div>
        </div>

        <div className='grid place-items-center'>
            <div className=' bg-[rgba(0,0,0,.1)] h-[75%] w-full grid place-items-center border-2 rounded-3xl border-dashed border-black'>
              <p className='text-2xl'>Image</p>
            </div>
        </div>


        {
          images.map(({ path, top, left }, i) => {
            return (
              <Image src={'/assets/' + path} alt={'image'} width={(i !== 1 && i !== 3) ? 60 : 120} height={(i !== 1 && i !== 3) ? 60 : 120}
                key={i}
                className={`absolute -z-[1] ${i === 1 ? 'animate-[10s_spin_linear_infinite]' : i === 2 ? 'animate-[10s_bounce_linear_infinite]' : i === 0 ? 'animate-[6s_sideWave_linear_infinite]' : 'animate-[10s_sideWave_linear_infinite]'}`}
                style={{
                  top: `${top}`,
                  left: `${left}`,
                }}
              />
            )
          })
        }

      </section>
    </>
  )
}

export default Hero