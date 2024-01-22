"use client"
import { useEffect, useState } from "react";
import Button from "./Button";
export default function HeaderLeft() {
    const [isLoadedFirst, setIsLoadedFirst] = useState<boolean>(false)
    const [isLoadedSecond, setIsLoadedSecond] = useState<boolean>(false)

    useEffect(() => {
        setIsLoadedFirst(true)
        setTimeout(() => {
            setIsLoadedSecond(true)
        }, 700)
    }, [])
    return (
        <div className="w-1/2 text-[#0B251C]">
            <h1 className="font-extrabold text-[60px] leading-[70px]"><div className="inline-block relative"><span className={`${isLoadedFirst ? 'w-full' : 'w-0'} bg-[#B7EB38] transition-all duration-1000 ease-in-out h-[55%] absolute top-[55%] left-0 transform -translate-y-1/2`}></span><span className="relative z-10 px-1">Making</span></div> Great Business <div className="inline-block relative"><span className={`${isLoadedSecond ? 'w-full' : 'w-0'} bg-[#B7EB38] transition-all duration-1000 ease-in-out h-[55%] absolute top-[55%] left-0 transform -translate-y-1/2`}></span><span className="relative z-10 px-1">Decision</span></div></h1>
            <h2 className="w-full max-w-[484px] font-medium text-[18px] my-[30px]">Track your customers behavior to make a good decision that helps the customer use our services better way.</h2>
            <div className="w-full flex items-center gap-x-[14px]">
                <Button title="Get Started, It’s Free" background="bg-[#B7EB38]" color="text-[#0B251C]" />
                <Button title="Watch Demo" background="bg-transparent border border-[#0B251C]" color="text-[#0B251C]" />
            </div>
        </div>
    )
}