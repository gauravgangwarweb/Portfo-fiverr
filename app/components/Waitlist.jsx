import React from "react"

const Waitlist = () => {
    return (
        <section className='mx-auto max-w-7xl mt-20 px-8'>
            <h2 className='text-3xl md:text-[52px] font-semibold text-center'>Can’t decide which stocks to pick?</h2>
            <div className='flex flex-col justify-center items-center gap-8'>
                <select className='text-xs md:text-base px-4 py-2 rounded-md border w-full max-w-[625px] my-8'>
                    <option value='Choose from variety of portfos by expoerts'>Choose from variety of portfos by expoerts</option>
                </select>
                <img className='mt-8' src='/avatars.svg' alt='avatars' />
                <p className='text-xl font-semibold'>Join Hamza, Ahmed and 2500 others on the waitlist</p>
                <h2 className='text-3xl md:text-[52px] font-semibold text-center'>Join Waiting List</h2>
                <form className='mt-6 mb-9 flex flex-col md:flex-row justify-center items-center gap-4 px-8'>
                    <span className='relative flex items-center'>
                        <input className='py-3 px-7 rounded-md border border-black/20 w-full md:w-fit' type='email' placeholder='Enter your email' />
                        <svg className='absolute  right-4' width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect opacity='0.01' width='20' height='20' fill='#2C3447' />
                            <path fill-rule='evenodd' clip-rule='evenodd' d='M15.8333 3.33337H4.16667C2.78596 3.33337 1.66667 4.45266 1.66667 5.83337V14.1667C1.66667 15.5474 2.78596 16.6667 4.16667 16.6667H15.8333C17.214 16.6667 18.3333 15.5474 18.3333 14.1667V5.83337C18.3333 4.45266 17.214 3.33337 15.8333 3.33337ZM15.8333 5.00004L10.4167 8.72504C10.1588 8.8739 9.84117 8.8739 9.58333 8.72504L4.16667 5.00004H15.8333Z' fill='#2C3447' />
                        </svg>
                    </span>
                    <input className='bg-black text-white font-semibold py-3 px-7 rounded-full w-full md:w-fit' type='button' value='Subscribe' />
                </form>
            </div>
        </section>
    )
}

export default Waitlist
