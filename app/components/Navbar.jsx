import React from "react"

const Navbar = () => {
    return (
        <header className='mx-auto'>
            <nav className='flex justify-between items-center max-w-7xl mx-auto my-7 px-8'>
                <svg width='163' height='46' viewBox='0 0 163 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M18.8855 9.90614C21.1222 8.61482 23.8778 8.61482 26.1145 9.90614L32.0324 13.3229C34.2691 14.6142 35.6469 17.0007 35.6469 19.5833V26.4168C35.6469 28.9994 34.2691 31.3859 32.0324 32.6772L26.1145 36.094C23.8778 37.3853 21.1222 37.3853 18.8855 36.094L12.9676 32.6772C10.7309 31.3859 9.35311 28.9994 9.35311 26.4168V19.5833C9.35311 17.0007 10.7309 14.6142 12.9676 13.3229L18.8855 9.90614Z' fill='url(#paint0_linear_2_1104)' />
                    <path d='M18.8855 9.90614C21.1222 8.61482 23.8778 8.61482 26.1145 9.90614L32.0324 13.3229C34.2691 14.6142 35.6469 17.0007 35.6469 19.5833V26.4168C35.6469 28.9994 34.2691 31.3859 32.0324 32.6772L26.1145 36.094C23.8778 37.3853 21.1222 37.3853 18.8855 36.094L12.9676 32.6772C10.7309 31.3859 9.35311 28.9994 9.35311 26.4168V19.5833C9.35311 17.0007 10.7309 14.6142 12.9676 13.3229L18.8855 9.90614Z' fill='#117851' />
                    <path d='M12.8313 18.5594C12.8313 18.2325 13.0078 17.9311 13.293 17.7712L21.1544 13.3629C21.7567 13.0252 22.5 13.4605 22.5 14.1511V23.8261C22.5 24.153 22.3234 24.4544 22.0383 24.6143L14.1769 29.0225C13.5745 29.3603 12.8313 28.925 12.8313 28.2344V18.5594Z' fill='white' fill-opacity='0.8' />
                    <path d='M17.6205 20.3667C17.6205 20.0399 17.797 19.7385 18.0821 19.5786L25.9436 15.1703C26.5459 14.8325 27.2892 15.2679 27.2892 15.9585V25.6335C27.2892 25.9604 27.1126 26.2618 26.8275 26.4216L18.9661 30.8299C18.3637 31.1677 17.6205 30.7323 17.6205 30.0418V20.3667Z' fill='white' fill-opacity='0.8' />
                    <path d='M22.5 22.1739C22.5 21.847 22.6765 21.5456 22.9617 21.3857L30.8231 16.9774C31.4254 16.6397 32.1687 17.075 32.1687 17.7656V27.4406C32.1687 27.7675 31.9921 28.0689 31.707 28.2288L23.8456 32.637C23.2432 32.9748 22.5 32.5395 22.5 31.8489V22.1739Z' fill='white' fill-opacity='0.8' />
                    <path d='M9.39758 18.8304C9.39758 16.3568 12.0491 14.7882 14.2171 15.9794L24.3911 21.5695C25.2868 22.0616 25.8434 23.0025 25.8434 24.0245V32.5495C25.8434 35.8719 22.2611 37.9606 19.3697 36.3243L13.4787 32.9904C10.9567 31.5631 9.39758 28.8892 9.39758 25.9913V18.8304Z' fill='#18A772' fill-opacity='0.8' />
                    <path
                        d='M62.092 22.188H64.324C65.956 22.188 66.652 21.372 66.652 20.076C66.652 18.78 65.956 17.964 64.324 17.964H62.092V22.188ZM70.828 20.076C70.828 22.86 68.932 25.452 64.636 25.452H62.092V31.5H57.988V14.652H64.636C68.764 14.652 70.828 16.98 70.828 20.076ZM89.5486 23.028C89.5486 28.092 85.7086 31.668 80.9326 31.668C76.1566 31.668 72.2686 28.092 72.2686 23.028C72.2686 17.964 76.1566 14.412 80.9326 14.412C85.7326 14.412 89.5486 17.964 89.5486 23.028ZM76.4686 23.028C76.4686 25.98 78.1966 27.924 80.9326 27.924C83.6206 27.924 85.3726 25.98 85.3726 23.028C85.3726 20.028 83.6206 18.132 80.9326 18.132C78.1966 18.132 76.4686 20.028 76.4686 23.028ZM100.736 20.124C100.736 18.876 100.016 18.06 98.4798 18.06H95.9358V22.236H98.4798C100.016 22.236 100.736 21.444 100.736 20.124ZM91.8318 14.652H98.7198C102.848 14.652 104.912 17.028 104.912 19.956C104.912 22.068 103.76 24.06 101.168 24.828L105.056 31.5H100.424L96.9198 25.14H95.9358V31.5H91.8318V14.652ZM106.576 17.94V14.652H119.608V17.94H115.144V31.5H111.04V17.94H106.576ZM121.668 31.5V14.652H132.636V17.94H125.772V21.492H130.908V24.684H125.772V31.5H121.668ZM151.377 23.028C151.377 28.092 147.537 31.668 142.761 31.668C137.985 31.668 134.097 28.092 134.097 23.028C134.097 17.964 137.985 14.412 142.761 14.412C147.561 14.412 151.377 17.964 151.377 23.028ZM138.297 23.028C138.297 25.98 140.025 27.924 142.761 27.924C145.449 27.924 147.201 25.98 147.201 23.028C147.201 20.028 145.449 18.132 142.761 18.132C140.025 18.132 138.297 20.028 138.297 23.028Z'
                        fill='#117851'
                    />
                    <defs>
                        <linearGradient id='paint0_linear_2_1104' x1='7.31927' y1='12.3374' x2='36.6416' y2='36.0573' gradientUnits='userSpaceOnUse'>
                            <stop stop-color='#12E400' />
                            <stop offset='1' stop-color='#155010' />
                        </linearGradient>
                    </defs>
                </svg>
                <ul className='hidden md:flex items-center gap-7 font-semibold'>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Features</button>
                    </li>
                    <li>
                        <button>Pricing</button>
                    </li>
                    <li>
                        <button>About Us</button>
                    </li>
                </ul>
                <div className='flex items-center gap-9'>
                    <button className='hidden md:block px-6 py-2 font-semibold'>Signup</button>
                    <button className='font-semibold bg-portfo-green text-white px-9 py-2 rounded-md'>Log In</button>
                    <button className='md:hidden'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M3 7H21' stroke='#292D32' stroke-width='1.5' stroke-linecap='round' />
                            <path d='M3 12H21' stroke='#292D32' stroke-width='1.5' stroke-linecap='round' />
                            <path d='M3 17H21' stroke='#292D32' stroke-width='1.5' stroke-linecap='round' />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
