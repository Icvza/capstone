import Image from "next/image"
import { useState } from "react"
import Button from '../components/Button'

export default function Subscribe() {

    const [showLoader, setShowLoader] = useState(false)

    const onSubmit = () => {
        setShowLoader(true)
        //Create the post request to send the email to the backend but for now: 
        setTimeout(() => setShowLoader(false), 1000)
    }

    return (
        <>
            <div className="flex items-center py-8 justify-center min-h-screen bg-blue-50">
                <div className=" relative flex flex-col md:flex-row  py-8 space-y-10 bg-white shadow-2xl rounded-2xl  space-y-0 md:m-0">

                    <div className=" p-6 md:p-20">
                        <h2 className="duration-200 hover:scale-105 mb-5 text-4xl text-black text-center font-bold"> Suscríbete  </h2>
                        <p className="duration-200 hover:scale-105 max-w-sm mb-12 font-sans text-center font-light text-black"> Suscríbete a nuestro Pocillo y recibe un boletín curado para estar al tanto de últimas noticias y tendencias, qué hacer y a dónde ir en 🇵🇷 directo a tu inbox todos los lunes, miércoles y viernes </p>
                        <form action="">
                            <input
                                className="w-full duration-200 hover:scale-105 p-6 border  border-gray-300 rounded-md placeholder placeholder:font-light"
                                placeholder="Correo electrónico" type="text" required
                            />
                            <div className="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0">
                                <Button
                                    text="Submit"
                                    onSubmit={onSubmit}
                                    loading={showLoader}
                                    disabled={showLoader}
                                />
                                {/* <button className="w-1/2  flex justify-center items-center p-6 space-x-4 font-sans font-bold text-black rounded-md shadow-lg px-9 bg-[#6ce9b1] shadow-cyan-100 hover:bg-opacity-909 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 ">
                                    <span>Submit</span>
                                </button> */}
                            </div>
                        </form>
                        <p className="duration-200 hover:scale-105 max-w-sm mb-12 text-[10px] text-gray-400 font-sans text-center font-light text-black">Estoy de acuerdo en compartir mi nombre y correo electrónico con PlateaPR. PlateaPR no venderá ni compartirá tu información.</p>
                    </div>

                    <div className=" flex justify-center content-center items-center bg-white">
                        <Image className="duration-200 hover:scale-105" src="/platea-phone.webp" width={300} height={300} alt="Your Photo" />
                    </div>
                </div>
            </div>

        </>
    )
}

