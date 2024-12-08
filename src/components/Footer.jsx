import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
    return (
        <footer className="max-w-[1512px] h-[319px] mx-auto border border-gray-300 p-10 flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold mb-5 text-sm uppercase">
                        Profile
                    </h3>
                    <ul className="space-y-2.5 text-sm text-gray-600">
                        <li>
                            <Link href="/faq" className="hover:underline">
                                FAQ's
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="hover:underline">
                                Pricing plans
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/order-tracking"
                                className="hover:underline"
                            >
                                Order tracking
                            </Link>
                        </li>
                        <li>
                            <Link href="/returns" className="hover:underline">
                                Returns
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-5 text-sm uppercase">
                        Recent Posts
                    </h3>
                    <ul className="space-y-2.5 text-sm text-gray-600">
                        <li>
                            <Link
                                href="/blog/uniqueness"
                                className="hover:underline"
                            >
                                Touch of uniqueness
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog/offices"
                                className="hover:underline"
                            >
                                Offices you won't forget
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog/cicilan"
                                className="hover:underline"
                            >
                                Cicilan
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-5 text-sm uppercase">
                        Customer
                    </h3>
                    <ul className="space-y-2.5 text-sm text-gray-600">
                        <li>
                            <Link href="/help" className="hover:underline">
                                Help & contact us
                            </Link>
                        </li>
                        <li>
                            <Link href="/returns" className="hover:underline">
                                Return
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/online-stores"
                                className="hover:underline"
                            >
                                Online stores
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:underline">
                                Terms & condition
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-5 text-sm uppercase">
                        Contact
                    </h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            {/* <Instagram size={20} /> */}
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            {/* <Twitter size={20} /> */}
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700"
                        >
                            {/* <Facebook size={20} /> */}
                            <span className="sr-only">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-5 border-t border-gray-200 text-xs text-center text-gray-500">
                <p>&copy; 2014 Nizami cinema. All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
