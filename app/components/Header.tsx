import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {
    return (
        <header className="pt-[100px] pb-[70px]">
            <div className="container flex items-center">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </header>
    )
}