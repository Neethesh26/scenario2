import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
function Navbar() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    return (
        <header>
        <div
            className=" w-screen fixed flex items-center justify-center px-2 top-2 z-20"
            >
            <nav className=" container flex items-start py-4 mt-4 sm:mt-12 backdrop-blur-md relative">
            {/* <nav className=" z-20 fixed container flex items-start py-4 mt-4 sm:mt-12 backdrop-blur top-1 lg:left-20 lg:w-full md:left-0 sm:left-0"> */}
            <div className=" relative">
                <h1 className=" text-blue-600 font-bold text-2xl">
                Patient Management
                </h1>
            </div>
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-slate-900 uppercase text-base font-medium md:py-1">
                <li className="cursor-pointer">
                <a onClick={() => router.push("/")}>Home</a>
                </li>
                <li className=" cursor-pointer">
                <a onClick={() => router.push("/")}>Submission</a>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
}
export default Navbar;