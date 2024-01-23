export default function BFEDataTracking() {
    return (
        <div className="bg-white rounded-[16px] p-5 w-[180px] absolute z-10 -top-[20px] right-[270px] drop-shadow-xl">
            <div className="flex items-start gap-x-2.5">
                <div className="h-[50px] w-[50px] flex-none">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="#B7EB38" />
                        <path d="M22.0002 35H28.0002C33.0002 35 35.0002 33 35.0002 28V22C35.0002 17 33.0002 15 28.0002 15H22.0002C17.0002 15 15.0002 17 15.0002 22V28C15.0002 33 17.0002 35 22.0002 35Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.5002 31.5C29.6002 31.5 30.5002 30.6 30.5002 29.5V20.5C30.5002 19.4 29.6002 18.5 28.5002 18.5C27.4002 18.5 26.5002 19.4 26.5002 20.5V29.5C26.5002 30.6 27.3902 31.5 28.5002 31.5Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5002 31.5C22.6002 31.5 23.5002 30.6 23.5002 29.5V26C23.5002 24.9 22.6002 24 21.5002 24C20.4002 24 19.5002 24.9 19.5002 26V29.5C19.5002 30.6 20.3902 31.5 21.5002 31.5Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className="font-semibold text-[18px] text-[#0B251C] grow">Data Tracking</h3>
            </div>
            <div className="flex items-end gap-x-2 mt-5">
                <div className="w-[8px] h-[50px] rounded-[100px] bg-[#EDF3F0]"></div>
                <div className="w-[8px] h-[30px] rounded-[100px] bg-[#EDF3F0]"></div>
                <div className="w-[8px] h-[30px] rounded-[100px] bg-[#EDF3F0]"></div>
                <div className="w-[8px] h-[19px] rounded-[100px] bg-[#EDF3F0]"></div>
                <div className="w-[8px] h-[50px] rounded-[100px] bg-[#B7EB38]"></div>
                <div className="w-[8px] h-[19px] rounded-[100px] bg-[#ACB4B1]"></div>
                <div className="w-[8px] h-[30px] rounded-[100px] bg-[#ACB4B1]"></div>
                <div className="w-[8px] h-[45px] rounded-[100px] bg-[#B7EB38]"></div>
                <div className="w-[8px] h-[30px] rounded-[100px] bg-[#ACB4B1]"></div>
            </div>
        </div>
    )
}