import "./Contact.css"

function Contact() {
    return (
        <div className="Contact">
            <div className="header w-100 d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>

            <div className="flex flex-col lg:flex-row text-center justify-content-around">
                <div className="flex flex-col items-center">
                    <div className="text-3xl m-3 w-24 h-24 border-2 border-[#134072] rounded-full flex items-center justify-content-center">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">ADRESS</h1>
                    </div>
                    <div className="m-4 text-xl">
                        <h2 className="text-2xl font-semibold">
                            28 May
                        </h2>
                        <p>
                            28 May,Puskin 30A<br />
                            Staybridge Suits ile uzbeuz
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-3xl m-3 w-24 h-24 border-2 border-[#134072] rounded-full flex items-center justify-content-center">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">Phone</h1>
                    </div>
                    <div className="m-4 text-xl">
                        <div>
                            <h2 className="font-semibold text-2xl">
                                Whatsapp:
                            </h2>
                            <p>
                                +994 55 555 55 55
                            </p>
                        </div>
                        <div className="m-4">
                            <h2 className="font-semibold text-2xl">
                                For Calling:
                            </h2>
                            <p>
                                +994 55 555 55 55
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-3xl m-3 w-24 h-24 border-2 border-[#134072] rounded-full flex items-center justify-content-center">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">Email</h1>
                    </div>
                    <div className="text-xl m-4">
                        <div>
                            <h2 className="font-semibold text-2xl">
                                Info:
                            </h2>
                            <p>
                                info@linzalife.com
                            </p>
                        </div>
                        <div className="m-4">
                            <h2 className="font-semibold text-2xl">
                                Service:
                            </h2>
                            <p>
                                service@linzalife.com
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact;