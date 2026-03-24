"use client";

import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">

                    {/* Top Image */}
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image
                            src="https://res.cloudinary.com/dkp8e94jw/image/upload/v1774022331/Screenshot_2026-03-19_222953_ianftz_cmmbp7.png"
                            alt="content"
                            width={1200}
                            height={500}
                            className="object-cover object-center h-full w-full"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row mt-10">

                        {/* Profile */}
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                                <Image
                                    src="https://res.cloudinary.com/dkp8e94jw/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-20_at_8.38.54_PM_p3kwak"
                                    alt="profile"
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">
                                    CH Arham
                                </h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base text-gray-400">
                                    As a developer and founder, I'm creating this platform to provide a seamless online shopping experience with clean design, optimized performance, and real-world usability.
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                MAQ MART is built to provide a modern and reliable online shopping experience, offering quality products with a focus on simplicity, performance, and customer satisfaction. Our goal is to make shopping fast, easy, and accessible for everyone.
                            </p>


                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}