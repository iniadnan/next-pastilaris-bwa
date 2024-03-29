"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
export default function HeaderRight() {
    const [isLoaded, isSetLoaded] = useState<boolean>(false)

    useEffect(() => {
        isSetLoaded(true)
    }, [])

    return (
        <div className="w-1/2 flex justify-end">
            <div className="w-full max-w-[447px] h-[506px] relative bg-[#B7EB38] rounded-[26px] text-[#0B251C]">
                <div className="w-[316px] absolute z-10 bottom-[68px] -left-[52px] rounded-[16px] bg-white drop-shadow-xl p-5">
                    <div className="flex items-center gap-x-3">
                        <Image src="/images/header-customers.png" height={50} width={50} alt="User" />
                        <div>
                            <strong className="font-semibold font-poppins">Roman</strong>
                            <p className="text-sm mt-1 font-poppins">CEO Fondro</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1 mt-2.5 mb-1">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FF9736" />
                        </svg>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FF9736" />
                        </svg>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FF9736" />
                        </svg>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FF9736" />
                        </svg>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FF9736" />
                        </svg>
                    </div>
                    <p className="font-semibold">I can improve and save money to grow my own business from scratch</p>
                </div>
                <div className="h-full w-full relative overflow-hidden">
                    <img className={`${isLoaded ? 'top-5 left-5' : 'top-0 left-0'} absolute transition-all duration-700 w-[447] h-auto max-w-none`} src="/images/header-image.webp" width="447" height="506" alt="Making Greate Buisness Decision" />
                    {/* <Image src="/images/header-image.png" className={`${isLoaded ? 'top-5 left-5' : 'top-0 left-0'} absolute transition-all duration-700 w-[447] h-auto max-w-none`} width={447} height={506} alt="Making Greate Buisness Decision" /> */}
                </div>
                <div className="absolute z-10 top-[76px] -right-[40px] p-5 rounded-[16px] bg-white drop-shadow-xl">
                    <svg className="mx-auto" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24.9998" cy="25" r="25" fill="#B7EB38" />
                        <path d="M29.6998 31.9801H20.2998C19.8798 31.9801 19.4098 31.6501 19.2698 31.2501L15.1298 19.6701C14.5398 18.0101 15.2298 17.5001 16.6498 18.5201L20.5498 21.3101C21.1998 21.7601 21.9398 21.5301 22.2198 20.8001L23.9798 16.1101C24.5398 14.6101 25.4698 14.6101 26.0298 16.1101L27.7898 20.8001C28.0698 21.5301 28.8098 21.7601 29.4498 21.3101L33.1098 18.7001C34.6698 17.5801 35.4198 18.1501 34.7798 19.9601L30.7398 31.2701C30.5898 31.6501 30.1198 31.9801 29.6998 31.9801Z" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.4998 35H30.4998" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22.4998 27H27.4998" stroke="#0B251C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="font-poppins font-semibold mt-4 text-center">Get Bigger<br />
                        Funding</h3>
                </div>
            </div>
        </div>
    )
}