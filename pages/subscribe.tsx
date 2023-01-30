export default function Subscribe () {
    
    return (
        <>
            <div className="py-8 bg-blue-50" id="contactForm">
                <div className="flex items-center py-8 justify-center min-h-screen bg-blue-50">
                    <div className="relative flex flex-col py-8 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-col space-y-0 md:m-0">
                        <div className="p-6 md:p-20">
                            <h2 className="mb-5 text-4xl font-bold"> Contact Form </h2>
                            <p className="max-w-sm mb-12 font-sans font-light text-gray-60"> Please fill out all boxes responce wihtin 2 hours </p>
                            <form action="">
                                <input
                                    className="w-full p-6 border  border-gray-300 rounded-md placeholder placeholder:font-light"
                                    placeholder="Full name" type="text" required />
                                <div className="flex flex-col md:flex-row">
                                    <input
                                        className="w-full p-6 border mt-2 md:mr-2 border-gray-300 rounded-md placeholder placeholder:font-light md:w-auto"
                                        placeholder="Phone Number" type="number" required />
                                    <input
                                        className="w-full p-6  mt-2 md:ml-2 border  border-gray-300 rounded-md placeholder placeholder:font-light md:w-auto"
                                        placeholder="email" type="email" id="email" name="email" required />
                                </div>
                                <div className="2-full">
                                    <input
                                        className="w-full p-6 mt-2 border border-gray-300 rounded-md placeholder placeholder:font-light "
                                        placeholder="Message" type="text" required />
                                </div>
                                <div className="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0">
                                    <button className="w-1/2  flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-909 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 ">
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}