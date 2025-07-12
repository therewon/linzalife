

function Info(){
    return(
        <div className="bg-white p-4 mt-2 w-[30%] hidden lg:block">
                        <div>
                            <h1 className="font-bold text-lg"><i className="fa-solid fa-globe mr-2"></i>Markalar</h1>
                            <ul className="flex flex-col gap-3 m-4 text-sm">
                                <li>Hamısı</li>
                                <li>Johnson & Johnson</li>
                                <li>Alcon</li>
                                <li>Regard</li>
                                <li>Cooper Vision</li>
                            </ul>
                        </div>
                        <hr className="my-4"/>
                        <div>
                            <h1 className="font-bold text-lg"><i className="fa-regular fa-circle mr-2"></i>Linza növləri</h1>
                            <ul className="flex flex-col gap-3 m-4 text-sm">
                                <li>Aylıq linzalar</li>
                                <li>Gündəlik linzalar</li>
                                <li>İki həftəlik linzalar</li>
                                <li>Rəngli linzalar</li>
                                <li>Astiqmat linzalar</li>
                                <li>Multifokal linzalar</li>
                            </ul>
                        </div>
                        <hr className="my-4"/>
                        <div>
                            <h1 className="font-bold text-lg"><i className="fa-solid fa-glasses mr-2"></i>Eynkəklər</h1>
                        </div>
                        <hr className="my-4" />
                        <div className="flex flex-col gap-4">
                            <div className="">
                                <h1 className="font-bold text-lg flex flex-row gap-2 items-center">
                                    <i className="fa-solid fa-star w-6"></i>
                                    <p>Seçilmiş Məhsullar</p>
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg flex flex-row gap-2 items-center">
                                    <i className="fas fa-tag w-6"></i>
                                    <p>Kampaniyalar</p>
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg flex flex-row gap-2 items-center">
                                    <i className="fas fa-tint w-6"></i>
                                    <p>Linza suları</p>
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg flex flex-row gap-2 items-center">
                                    <i className="fas fa-eye-dropper w-6"></i>
                                    <p>Göz damcısı</p>
                                </h1>
                            </div>
                        </div>
                        {/* <hr className="my-4"/>
                        <div>
                            <h1>Our instagram adress</h1>
                            <iframe src="https://www.instagram.com/linza_life/" className="my-4"></iframe>
                        </div> */}
                    </div>
    )
}

export default Info;