import React from "react"

const Invest = () => {
    return (
        <div className='bg-lines-2'>
            <section className='mt-16 md:mt-32 mx-auto max-w-7xl w-full flex flex-col md:flex-row justify-center gap-20 p-4 md:p-8 '>
                <div className=' flex flex-col items-center md:items-start justify-start gap-6'>
                    <h6 className='bg-portfo-green text-white px-6 py-2 rounded-full text-sm font-semibold w-fit'>Everything you need to invest</h6>
                    <h1 className='font-semibold text-3xl lg:text-5xl'>
                        Simple, quick & delightful
                        <br />
                        investing for you
                    </h1>
                    <h3 className='text-[#767676] font-medium md:text-xl'>
                        Portfo are portfolios of stocks or ETFs, that
                        <br /> track a theme, strategy or objective
                    </h3>
                    <div className='md:hidden flex justify-center'>
                        <img src='/iphone.png' alt='iphone' />
                    </div>
                    <div className='max-w-[350px] flex flex-col gap-8'>
                        <div className='flex items-center gap-2'>
                            <svg width='7' height='93' viewBox='0 0 7 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0H1C4.31371 0 7 2.68629 7 6V87C7 90.3137 4.31371 93 1 93H0V0Z' fill='#2C3447' />
                            </svg>
                            <span>
                                <h6 className='text-xl font-medium'>Buy multiple stocks in 1 click</h6>
                                <p className='mt-2 text-sm max-w-[300px]'>Place orders for up to 50 stocks in 1 click as a portfo and save time</p>
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg width='7' height='42' viewBox='0 0 7 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0H1C4.31371 0 7 2.68629 7 6V36C7 39.3137 4.31371 42 1 42H0V0Z' fill='#E2F1EC' />
                            </svg>
                            <span>
                                <h6 className='text-xl font-medium text-[#767676]'>Track Portfo anytime, anywhere</h6>
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg width='7' height='42' viewBox='0 0 7 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0H1C4.31371 0 7 2.68629 7 6V36C7 39.3137 4.31371 42 1 42H0V0Z' fill='#E2F1EC' />
                            </svg>
                            <span>
                                <h6 className='text-xl font-medium text-[#767676]'>Invest regularly with SIPs</h6>
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg width='7' height='42' viewBox='0 0 7 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0H1C4.31371 0 7 2.68629 7 6V36C7 39.3137 4.31371 42 1 42H0V0Z' fill='#E2F1EC' />
                            </svg>
                            <span>
                                <h6 className='text-xl font-medium text-[#767676]'>Buy multiple stocks in 1 click</h6>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex justify-center'>
                    <img src='/iphone.png' alt='iphone' />
                </div>
            </section>
        </div>
    )
}

export default Invest
