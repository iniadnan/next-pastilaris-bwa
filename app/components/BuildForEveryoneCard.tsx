import Image from "next/image"
import BFEDataTracking from "./BFEDataTracking"
import BFENewCustomers from "./BFENewCustomers"

export default function BuildForEveryoneCard() {
    return(
        <div className="relative w-full">
            <BFEDataTracking />
            <Image className="w-full max-w-[380px] ml-auto" src="/images/build-for-everyone.png" height={285} width={380} alt="Built For Eveyone" />
            <BFENewCustomers />
        </div>
    )
}