import SimpleStepsCard from "./SimpleStepsCard"

export default function SimpleStepsDone() {
    return (
        <main>
            <div className="container py-[100px] text-[#0B251C]">
                <section className="text-center">
                    <h2 className="font-extrabold text-[50px]">Simple Steps & Done.</h2>
                    <p className="text-[18px]">We have designed a feature based on latest research</p>
                </section>
                <div className="mt-[50px] mb-5"></div>
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
                                <path d="M15 22V20C15 17 17 15 20 15H30C33 15 35 17 35 20V22" stroke="#0B251C" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 28V30C15 33 17 35 20 35H30C33 35 35 33 35 30V28" stroke="#0B251C" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
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
                <div className="mb-[140px] mt-5"></div>
            </div>
        </main>
    )
}