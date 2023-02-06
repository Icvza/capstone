import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from 'next/link';
import Image from "next/image";


function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			{/* for main navcontainer */}
			<nav className=" shadow-sm fixed w-full z-10 bg-[#f5f5f5]">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						{/* first block section outer part */}
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								{/* <h1 className=" font-bold text-xl cursor-pointer">
									Platea<span className="text-[#07d9b2]">PR</span>
								</h1> */}
								<Image src='/platealogo.png' width={200} height={200} alt='Image'></Image>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										href="/planner"
										activeClass="Home"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-[#07d9b2] font-semibold px-3 py-2 text-md hover:font-black"
									>
										Inicio
									</Link>
									<Link
										href="/planner"
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"
									>
										Qué Hacer
									</Link>
									<Link
										href="/planner"
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"
									>
										Qué Comer
									</Link>
									<Link
										href="/planner"
										activeClass="Services"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black px-3 py-2 rounded-md text-sm font-medium"
									>
										Mapa Interactivo
									</Link>
									<Link
										href="/subscribe"
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-black text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-[#07d9b2]"
									>
										Suscríbete
									</Link>
								</div>
							</div>
						</div>

						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-black inline-flex items-center justify-center p-2 rounded-md text-[#07d9b2]  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#07d9b2] focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
								<Link
									href="/planner"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Inicio
								</Link>
								<Link
									href="/planner"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Qué Comer
								</Link>
								<Link
									href="/planner"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Qué Hacer
								</Link>
								<Link
									href="/planner"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Mapa Interactivo
								</Link>
								<Link
									href="/subscribe"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#07d9b2] text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
								>
									Suscríbete
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;