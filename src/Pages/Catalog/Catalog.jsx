import { Link } from "react-router-dom";
import "./Catalog.css";
import Data from "../../data.json"

function Catalog() {
    return (
        <div className="Catalog d-flex flex-column">
            <div className="header w-100 d-flex justify-content-center align-items-center flex-column">
                <h1>All Collections</h1>
                <input className="form-control w-25 m-2" placeholder="Type to search" />
            </div>
            <div className="contain w-100 d-flex flex-row">
                <div className="w-25">
                    <h4>Filter</h4>
                    <select>
                        <option value="optik">Optik</option>
                        <option value="rengli">Rengli</option>
                        <option value="her ikisi">Her ikisi</option>
                    </select>
                </div>
                <div className="wrapper d-flex flex-row flex-wrap justify-content-end p-4">
                    {Data.map((e) => {
                        return (<div key={e.id} className="lens m-2 d-flex flex-column align-items-center">
                            <img src={e.image} className="w-50 m-2np" />
                            <div className="info p-3 text-center d-flex flex-column">
                                <h5 className="name">{e.name}</h5>
                                <p className="p-0 m-0">{e.type}</p>
                                <p className="p-0 m-0">{e.price}</p>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Catalog;