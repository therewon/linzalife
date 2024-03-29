import { Link } from "react-router-dom";
import "./Catalog.css";
import Data from "../../data.json"
import { useState } from "react";
import AdsCarousel from "../../Component/AdsCarousel/AdsCarousel";
import Info from "../../Component/Info/Info";

function Catalog() {
    const [catalog, setCatalog] = useState("All");
    const [show, setShow] = useState(false);
    const [sort, setSort] = useState(true);
    const [count,setCount] = useState();

    let LensName = [];
    Data.map((e, index) => {
        return LensName.push(e.name)
    });


    const filterHandle = () => {
        setShow(!show);
        console.log(show)
    }

    const sortHandle = () => {
        setSort(!sort);
    }

    return ( 
        <div className="Catalog flex flex-col bg-gray-100">
            <div className="flex justify-center items-center bg-white border-y-2 w-full">
                <div className="w-full justify-center flex container">
                <div className="w-[80%] h-16 flex flex-row justify-around items-center cursor-pointer font-bold ">
                    <div onClick={(e) => {
                        setCatalog('All')
                    }}>Bütün məhsullar</div>
                    <div onClick={(e) => {
                        setCatalog(e.target.innerText)
                    }}>Şəffaf linza</div>
                    <div onClick={(e) => {
                        setCatalog(e.target.innerText)
                    }}>Günlük linza</div>
                    <div onClick={(e) => {
                        setCatalog(e.target.innerText)
                    }}>Rəngli linza</div>
                    <div onClick={(e) => {
                        setCatalog(e.target.innerText)
                    }}>Astiqmat linza</div>
                    <div onClick={(e) => {
                        setCatalog(e.target.innerText)
                    }}>Linza suyu</div>
                </div>
                </div>
            </div>

            <div className="flex flex-col px-20 container" >
                <div className="my-4">
                    <div className="flex flex-row gap-2 justify-center">
                        {/* <div onClick={filterHandle} className="cursor-pointer my-4 border-2 border-[#134072] w-44 h-10 flex flex-row justify-content-center items-center gap-2">*/}
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
                        {/*</div> */}
                        <div className="">
                            <AdsCarousel />
                        </div>
                    </div>



                    {show &&
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

                <div className="flex flex-row gap-0 justify-between items-start mx-auto w-[80%]">
                    <Info />
                    <div className="flex flex-col lg:flex-row sm:flex-wrap justify-end pt-2 pl-2 w-full">
                        {Data.filter((e) => {
                            if(catalog == "All"){ 
                                return e.type;
                            }else{
                                return e.type == catalog;
                            }
                        }).map((e) => {
                            return (
                                
                                    <div className=" mb-2 mx-2 flex flex-col items-center border-2 border-grey-400 hover:border-[#134072] duration-500 bg-white w-[250px]  h-[400px] justify-between">
                                        <div className="h-[200px] w-[235px] flex justify-center items-center px-2">
                                            <img src={e.image} className="w-[250px] max-h-[150px]" alt="card" />
                                        </div>
                                        <div className=" text-center flex flex-col gap-2 h-[50%] justify-around">
                                        <Link to={`/catalog/${e.id}`} key={e.id}>
                                            <h5 className="name font-bold">{e.name}</h5>
                                        </Link>
                                            <div className="flex flex-row items-center gap-2 justify-around">
                                                <p className="text-red-500 font-bold text-center">{e.price}</p>
                                                <button 
                                                    className="w-[150px] h-[40px] bg-[#134072] hover:bg-red-500 rounded-full text-white text-md duration-300 " 
                                                    onClick={()=>{
                                                        setCount(count+1)
                                                }} >+ Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Catalog;