import './navbar.scss'
import React, { useState, useEffect } from 'react';
export default function Navbar() {
    const placeholders = [
        'A',
        ,
        'Ar'
        ,
        'Ard'
        ,
        'Ardu'
        ,
        'Ardui'
        ,
        'Arduin'
        ,
        'Arduino'
        ,
        'Arduino u'
        ,
        'Arduino un'
        ,
        'Arduino uno'
        ,
        'Arduino uno'
        ,
        'Arduino uno'
        ,
        'Arduino uno'
        ,
        'Arduino un'
        ,
        'Arduino u'
        ,
        'Arduino'
        ,
        'Arduin'
        ,
        'Ardui'
        ,
        'Ardu'
        ,
        'Ard'
        ,
        'Ar'
        ,
        'A'
        ,
        'E'
        ,
        'Es'
        ,
        'Esp'
        ,
        'Esp8'
        ,
        'Esp82'
        ,
        'Esp826'
        ,
        'Esp8266'
        ,
        'Esp8266'
        ,
        'Esp8266'
        ,
        'Esp8266'
        ,

        'Esp8266'
        ,
        'Esp826'
        ,
        'Esp82'
        ,
        'Esp8'
        ,
        'Esp'
        ,
        'Es'
        ,
        'E'
        ,
        "N"
        ,
        "Nh"
        ,
        "Nhậ"
        ,
        "Nhập "
        ,
        "Nhập t"
        ,
        "Nhập từ "
        ,
        "Nhập từ k"
        ,
        "Nhập từ kh"
        ,
        "Nhập từ khó"
        ,
        "Nhập từ khóa "
        ,
        "Nhập từ khóa t"
        ,
        "Nhập từ khóa tì"
        ,
        "Nhập từ khóa tìm "
        ,
        "Nhập từ khóa tìm k"
        ,
        "Nhập từ khóa tìm ki"
        ,
        "Nhập từ khóa tìm kiế"
        ,
        "Nhập từ khóa tìm kiếm"
        ,
        "Nhập từ khóa tìm kiếm."
        ,
        "Nhập từ khóa tìm kiếm.."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm..."
        ,
        "Nhập từ khóa tìm kiếm.."
        ,
        "Nhập từ khóa tìm kiếm."
        ,
        "Nhập từ khóa tìm kiếm"
        ,
        "Nhập từ khóa tìm kiế"
        ,
        "Nhập từ khóa tìm ki"
        ,
        "Nhập từ khóa tìm k"
        ,
        "Nhập từ khóa tìm "
        ,
        "Nhập từ khóa tì"
        ,
        "Nhập từ khóa t"
        ,
        "Nhập từ khóa "
        ,
        "Nhập từ khó"
        ,
        "Nhập từ kh"
        ,
        "Nhập từ k"
        ,
        "Nhập từ "
        ,
        "Nhập t"
        ,
        "Nhập "
        ,
        "Nhậ"
        ,
        "Nh "
        ,
        "N"

    ];
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }, 100);
        return () => clearInterval(interval);
    }, [currentPlaceholderIndex]);

    return (
        <nav className="bg-aqua border-aqua-200 dark:bg-blue-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="https://shopee.vn/banlinhkien_mh?utm_campaign=&utm_content=sellervn-89984243&utm_medium=affiliates&utm_source=an_17171860000"
                    className="flex items-center">
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.dBAf5XOGQ0wdpx54u0PV-gHaHa&pid=Api&P=0&h=180"
                        className="h-8 mr-3"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Iot
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center
                     text-sm text-red-500 rounded-lg md:hidden hover:bg-blue-100
                      focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-blue-400
                       dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    {/* <span className="sr-only">Open main menu</span>sssssssss */}
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className=" hidden w-full md:block md:w-auto " id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-aqua dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            {/* <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </a> */}
                            <div className='input'><input type="text" placeholder={placeholders[currentPlaceholderIndex]} />
                                <span> <i className="fa-solid fa-magnifying-glass"></i></span></div>
                            <div>hot line: 0973834662</div>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Arduino
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Tay hàn
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Đồng hồ
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                C11
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
