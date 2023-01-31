import Image from "next/image"
import { useState } from "react"
import Button from '../components/Button'

export default function Subscribe() {

    const [showLoader, setShowLoader] = useState(false)
    const [subComp, setSubComp] = useState(false)

    const onSubmit = (event: any) => {
        event.preventDefault();
        setShowLoader(true)
        //Create the post request to send the email to the backend but for now: 
        setTimeout(() => handleui(false), 1000)
    }

    const handleui = (handle: boolean) =>{
        setShowLoader(false)
        setSubComp(true)
    }

    return (
        <>
            <div className="flex items-center py-8 justify-center min-h-screen bg-blue-50">
                <div className=" relative flex flex-col md:flex-row  py-8 space-y-10 bg-white shadow-2xl rounded-2xl  space-y-0 md:m-0">

                    <div className=" p-6 md:p-20">
                        {subComp ?
                            <div>
                                <h2 className="duration-200 hover:scale-105 mb-5 text-4xl text-black text-center font-bold"> Gracias</h2>
                                <p className="duration-200 hover:scale-105 max-w-sm mb-12 font-sans text-center font-light text-black"> ¡Bienvenido a tu plaza digital favorita! Espera el primer PQTE en tu inbox en unos minutos.
                                    P.S. Si el email no te llega al inbox, verifica tu folder de promociones. 👀 </p>
                                    
                                <div className=" flex justify-center content-center items-center bg-white">
                                    <Image className="duration-200 hover:scale-105" src="/PLATEADONE.webp" width={180} height={200} alt="Your Photo" />
                                </div>
                            </div>

                            :
                            <div>
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
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                    <div className=" flex justify-center content-center items-center bg-white">
                        <Image className="duration-200 hover:scale-105" src="/platea-phone.webp" width={300} height={300} alt="Your Photo" />
                    </div>
                </div>
            </div>

        </>
    )
}

