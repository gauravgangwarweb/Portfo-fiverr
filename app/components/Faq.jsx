import React from "react"

const Faq = () => {
    return (
        <section className='mt-20 mx-auto max-w-7xl flex flex-col gap-8 md:gap-2 md:flex-row px-8 md:px-4'>
            <img className='w-full' src='/iphone2.png' alt='iphone2' />
            <div>
                <h2 className='mt-24 font-semibold text-3xl md:text-4xl lg:text-6xl lg:!leading-[5rem] tracking-widest '>Frequently Asked Questions</h2>
                <div className='mt-8 flex flex-col gap-2'>
                    <button className='p-4 flex items-center justify-between'>
                        <p className='text-lg font-medium'>What are Portfo?</p>
                        <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4.25 12H20.75' stroke='#B4BBC5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                            <path d='M12.5 3.75V20.25' stroke='#B4BBC5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                        </svg>
                    </button>
                    <button className='p-4 flex flex-col bg-portfo-green text-white rounded-xl'>
                        <div className='flex items-center justify-between w-full'>
                            <p className='text-lg font-medium'>How to invest in Portfo?</p>
                            <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M19.25 5.25L5.75 18.75' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                                <path d='M19.25 18.75L5.75 5.25' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                            </svg>
                        </div>
                        <hr className='w-full h-[1px] opacity-30 my-4' />
                        <p className='text-left'>A trading & demat account with any of our broker partners is all you need. Start exploring Portfo. Once you have chosen a Portfo, click the Buy Portfo button & proceed. You can set filters to find a suitable Portfo or simply use the Find your Portfo tool.</p>
                    </button>
                    <button className='p-4 flex items-center justify-between'>
                        <p className='text-lg font-medium'>Can I buy Portfo as a SIP?</p>
                        <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4.25 12H20.75' stroke='#B4BBC5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                            <path d='M12.5 3.75V20.25' stroke='#B4BBC5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                        </svg>
                    </button>
                    <button className='p-4 flex items-center justify-between'>
                        <p className='text-lg font-medium'>What are Portfo?</p>
                        <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4.25 12H20.75' stroke='#B4BBC5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                            <path d='M12.5 3.75V20.25' stroke='#B4BBC5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Faq
