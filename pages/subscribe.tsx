import Image from "next/image"
import { useState, useEffect } from "react"
import Button from '../components/Button'
import checkSub from '../public/PLATEADONE.webp'
import Confetti from 'react-confetti'

export default function Subscribe() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [showLoader, setShowLoader] = useState(false)
    const [subComp, setSubComp] = useState(false)

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }, [width, height])

    // const onSubmit = (event: any) => {
    //     event.preventDefault();
    //     setShowLoader(true)
    //     //Create the post request to send the email to the backend but for now: 
    //     setTimeout(() => handleui(false), 1000)
    // }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setShowLoader(true)
        try {
            const email = event.target.parentElement.parentElement.firstChild.value;
            const res = await fetch(`http://localhost:3000/api/${email}/`);
            if (!res.ok) {
                throw new Error(res.statusText);
            } 
        } catch (error) {
            console.error(error);
        } finally {
            handleui(false);
        }
    };

    const handleui = (handle: boolean) => {
        setShowLoader(false)
        setSubComp(true)
    }

    return (
        <>
            {subComp ?
                <Confetti
                    width={width}
                    height={height}
                    recycle={false}
                />
                :
                <div style={{display: 'none'}} ></div>
            }
            <div className="flex items-center py-8 justify-center min-h-screen bg-blue-50">
                <div className=" relative flex flex-col md:flex-row  py-8 space-y-10 bg-white shadow-2xl rounded-2xl  space-y-0 md:m-0">

                    <div className=" p-6 md:p-20">

                        {subComp ?
                            <div>
                                <h2 className="duration-200 hover:scale-105 mb-5 text-4xl text-black text-center font-bold"> Gracias</h2>
                                <p className="duration-200 hover:scale-105 max-w-sm mb-12 font-sans text-center font-light text-black"> ??Bienvenido a tu plaza digital favorita! Espera el primer PQTE en tu inbox en unos minutos.
                                    P.S. Si el email no te llega al inbox, verifica tu folder de promociones. ???? </p>

                                <div className=" flex justify-center content-center items-center bg-white">
                                    <Image className="duration-200 hover:scale-105" src={checkSub} alt="Your Photo" placeholder='blur' width={200} height={200} />
                                </div>
                            </div>

                            :
                            <div>
                                <h2 className="duration-200 hover:scale-105 mb-5 text-4xl text-black text-center font-bold"> Suscr??bete  </h2>
                                <p className="duration-200 hover:scale-105 max-w-sm mb-12 font-sans text-center font-light text-black"> Suscr??bete a nuestro Pocillo y recibe un bolet??n curado para estar al tanto de ??ltimas noticias y tendencias, qu?? hacer y a d??nde ir en ???????? directo a tu inbox todos los lunes, mi??rcoles y viernes </p>
                                <form action="">
                                    <input
                                        className="w-full duration-200 hover:scale-105 p-6 border  border-gray-300 rounded-md placeholder placeholder:font-light"
                                        placeholder="Correo electr??nico" type="text" required
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

