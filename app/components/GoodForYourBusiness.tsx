import Image from "next/image"
import Button from "./Button"
export default function GoodForYourBusiness() {
    return (
        <main>
            <div className="container py-[100px]">
                <section className="text-center">
                    <h2 className="font-extrabold text-[50px]">Good For Your Business</h2>
                    <p className="text-[18px]">We have designed a feature based on latest research</p>
                </section>
                {/* MENU */}
                <div className="flex items-center justify-between border-b border-[#ABB4B1] font-medium text-[#0B251C] text-[20px] my-[50px]">
                    <div className="flex items-center gap-x-4 pb-[30px] relative">
                        <div className="h-[50px] w-[50px] flex-none">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#B7EB38" />
                                <path d="M29.7 31.98H20.3C19.88 31.98 19.41 31.65 19.27 31.25L15.13 19.67C14.54 18.01 15.23 17.5 16.65 18.52L20.55 21.31C21.2 21.76 21.94 21.53 22.22 20.8L23.98 16.11C24.54 14.61 25.47 14.61 26.03 16.11L27.79 20.8C28.07 21.53 28.81 21.76 29.45 21.31L33.11 18.7C34.67 17.58 35.42 18.15 34.78 19.96L30.74 31.27C30.59 31.65 30.12 31.98 29.7 31.98Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.5 35H30.5" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.5 27H27.5" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="font-semibold grow">Automations</h3>
                        <span className="block absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#0B251C]"></span>
                    </div>
                    <div className="flex items-center gap-x-4 pb-[30px] relative">
                        <div className="h-[50px] w-[50px] flex-none">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#ABB4B1" />
                                <path d="M34.66 23.44L33.68 27.62C32.84 31.23 31.18 32.69 28.06 32.39C27.56 32.35 27.02 32.26 26.44 32.12L24.76 31.72C20.59 30.73 19.3 28.67 20.28 24.49L21.26 20.3C21.46 19.45 21.7 18.71 22 18.1C23.17 15.68 25.16 15.03 28.5 15.82L30.17 16.21C34.36 17.19 35.64 19.26 34.66 23.44Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.06 32.39C27.44 32.81 26.66 33.16 25.71 33.47L24.13 33.99C20.16 35.27 18.07 34.2 16.78 30.23L15.5 26.28C14.22 22.31 15.28 20.21 19.25 18.93L20.83 18.41C21.24 18.28 21.63 18.17 22 18.1C21.7 18.71 21.46 19.45 21.26 20.3L20.28 24.49C19.3 28.67 20.59 30.73 24.76 31.72L26.44 32.12C27.02 32.26 27.56 32.35 28.06 32.39Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.64 21.53L30.49 22.76" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.66 25.4L27.56 26.14" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h3>Real-Time</h3>
                    </div>
                    <div className="flex items-center gap-x-4 pb-[30px] relative">
                        <div className="h-[50px] w-[50px] flex-none">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#ABB4B1" />
                                <path d="M33 25.2V26.9C33 30.05 31.2 31.4 28.5 31.4H19.5C16.8 31.4 15 30.05 15 26.9V21.5C15 18.35 16.8 17 19.5 17H22.2C22.07 17.38 22 17.8 22 18.25V22.15C22 23.12 22.32 23.94 22.89 24.51C23.46 25.08 24.28 25.4 25.25 25.4V26.79C25.25 27.3 25.83 27.61 26.26 27.33L29.15 25.4H31.75C32.2 25.4 32.62 25.33 33 25.2Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M35 18.25V22.15C35 23.64 34.24 24.76 33 25.2C32.62 25.33 32.2 25.4 31.75 25.4H29.15L26.26 27.33C25.83 27.61 25.25 27.3 25.25 26.79V25.4C24.28 25.4 23.46 25.08 22.89 24.51C22.32 23.94 22 23.12 22 22.15V18.25C22 17.8 22.07 17.38 22.2 17C22.64 15.76 23.76 15 25.25 15H31.75C33.7 15 35 16.3 35 18.25Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.4 35H27.6" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 31.4V35" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M31.4955 20.25H31.5045" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28.6957 20.25H28.7047" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.8954 20.25H25.9044" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3>Lifetime Support</h3>
                    </div>
                    <div className="flex items-center gap-x-4 pb-[30px] relative">
                        <div className="h-[50px] w-[50px] flex-none">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#ABB4B1" />
                                <path d="M19 23V21C19 17.69 20 15 25 15C30 15 31 17.69 31 21V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25 31.5C26.3807 31.5 27.5 30.3807 27.5 29C27.5 27.6193 26.3807 26.5 25 26.5C23.6193 26.5 22.5 27.6193 22.5 29C22.5 30.3807 23.6193 31.5 25 31.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M30 35H20C16 35 15 34 15 30V28C15 24 16 23 20 23H30C34 23 35 24 35 28V30C35 34 34 35 30 35Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3>High Protection</h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <article className="flex items-center gap-x-[50px] text-[#0B251C]">
                        <div>
                            <Image src="/images/gfb-image.png" height={470} width={450} alt="Good For Your Business" />
                        </div>
                        <div className="w-[470px]">
                            <h3 className="font-bold text-[32px] mb-2.5">We’re Helping Big
                                Global Companies Grow</h3>
                            <p className="font-medium text-[18px]">Track your customers behavior to make a good decision that helps the customer use our services better way.</p>
                            <div className="mt-[30px]">
                                <div className="flex items-center gap-x-3 mb-5">
                                    <div className="h-[30px] w-[30px] flex-none">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15.5" r="15" fill="#B7EB38" />
                                            <path d="M7.5 16L10.8281 19.2542C12.0705 20.4689 14.0817 20.3775 15.2087 19.0551L22.5 10.5" stroke="#0B251C" stroke-width="3" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-[18px] grow">Auto running when reaches certain number</p>
                                </div>
                                <div className="flex items-center gap-x-3 mb-5">
                                    <div className="h-[30px] w-[30px] flex-none">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15.5" r="15" fill="#B7EB38" />
                                            <path d="M7.5 16L10.8281 19.2542C12.0705 20.4689 14.0817 20.3775 15.2087 19.0551L22.5 10.5" stroke="#0B251C" stroke-width="3" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-[18px] grow">Sending message to server for repeatation</p>
                                </div>
                                <div className="flex items-center gap-x-3 mb-[30px]">
                                    <div className="h-[30px] w-[30px] flex-none">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15.5" r="15" fill="#B7EB38" />
                                            <path d="M7.5 16L10.8281 19.2542C12.0705 20.4689 14.0817 20.3775 15.2087 19.0551L22.5 10.5" stroke="#0B251C" stroke-width="3" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-[18px] grow">Reporting and extracting the data</p>
                                </div>
                                <Button title="Learn More" background="bg-transparent border border-[#0B251C] h-[43px]" color="text-[#0B251C]" />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}