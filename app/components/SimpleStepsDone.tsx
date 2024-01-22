import Image from "next/image"
import SimpleStepsCard from "./SimpleStepsCard"

export default function SimpleStepsDone() {
    return (
        <main>
            <div className="container py-[100px] text-[#0B251C]">
                <section className="text-center">
                    <h2 className="font-extrabold text-[50px]">Simple Steps & Done.</h2>
                    <p className="text-[18px]">We have designed a feature based on latest research</p>
                </section>
                <div className="mt-[50px] mb-5">
                    <Image className="w-auto h-auto object-cover" src="/icons/arrow-1.svg" height={80} width={422} alt="Arrow" />
                </div>
                <div className="flex flex-wrap items-start justify-between">
                    <SimpleStepsCard title="Creating new account and connect with your website or woocommerce.">
                        <div className="flex items-center gap-x-4">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#B7EB38" />
                                <path d="M23.49 15.2301L18.5 17.1001C17.35 17.5301 16.41 18.89 16.41 20.12V27.55C16.41 28.73 17.19 30.28 18.14 30.99L22.44 34.2001C23.85 35.2601 26.17 35.2601 27.58 34.2001L31.88 30.99C32.83 30.28 33.61 28.73 33.61 27.55V20.12C33.61 18.89 32.67 17.5301 31.52 17.1001L26.53 15.2301C25.68 14.9201 24.32 14.9201 23.49 15.2301Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.0001 23.9199C24.9601 23.9199 24.9101 23.9199 24.8701 23.9199C23.9301 23.8899 23.1801 23.1099 23.1801 22.1599C23.1801 21.1899 23.9701 20.3999 24.9401 20.3999C25.9101 20.3999 26.7001 21.1899 26.7001 22.1599C26.6901 23.1199 25.9401 23.8899 25.0001 23.9199Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.01 26.7199C22.05 27.3599 22.05 28.4099 23.01 29.0498C24.1 29.7799 25.89 29.7799 26.98 29.0498C27.94 28.4099 27.94 27.3599 26.98 26.7199C25.9 25.9899 24.11 25.9899 23.01 26.7199Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="font-semibold text-[20px]">Sign Up</h3>
                        </div>
                    </SimpleStepsCard>
                    <SimpleStepsCard title="Read latest report that imported to make decisions for business">
                        <div className="flex items-center gap-x-4">
                            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25.3333" cy="25" r="25" fill="#B7EB38" />
                                <path d="M15 22V20C15 17 17 15 20 15H30C33 15 35 17 35 20V22" stroke="#0B251C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 28V30C15 33 17 35 20 35H30C33 35 35 33 35 30V28" stroke="#0B251C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.7 22.26L25 25.33L30.26 22.28" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25 30.7701V25.3201" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.76 19.2901L20.56 21.0701C19.84 21.4701 19.24 22.4801 19.24 23.3101V26.7001C19.24 27.5301 19.83 28.5401 20.56 28.9401L23.76 30.7201C24.44 31.1001 25.56 31.1001 26.25 30.7201L29.45 28.9401C30.17 28.5401 30.77 27.5301 30.77 26.7001V23.3101C30.77 22.4801 30.18 21.4701 29.45 21.0701L26.25 19.2901C25.56 18.9001 24.44 18.9001 23.76 19.2901Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="font-semibold text-[20px]">Analyze Data</h3>
                        </div>
                    </SimpleStepsCard>
                    <SimpleStepsCard title="You will see the results in matter of weeks that you have grow bigger">
                        <div className="flex items-center gap-x-4">
                            <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25.6666" cy="25" r="25" fill="#B7EB38" />
                                <path d="M30.3666 31.9801H20.9666C20.5466 31.9801 20.0766 31.6501 19.9366 31.2501L15.7966 19.6701C15.2066 18.0101 15.8966 17.5001 17.3166 18.5201L21.2166 21.3101C21.8666 21.7601 22.6066 21.5301 22.8866 20.8001L24.6466 16.1101C25.2066 14.6101 26.1366 14.6101 26.6966 16.1101L28.4566 20.8001C28.7366 21.5301 29.4766 21.7601 30.1166 21.3101L33.7766 18.7001C35.3366 17.5801 36.0866 18.1501 35.4466 19.9601L31.4066 31.2701C31.2566 31.6501 30.7866 31.9801 30.3666 31.9801Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.1666 35H31.1666" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.1666 27H28.1666" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="font-semibold text-[20px]">Become Winner</h3>
                        </div>
                    </SimpleStepsCard>
                </div>
                <div className="mb-[140px] mt-5">
                    <Image className="w-auto h-auto object-cover relative left-1/2" src="/icons/arrow-2.svg" height={80} width={422} alt="Arrow" />
                </div>
                {/* Section 2 */}
                <div className="flex items-center justify-end flex-wrap gap-x-[70px]">
                    <div className="w-[456px] flex justify-center relative font-semibold text-[18px]">
                        <div className="absolute -top-[47px] left-0 inline-flex w-auto h-[94px] gap-x-4 p-5 rounded-[16px] bg-white drop-shadow-xl">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24.9998" cy="25" r="25" fill="#B7EB38" />
                                <path d="M22 35H28C33 35 35 33 35 28V22C35 17 33 15 28 15H22C17 15 15 17 15 22V28C15 33 17 35 22 35Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28.5 31.5C29.6 31.5 30.5 30.6 30.5 29.5V20.5C30.5 19.4 29.6 18.5 28.5 18.5C27.4 18.5 26.5 19.4 26.5 20.5V29.5C26.5 30.6 27.39 31.5 28.5 31.5Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.5 31.5C22.6 31.5 23.5 30.6 23.5 29.5V26C23.5 24.9 22.6 24 21.5 24C20.4 24 19.5 24.9 19.5 26V29.5C19.5 30.6 20.39 31.5 21.5 31.5Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h4>Hyper<br />Growth</h4>
                        </div>
                        <div className="absolute bottom-[50px] right-0 p-5 rounded-[16px] bg-white drop-shadow-xl">
                            <svg className="mx-auto" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24.9998" cy="25" r="25" fill="#B7EB38" />
                                <path d="M29.6998 31.9801H20.2998C19.8798 31.9801 19.4098 31.6501 19.2698 31.2501L15.1298 19.6701C14.5398 18.0101 15.2298 17.5001 16.6498 18.5201L20.5498 21.3101C21.1998 21.7601 21.9398 21.5301 22.2198 20.8001L23.9798 16.1101C24.5398 14.6101 25.4698 14.6101 26.0298 16.1101L27.7898 20.8001C28.0698 21.5301 28.8098 21.7601 29.4498 21.3101L33.1098 18.7001C34.6698 17.5801 35.4198 18.1501 34.7798 19.9601L30.7398 31.2701C30.5898 31.6501 30.1198 31.9801 29.6998 31.9801Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.4998 35H30.4998" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.4998 27H27.4998" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h4 className="mt-4 text-center">Get Bigger<br />
                                Funding</h4>
                        </div>
                        <Image className="w-full max-w-[350px] h-auto object-cover" src="/images/simple-steps-done.png" height={470} width={350} alt="Hyper Growth" />
                    </div>
                    <div className="w-[470px] text-[#0B251C]">
                        <div className="mb-[30px] flex items-center gap-x-1">
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9998 0L17.143 9.67376H27.3146L19.0856 15.6525L22.2288 25.3262L13.9998 19.3475L5.77082 25.3262L8.91402 15.6525L0.685025 9.67376H10.8566L13.9998 0Z" fill="#FF9736" />
                            </svg>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9998 0L17.143 9.67376H27.3146L19.0856 15.6525L22.2288 25.3262L13.9998 19.3475L5.77082 25.3262L8.91402 15.6525L0.685025 9.67376H10.8566L13.9998 0Z" fill="#FF9736" />
                            </svg>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9998 0L17.143 9.67376H27.3146L19.0856 15.6525L22.2288 25.3262L13.9998 19.3475L5.77082 25.3262L8.91402 15.6525L0.685025 9.67376H10.8566L13.9998 0Z" fill="#FF9736" />
                            </svg>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9998 0L17.143 9.67376H27.3146L19.0856 15.6525L22.2288 25.3262L13.9998 19.3475L5.77082 25.3262L8.91402 15.6525L0.685025 9.67376H10.8566L13.9998 0Z" fill="#FF9736" />
                            </svg>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9998 0L17.143 9.67376H27.3146L19.0856 15.6525L22.2288 25.3262L13.9998 19.3475L5.77082 25.3262L8.91402 15.6525L0.685025 9.67376H10.8566L13.9998 0Z" fill="#FF9736" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-[32px]">Pastilaris figured out that our previous system lacking of automation and spend a lot of time doing wrong things.</h3>
                        <p className="font-medium mt-2.5 mb-[30px]">Angga Yin, CEO Digissets Ltd</p>
                        <div className="flex items-center gap-x-3 mb-5">
                            <div className="h-[30px] w-[30px] flex-none">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14.9998" cy="15" r="15" fill="#0B251C" />
                                    <path d="M7.49982 15.5L10.8279 18.7542C12.0703 19.9689 14.0815 19.8775 15.2085 18.5551L22.4998 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="font-bold text-[18px] grow">Business successfully growth</p>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <div className="h-[30px] w-[30px] flex-none">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="14.9998" cy="15" r="15" fill="#0B251C" />
                                    <path d="M7.49982 15.5L10.8279 18.7542C12.0703 19.9689 14.0815 19.8775 15.2085 18.5551L22.4998 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="font-bold text-[18px] grow">Reduce bottleneck in ecosystem</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}