import React, { useEffect, useState } from 'react'

function Bakset() {
    const [num, setNum] = useState(0);
    useEffect(()=>{
        const basket = localStorage.getItem("num");
        if(basket){
            setNum(basket)
        }
    },[])
    
    return (
        <button className="bg-transparent text-[#134072] relative">
            <span className="absolute right-0 top-0 translate-x-[50%] translate-y-[-70%] border-[#134072] border-[1px] w-[15px] h-[15px] rounded-[8px] text-[10px] font-bold bg-transparent">
                {num}
            </span>
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
    )
}

export default Bakset
