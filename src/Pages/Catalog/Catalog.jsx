import { Link } from "react-router-dom";
import "./Catalog.css";
import Data from "../../data.json"
import {useState} from "react";
import AdsCarousel from "../../Component/AdsCarousel/AdsCarousel";
import Info from "../../Component/Info/Info";

function Catalog() {

    const [show,setShow] = useState(false);
    const [sort,setSort] = useState(true);

    let LensName = [];
     Data.map((e, index) => {
        return LensName.push(e.name)
     });


    const filterHandle = () =>{
        setShow(!show);
        console.log(show)
    }

    const sortHandle = () =>{
        setSort(!sort);
    }

    return (
        <div className="Catalog flex flex-col bg-gray-100">
            <div className="flex justify-center items-center bg-white border-y-2">
                <div className="w-[80%] h-16 flex flex-row justify-around items-center  font-bold">
                    <div className="">Bütün məhsullar</div>
                    <div>Şəffaf linza</div>
                    <div>Günlük linza</div>
                    <div>Rəngli linza</div>
                    <div>Astiqmat linza</div>
                    <div>Linza suyu</div>
                </div>
            </div>

            <div className="flex flex-col px-20 " >
                <div className="my-4">
                    <div className="flex flex-row gap-2 justify-center">
                        {/*<div onClick={filterHandle} className="cursor-pointer my-4 border-2 border-[#134072] w-44 h-10 flex flex-row justify-content-center items-center gap-2">*/}
                        {/*    <h4 className="font-semibold text-sm">Advanced Filter</h4>*/}
                        {/*    <i className="fa-solid fa-filter"></i>*/}
                        {/*</div>*/}
                        {/*<div onClick={sortHandle} className="cursor-pointer my-4 border-2 border-[#134072] w-44 h-10 flex flex-row justify-content-center items-center gap-2">*/}
                        {/*    <h4 className="font-semibold text-sm">Sort by</h4>*/}
                        {/*    {sort ? <i className="fa-solid fa-arrow-down-a-z"></i> :*/}
                        {/*        <i className="fa-solid fa-arrow-up-a-z"></i>}*/}
                        {/*</div>*/}
                        {/*<div className="w-[400px] m-auto">*/}
                        {/*    <input className="form-control w-[400px]" placeholder="Axtar" />*/}
                        {/*</div>*/}
                        <div className="">
                            <AdsCarousel />
                        </div>
                    </div>



                    {show  &&
                        <div className="flex flex-row">
                            <div className=" flex flex-col my-8">
                                <label className="text-[#134072] font-semibold text-xl mb-3">Type of Lens</label>
                                <select className="w-[350px] border-2 h-[50px] rounded text-center">
                                    <option>All</option>
                                    <option>Rəngli Linza</option>
                                    <option>Optik Linza</option>
                                    <option>Rəngli və Optik Linza</option>
                                    <option>Lens Solution</option>
                                </select>
                            </div>
                            <div className="flex flex-col m-8">
                                <label className="text-[#134072] font-semibold text-xl mb-3">Price</label>
                                <label>
                                    from
                                    <input className="w-[150px] border-2 h-[50px] text-center mx-2 rounded" placeholder="Minimum">
                                    </input>
                                    to
                                    <input className="w-[150px] border-2 h-[50px] text-center mx-2 rounded" placeholder="Maximum">
                                    </input>
                                </label>
                            </div>
                        </div>
                    }
                </div>

                <div className="flex flex-row gap-0 justify-between items-start max-w-[1170px] mx-auto">
                    <Info />
                        <div className="flex flex-row flex-wrap justify-end pt-2 pl-2 w-[calc(3*294px)]">
                            {
                                Data.map((e) => {
                                    return (
                                        <Link to={`/catalog/${e.id}`} key={e.id}>
                                            <div className=" mb-2 mx-2 flex flex-col items-center border-2 border-grey-400 bg-white w-[275px] h-[400px] justify-between">
                                                <div className="h-[200px] w-[235px] flex justify-center items-center">
                                                    <img src={e.image} className="w-[250px] max-h-[150px]" alt="card" />
                                                </div>
                                                <div className=" text-center flex flex-col gap-2 h-[50%] justify-around">
                                                    <h5 className="name font-bold">{e.name}</h5>
                                                    <p className="p-0 m-0">{e.type}</p>
                                                    <div className="flex flex-row items-center gap-2 justify-around">
                                                        <p className="text-red-500 font-bold">{e.price}</p>
                                                        <button className="w-[150px] h-[40px] bg-[#134072] rounded-full text-white text-md  ">+ Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Catalog;