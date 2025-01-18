import React from "react"

const Hero = () => {
    return (
        <section className='mx-auto max-w-7xl text-center '>
            <h6 className='mt-24 text-[12px] text-portfo-green font-semibold uppercase px-8'>Get simple, smart investment portfolios</h6>
            <h1 className='mt-6 text-4xl md:text-[52px] font-semibold'>Invest in ideas with Portfo</h1>
            <h4 className='mt-6 text-sm px-8'>Get simple, smart investment portfolios curated by experts</h4>
            <form className='mt-6 mb-9 flex flex-col md:flex-row justify-center items-center gap-4 px-8'>
                <input className='py-4 px-7 rounded-md border border-black/20 w-full md:w-fit' type='email' placeholder='Enter your email ID' />
                <input className='bg-portfo-green text-white font-semibold py-4 px-7 rounded-md w-full md:w-fit' type='button' value='Notify Me' />
            </form>
            <div className='flex gap-4 xl:gap-6 justify-center overflow-hidden'>
                <div className='mt-4'>
                    <img className='md:h-[180px] md:w-[180px]' src='/1.png' alt='1' />
                    <p className='bg-portfo-bg font-bold text-[9px] md:text-sm text-left px-2 md:px-4 py-9 rounded-b-md'>
                        Artificial
                        <br />
                        Intelligence
                    </p>
                </div>
                <div className='mt-8'>
                    <img className='md:h-[135px] md:w-[260px]' src='/2.png' alt='2' />
                    <p className='bg-portfo-bg font-bold text-sm md:text-xl text-left px-4 md:px-6 py-9 rounded-b-md'>
                        Space
                        <br />
                        Economy
                    </p>
                </div>
                <div>
                    <img className='md:h-[150px] md:w-[290px]' src='/3.png' alt='3' />
                    <p className='bg-portfo-bg font-bold  md:text-2xl text-left px-6 md:px-8 py-9 rounded-b-md'>Bitcoin</p>
                </div>
                <div className='mt-8'>
                    <img className='md:h-[135px] md:w-[260px]' src='/4.png' alt='4' />
                    <p className='bg-portfo-bg font-bold text-sm md:text-xl text-left px-4 md:px-6 py-9 rounded-b-md'>
                        Virtual
                        <br />
                        Reality
                    </p>
                </div>
                <div className='mt-4'>
                    <img className='md:h-[180px] md:w-[180px]' src='/5.png' alt='5' />
                    <p className='bg-portfo-bg font-bold text-[9px] md:text-sm text-left px-2 md:px-4 py-9 rounded-b-md'>
                        Electric
                        <br />
                        Vehicles
                    </p>
                </div>
            </div>
            <div className='-mt-6 md:-mt-8 flex gap-2 lg:gap-4 xl:gap-6 justify-center overflow-hidden'>
                <div className='mt-12'>
                    <img className='md:h-[180px] md:w-[180px]' src='/6.png' alt='6' />
                    <p className='bg-portfo-bg font-bold text-[9px] md:text-sm text-left px-2 md:px-4 py-9 rounded-b-md'>
                        Medical
                        <br />
                        technology
                    </p>
                </div>
                <div className='mt-8'>
                    <img className='md:h-[170px] md:w-[260px]' src='/7.png' alt='7' />
                    <p className='bg-portfo-bg font-bold text-sm md:text-xl text-left px-4 md:px-6 py-9 rounded-b-md'>
                        Renewable
                        <br />
                        Energy
                    </p>
                </div>
                <div>
                    <img className='md:h-[230px] md:w-[290px]' src='/8.png' alt='8' />
                    <p className='bg-portfo-bg font-bold md:text-2xl text-left px-3 md:px-8 py-16 rounded-b-md'>
                        Social
                        <br />
                        Networking
                    </p>
                </div>
                <div className='mt-8'>
                    <img className='md:h-[130px] md:w-[260px]' src='/9.png' alt='9' />
                    <p className='bg-portfo-bg font-bold text-sm md:text-xl text-left px-4 md:px-6 py-9 rounded-b-md'>
                        Cyber
                        <br />
                        Security
                    </p>
                </div>
                <div className='mt-12'>
                    <img className='md:h-[180px] md:w-[180px]' src='/10.png' alt='10' />
                    <p className='bg-portfo-bg font-bold text-[9px] md:text-sm text-left px-2 md:px-4 py-9 rounded-b-md'>
                        Internet of
                        <br />
                        things
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
