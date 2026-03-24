import Link from "next/link";
import Image from "next/image";
import login from "./login/login";

export default function Navbar() {
    return (
        <header
            style={{
                background:
                    "linear-gradient(90deg, rgba(21,21,26,1) 100%, rgba(79,77,77,1) 100%, rgba(237,221,83,1) 100%)",
            }}
            className="text-gray-400 body-font"
        >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                {/* Left Nav */}
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link href="/" className="mr-5 hover:text-white">Products</Link>
                    <Link href="/routes/contact" className="mr-5 hover:text-white">Contact</Link>
                    <Link href="/routes/about" className="hover:text-white">About</Link>
                </nav>

                {/* Logo */}

                <Link
                    href="/"
                    className="flex order-first lg:order-0 lg:w-1/5 items-center justify-center mb-4 md:mb-0"
                >
                    <Image
                        src="https://res.cloudinary.com/dkp8e94jw/image/upload/f_auto,q_auto/Screenshot_2026-03-19_222953_ianftz"
                        alt="logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="ml-3 text-xl text-white">MAQ MART</span>
                </Link>

                {/* Signup */}
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <Link
                        href="/routes/login"
                        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    >
                        Login/Signup
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>

            </div>
        </header>
    );
}