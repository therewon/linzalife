import { useParams } from "react-router-dom"
import Data from "../../data.json";
import "./Item.css"

function Item() {

    const { id } = useParams();
    return (
        <div className="Item">

            {Data.filter((e, index) => {
                return e.id == id;
            }).map((e, index) => {
                return (
                    <div className="item" key={index}>
                        <header>
                            <h1 className="text-light text-5xl">Product</h1>
                            <p className="text-light">{e.name}</p>
                        </header>
                        <main className="flex md:flex-row flex-col container">
                            <img src={e.image} className="w-50" />
                            <div>
                                <h1 className="text-3xl font-bold">{e.name}</h1>
                                <table className="flex gap-4">
                                    <td className="flex flex-col py-4 gap-2 text-xl">
                                        <tr>Price:</tr>
                                        <tr>Type:</tr>
                                        <tr>Availability:</tr>
                                    </td>
                                    <td className="flex flex-col py-4 gap-2 text-xl">
                                        <tr>{e.price}</tr>
                                        <tr>{e.type}</tr>
                                        <tr className="text-green-600">In Stock!</tr>
                                    </td>
                                </table>
                                <div className="d-flex flex-column">
                                    <button className="mb-2 mt-5">Sevimlilərə əlavə et</button>
                                    <button>Sifariş üçün <i className="fa-brands fa-whatsapp"></i></button>
                                </div>
                            </div>
                        </main>
                        <aside className="container">
                            <div className="description">
                                <div className="title-selector">
                                    <button className="active">Product Description</button>
                                    <button>Additional Information</button>
                                    <button>Reviews</button>
                                </div>
                                <div className="desc">
                                    <div>
                                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.

                                        <h5 className="mt-4 mb-4">Lorem ipsum dolor sit amet</h5>

                                        Sonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                                        <h5 className="mt-4 mb-4">Busey ipsum dolor sit amet</h5>

                                        Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci dapibus ultrices. Tortor condimentum lacinia quis vel eros donec ac odio. Velit euismod in pellentesque massa placerat duis ultricies lacus. Scelerisque purus semper eget duis at tellus at urna condimentum. Eu facilisis sed odio morbi quis commodo odio aenean urpis massa sed elemen.

                                        <h5 className="mt-4 mb-4">Vestibulum sit amet ipsum</h5>

                                        Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras felis nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra convallis nec danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus id ullamcorper neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros accumsan quis justo at tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus volutpat, ut dapibus purus pulvinar. Vestibulum sit amet auctor ipsum.
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Item;
