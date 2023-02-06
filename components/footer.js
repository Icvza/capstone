import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function footer() {
    return (
        <div>
			<div className="bg-[#f5f5f5] h-1/2 w-full flex md:flex-row flex-col justify-center item-center p-20">
				<div className="bg-[#f5f5f5] p-10">
					<ul>
                    <Image src='/platealogo.png' width={300} height={300} alt='Image'></Image>
                    <br></br>
                    <br></br>
						<div className="bg-[#f5f5f5] flex justify-center item-center gap-8 pb-5">
                        <Link
							activeClass="contact"
							to="planner"
							href='/subscribe'
							smooth={true}
							offset={50}
							duration={500}
							className="cursor-pointer bg-black text-white px-10 py-5 rounded-full text-3xl font-medium hover:bg-black hover:text-[#07d9b2]"
							>
								Suscríbete
							</Link>
						</div>
					</ul>
                    <div className=" bg-[#f5f5f5] flex justify-center item-center gap-8 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-500" />
							<FaFacebook className="text-2xl cursor-pointer hover:text-blue-800" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
				</div>
			</div>
            <div className="bg-[#f5f5f5] flex flex-col justify-center items-center text-center  p-5 bg-[#f5f5f5]">
            {/* <div className=" bg-red-200 flex gap-8 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-500" />
							<FaFacebook className="text-2xl cursor-pointer hover:text-blue-800" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div> */}
				<h1 className="bg-[#f5f5f5] text-gray-800 font-semibold">
					© 2023 Platea PR. A Red Ventures company. All Rights Reserved.
				</h1>
			</div>
		</div>
	);
}


export default footer
