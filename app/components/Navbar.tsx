"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css'

export default function Navbar() {
    const [isScroll, setIsScroll] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('scroll', isScrolling);
    }, [])

    const isScrolling = () => {
        if (window.scrollY > 70) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }

    return (
        <nav className="w-full z-50 sticky top-[-1px] left-0">
            <div className={`${isScroll ? styles.navbarExpand : 'w-[1130px] rounded-[100px]'} h-[70px] mx-auto bg-[#0B251C] px-[30px] transition-all duration-300 ease-in-out`}>
                <div className="container h-full flex items-center">
                    <div className="flex items-center gap-x-[30px] text-white font-semibold">
                        <div>
                            <Image className="h-[34px] w-auto object-cover" src="/images/nav-logo.png" height={34} width={176} alt="Logo" />
                        </div>
                        <div className="h-[50px] w-px bg-[#6C8079]"></div>
                        <div className="flex gap-x-[40px]">
                            <Link href="/" className="text-[#B7EB38] hover:text-[#B7EB38] underline">Features</Link>
                            <Link href="/" className="hover:text-[#B7EB38]">vs. Slock</Link>
                            <Link href="/" className="hover:text-[#B7EB38]">Pricing</Link>
                            <Link href="/" className="hover:text-[#B7EB38]">Showcase</Link>
                        </div>
                    </div>
                    <div className="flex w-auto ml-auto gap-x-[16px]">
                        <Link href="/" className="h-[43px] inline-flex items-center font-semibold text-[#0B251C] bg-white border border-white rounded-[100px] px-5">Call Sales</Link>
                        <Link href="/" className="h-[43px] inline-flex items-center font-semibold text-white border border-white rounded-[100px] px-5">My Account</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}