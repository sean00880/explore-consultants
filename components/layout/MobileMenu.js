import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: "",
    });

    const handleSubClick = (key) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,

            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <ul className="navigation clearfix">

                <li><Link href="/">Home</Link></li>              
                <li><Link href="/#about">About</Link></li>              
                <li><Link href="/#services">Services</Link></li>       
                <li><Link href="/#projects">Projects</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
                
            </ul>


        </>
    );
};

export default MobileMenu;