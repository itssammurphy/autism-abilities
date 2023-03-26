import { useCallback } from "react";
import { useState } from "react";

const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(true);

    const links = [
        {
            title: "Home",
            link: "#",
        },
        {
            title: "Workshops",
            link: "#",
        },
        {
            title: "Careers",
            link: "#"
        },
        {
            title: "Testimonials",
            link: "#"
        },
        {
            title: "Feedback",
            link: "#"
        }
    ];

    const toggleMobileMenu = useCallback(() => {
        if (!showMobileNav) {
            setShowMobileNav(true);
        } else {
            setShowMobileNav(false);
        }
    }, [showMobileNav, setShowMobileNav]);

    return (
        <nav>
            <div className="container mx-auto px-6 py-5 flex justify-between items-center">
                <a class="font-bold text-3xl lg:text-4xl" href="#">
                    Autism Abilities
                </a>
                <div className="block lg:hidden">
                    <button class="flex items-center justify-center px-3 py-2 border rounded-md text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none transition" onClick={toggleMobileMenu}>
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:block">
                    <ul className="min-w-[550px] inline-flex items-center justify-between">
                        {
                            links.map((item, index) => (
                                <li className="hover:text-black hover:scale-110 transition text-gray-500"><a className="px-4 font-bold" key={item.title} href={item.link}>{item.title}</a></li>
                            ))
                        }
                        <li><a class="bg-red-400 text-white font-bold rounded-md py-2 px-4 shadow-lg uppercase tracking-wider hover:bg-white hover:text-red-400 transition block text-center hover:border-red-400 border-transparent border-2" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            {/* MOBILE NAVIGATION MENU */}
            <div className={`${showMobileNav ? '' : 'hidden'} lg:hidden mobile-menu bg-white fixed right-0 px-8 py-4`}>
                {
                    links.map((item, index) => (
                        <a class="block my-4 mx-4 hover:font-semibold" key={item.title} href={item.link}>{item.title}</a>
                    ))
                }
                <a class="bg-red-400 text-white font-bold rounded-md py-2 px-2 shadow-lg uppercase tracking-wider hover:bg-white hover:text-red-400 transition block w-[150px] text-center hover:border-red-400 border-transparent border-2" href="#">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;