import { useEffect, useState } from "react";
import image from "../assets/image.png"
import Form from "./Form";

const ContactForm = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);


    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDarkMode(true);
        };
    }, [])

    useEffect(() => {


        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    }, [darkMode]);

    return (
        <div className="flex h-screen w-screen bg-gray-50 dark:bg-[#010712]">
            {/* Left image */}
            <div className="hidden md:block w-[45vw]">
                <img src={image} className="w-full h-full object-cover object-center" alt="Contact Form Image" />
            </div>

            {/* RIGHT CONTENT  */}
            <div className="relative w-full md:w-[55vw] px-10 py-20 text-gray-800 dark:text-gray-100">
                <div className="absolute top-6 right-6 flex items-center gap-3">
                    <button onClick={() => setDarkMode(!darkMode)} className="w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 relative">
                        <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 cursor-pointer ${darkMode ? "translate-x-7" : ""}`}></span>
                    </button>
                    <span className="capitalize">
                        dark mode
                    </span>
                </div>

                <h1 className="text-4xl tracking-[0.5rem] uppercase mb-4">contact us</h1>
                <p className="text-sm text-gray-500 max-w-xl mb-10">
                    Planning to visit Bangladesh soon? Get inside tips on where to go, things to do and find best deals for your next adventure.
                </p>

                <Form></Form>
            </div>
        </div>
    );
};

export default ContactForm;