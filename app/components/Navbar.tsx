import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="z-50 sticky top-[0px] left-0">
            <div className="w-[1130px] mx-auto bg-[#0B251C] py-4 px-[30px] rounded-[100px]">
                <div className="container flex items-center">
                    <div className="flex items-center gap-x-[30px] text-white font-semibold">
                        <div>
                            <Image className="h-[34px] w-auto object-cover" src="/images/nav-logo.png" height={34} width={176} alt="Logo" />
                        </div>
                        <div className="h-[50px] w-px bg-[#6C8079]"></div>
                        <div className="flex gap-x-[40px]">
                            <Link href="/" className="text-[#B7EB38] underline">Features</Link>
                            <Link href="/">vs. Slock</Link>
                            <Link href="/">Pricing</Link>
                            <Link href="/">Showcase</Link>
                        </div>
                    </div>
                    <div className="flex w-auto ml-auto gap-x-[16px]">
                        <Link href="/" className="font-semibold text-[#0B251C] bg-white border border-white rounded-[100px] py-[12px] px-5">Call Sales</Link>
                        <Link href="/" className="font-semibold text-white border border-white rounded-[100px] py-[12px] px-5">My Account</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}