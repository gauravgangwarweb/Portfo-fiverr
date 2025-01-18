import React from "react"

const Features = () => {
    return (
        <section className='mt-16 md:mt-32 mx-auto max-w-7xl w-full flex flex-col gap-10 lg:flex-row items-center lg:justify-between p-4 md:p-8'>
            <div className='md:col-span-2 flex flex-col items-start justify-start gap-6 w-full'>
                <h6 className='bg-portfo-green text-white px-6 py-2 rounded-full text-sm font-semibold w-fit'>Stock investing made easy</h6>
                <h1 className='font-semibold text-3xl lg:text-5xl'>
                    A Portfo is a basket of
                    <br /> stocks that reflects an
                    <br /> idea
                </h1>
                <h3 className='text-[#767676] font-medium md:text-xl'>
                    Portfo are portfolios of stocks or ETFs, that
                    <br /> track a theme, strategy or objective
                </h3>
                <button className='bg-portfo-green text-white px-6 py-4 rounded-md w-fit'>More Features</button>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-8'>
                    <svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='27' cy='27' r='27' fill='#E2F1EC' />
                        <rect opacity='0.01' x='15' y='15' width='24' height='24' fill='#18A772' />
                        <path d='M24 18H20C18.8954 18 18 18.8954 18 20V24C18 25.1046 18.8954 26 20 26H24C25.1046 26 26 25.1046 26 24V20C26 18.8954 25.1046 18 24 18Z' fill='#18A772' />
                        <path d='M34 18H30C28.8954 18 28 18.8954 28 20V24C28 25.1046 28.8954 26 30 26H34C35.1046 26 36 25.1046 36 24V20C36 18.8954 35.1046 18 34 18Z' fill='#18A772' />
                        <path d='M24 28H20C18.8954 28 18 28.8954 18 30V34C18 35.1046 18.8954 36 20 36H24C25.1046 36 26 35.1046 26 34V30C26 28.8954 25.1046 28 24 28Z' fill='#18A772' />
                        <path d='M34 28H30C28.8954 28 28 28.8954 28 30V34C28 35.1046 28.8954 36 30 36H34C35.1046 36 36 35.1046 36 34V30C36 28.8954 35.1046 28 34 28Z' fill='#18A772' />
                    </svg>
                    <span>
                        <h4 className='font-medium text-xl'>Simple to understand</h4>
                        <p className='mt-2 text-[#767676] max-w-[330px]'>Portfo are modern investing products based on simple ideas you can understand.</p>
                    </span>
                </div>
                <div className='flex gap-8'>
                    <svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='27' cy='27' r='27' fill='#E2F1EC' />
                        <rect opacity='0.01' x='39' y='15' width='24' height='24' transform='rotate(90 39 15)' fill='#1A1A1A' />
                        <path
                            d='M32.56 36C32.4001 36.0006 32.2423 35.9629 32.1 35.89L27 33.22L21.9 35.89C21.5621 36.0676 21.1526 36.0374 20.8444 35.8122C20.5363 35.5869 20.3832 35.2058 20.45 34.83L21.45 29.2L17.33 25.2C17.0681 24.9386 16.9719 24.5539 17.08 24.2C17.1982 23.8374 17.5124 23.5736 17.89 23.52L23.59 22.69L26.1 17.56C26.2671 17.215 26.6167 16.9958 27 16.9958C27.3833 16.9958 27.7329 17.215 27.9 17.56L30.44 22.68L36.14 23.51C36.5176 23.5636 36.8318 23.8274 36.95 24.19C37.0581 24.5439 36.9619 24.9286 36.7 25.19L32.58 29.19L33.58 34.82C33.6529 35.2028 33.4968 35.593 33.18 35.82C32.9989 35.9469 32.7809 36.0102 32.56 36Z'
                            fill='#18A772'
                        />
                    </svg>

                    <span>
                        <h4 className='font-medium text-xl'>Managed by professionals</h4>
                        <p className='mt-2 text-[#767676] max-w-[330px]'>Portfo are created by USA’s leading finance experts & backed by solid research.</p>
                    </span>
                </div>
                <div className='flex gap-8'>
                    <svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='27' cy='27' r='27' fill='#E2F1EC' />
                        <rect opacity='0.01' x='39' y='39' width='24' height='24' transform='rotate(180 39 39)' fill='#18A772' />
                        <path d='M18.24 22.29L26.76 26.92C26.91 27 27.09 27 27.24 26.92L35.76 22.29C35.9189 22.2115 36.0153 22.0453 36.0043 21.8684C35.9934 21.6915 35.8774 21.5384 35.71 21.48L27.19 18C27.0683 17.95 26.9317 17.95 26.81 18L18.29 21.48C18.1226 21.5384 18.0066 21.6915 17.9957 21.8684C17.9847 22.0453 18.081 22.2115 18.24 22.29Z' fill='#18A772' />
                        <path d='M35.71 25.66L33.88 24.88L27.24 28.49C27.09 28.57 26.91 28.57 26.76 28.49L20.12 24.88L18.29 25.66C18.132 25.7429 18.0331 25.9066 18.0331 26.085C18.0331 26.2634 18.132 26.4271 18.29 26.51L26.81 31.41C26.9573 31.5001 27.1427 31.5001 27.29 31.41L35.81 26.51C35.9604 26.4099 36.0419 26.2338 36.0208 26.0543C35.9997 25.8749 35.8795 25.7225 35.71 25.66Z' fill='#18A772' />
                        <path d='M35.71 30.1L34.15 29.42L27.24 33.18C27.09 33.26 26.91 33.26 26.76 33.18L19.85 29.42L18.29 30.1C18.1275 30.1843 18.0256 30.352 18.0256 30.535C18.0256 30.718 18.1275 30.8858 18.29 30.97L26.81 35.97C26.96 36.05 27.14 36.05 27.29 35.97L35.81 30.97C35.965 30.8685 36.0494 30.6883 36.0283 30.5042C36.0071 30.3201 35.884 30.1638 35.71 30.1Z' fill='#18A772' />
                    </svg>

                    <span>
                        <h4 className='font-medium text-xl'>Designed for you</h4>
                        <p className='mt-2 text-[#767676] max-w-[330px]'>Portfo are fully customizable. Edit your Portfo constituents any time or create your own Portfo.</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Features
