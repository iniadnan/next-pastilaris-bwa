import Image from "next/image"
export default function BFENewCustomers() {
    return(
        <div className="bg-white h-[94px] rounded-[16px] p-5 absolute z-10 -bottom-[47px] right-[30px] drop-shadow-xl text-[#0B251C]">
            <div className="flex items-start gap-x-2.5">
                <div className="relative flex items-center">
                    <div className="h-[50px] w-[50px] rounded-full bg-[#B7EB38] flex items-center justify-center font-semibold text-[18px]">50+</div>
                    <Image src="/images/customers-1.png" height={50} width={50} alt="Customers" />
                    <Image src="/images/customers-2.png" height={50} width={50} alt="Customers" />
                </div>
                <h3 className="font-poppins font-semibold text-[18px] grow">New Hot<br /> Customers</h3>
            </div>
        </div>
    )
}