import Image from 'next/image'
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Button from './components/Button';
import HeroBigReasons from './components/HeroBigReasons';
import Header from './components/Header';
import BuildForEveryoneCard from './components/BuildForEveryoneCard';
import SimpleStepsDone from './components/SimpleStepsDone';
import Navbar from './components/Navbar';
import GoodForYourBusiness from './components/GoodForYourBusiness';

export const metadata: Metadata = {
  title: "Making Great Business Decision - PastiLaris",
  description: "Making Great Business Decision, Track your customers behavior to make a good decision that helps the customer use our services better way.",
  keywords: ['Next.js', 'React', 'JavaScript'],
  applicationName: 'Next.js',
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
};

export default function Home() {
  return (
    <>
      <div className="h-[30px]"></div>
      <Navbar />
      <Header />
      {/* We're Helping */}
      <div>
        <div className="container pb-[70px]">
          <h2 className="font-bold text-[32px] text-[#0B251C] text-center">We’re Helping Big<br />
            Global Companies Grow</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-[70px] mt-[30px]">
            <Image
              src="/icons/company-1.svg"
              width={140}
              height={34}
              alt="Logoisum"
            />
            <Image
              src="/icons/company-2.svg"
              width={140}
              height={34}
              alt="Logoisum"
            />
            <Image
              src="/icons/company-3.svg"
              width={140}
              height={34}
              alt="Logoisum"
            />
            <Image
              src="/icons/company-4.svg"
              width={140}
              height={34}
              alt="Logoisum"
            />
            <Image
              src="/icons/company-3.svg"
              width={140}
              height={34}
              alt="Logoisum"
            />
          </div>
        </div>
      </div>
      {/* Hero Big Reasons */}
      <HeroBigReasons />
      {/* Good For Your Business */}
      <GoodForYourBusiness />
      {/* Build For Everyone */}
      <section className="bg-[#EDF3F1]">
        <div className="container flex flex-wrap items-center justify-between py-[120px] text-[#0B251C]">
          <div className="w-1/2 max-w-[480px]">
            <h2 className="font-bold text-[32px] mb-2.5">Built For Everyone</h2>
            <p className="font-medium text-[18px]">Track your customers behavior to make a good decision that helps the customer use our services better way.</p>
            <div className="flex items-center gap-x-6 font-bold mt-[30px]">
              <Button title="Get Started" background="bg-[#B7EB38]" color="text-[#0B251C]" />
              <p className="text-center flex items-center gap-x-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12.5" r="12" fill="#0B251C" />
                  <path d="M6.16666 12.8889L8.24477 14.9208C9.4871 16.1355 11.4983 16.0441 12.6254 14.7217L17.8333 8.61108" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
                No credit card required, really.</p>
            </div>
          </div>
          <div className="w-1/2">
            <BuildForEveryoneCard />
          </div>
        </div>
      </section>
      <SimpleStepsDone />
      {/* Grow Your SaaS */}
      <section className="bg-[#0B251C] relative">
        <div className="w-full max-w-[1440px] flex justify-end flex-wrap mx-auto">
          <div className="w-1/2">
            <Image
              src="/images/grow-your-saas.png"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto' }}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="container-absolute">
          <div className="w-full max-w-[480px] text-white">
            <h2 className="font-bold text-[32px]">Grow Your SaaS</h2>
            <p className="font-medium mt-2.5 mb-[30px]">Track your customers behavior to make a good decision that helps the customer use our services better way.</p>
            <div className="flex items-center gap-x-6 font-bold">
              <Button title="Get Started" background="bg-[#B7EB38]" color="text-[#0B251C]" />
              <p className="text-center flex items-center gap-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path d="M6.16666 12.3889L8.24477 14.4208C9.4871 15.6355 11.4983 15.5441 12.6254 14.2217L17.8333 8.11108" stroke="#0B251C" strokeWidth="3" strokeLinecap="round" />
                </svg>
                No credit card required, really.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}