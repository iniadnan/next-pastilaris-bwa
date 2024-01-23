import Image from "next/image"
export default function BFENewCustomers() {
    return(
        <div className="bg-white h-[94px] rounded-[16px] p-5 absolute z-10 -bottom-[47px] right-[30px] drop-shadow-xl text-[#0B251C]">
            <div className="flex items-start">
                <div className="relative flex items-center">
                    <div className="relative z-30 h-[50px] w-[50px] rounded-full bg-[#B7EB38] flex items-center justify-center font-semibold text-[18px] font-poppins">50+</div>
                    <Image className="relative z-20 -left-[10px]" src="/images/customers-1.png" height={50} width={50} alt="Customers" />
                    <Image className="relative z-10 -left-[20px]" src="/images/customers-2.png" height={50} width={50} alt="Customers" />
                </div>
                <h3 className="font-poppins font-semibold text-[18px] grow">New Hot<br /> Customers</h3>
            </div>
        </div>
    )
}