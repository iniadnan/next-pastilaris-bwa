import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="container py-[100px] flex flex-wrap items-start gap-x-[156px] font-medium text-sm text-[#0B251C]">
                {/* Footer Left: Menu */}
                <div className="w-[260px]">
                    <Image
                        src="/icons/footer-pastilaris.svg"
                        width={176}
                        height={34}
                        alt="Picture of the author"
                    />
                    <h2 className="my-5">SaaS template by BuildWithAngga
                        to help big companies grow.</h2>
                    <p>Copyrights Pastilaris.</p>
                </div>
                {/* Footer Right: Menu */}
                <div className="flex flex-wrap items-start gap-x-[70px]">
                    <div>
                        <h3 className="font-poppins font-semibold mb-5">Product</h3>
                        <div className="flex flex-wrap flex-col gap-y-2.5">
                            <Link href="/">SaaS Web Builder</Link>
                            <Link href="/">Copywriting Templates</Link>
                            <Link href="/">Automation Tools</Link>
                            <Link href="/">Users Tracking Behavior</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-poppins font-semibold mb-5">Company</h3>
                        <div className="flex flex-wrap flex-col gap-y-2.5">
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Help Center</Link>
                            <Link href="/">Terms Conditions</Link>
                            <Link href="/">About Us</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-poppins font-semibold mb-5">Developer</h3>
                        <div className="flex flex-wrap flex-col gap-y-2.5">
                            <Link href="/">API Documentations</Link>
                            <Link href="/">Product Knowledges</Link>
                            <Link href="/">Ticketing Support</Link>
                            <Link href="/">Pricing</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}