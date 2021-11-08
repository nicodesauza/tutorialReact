import React, { useEffect, useLayoutEffect } from "react";

const Header = () => {
    let harga = 3000
    if (true) {
        harga = 400
    }

    const [price, setPrice] = React.useState(10);

    useEffect(() => {
        // setPrice(price + 1)
    }, [price])

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-bold">harga : <span className="text-red-500"> {price}</span></div>
            <button className="border boreder-blue-200 px-3" onClick={() => setPrice(price + 1)}>Tambah Harga</button>
        </div>
    )
}

export default Header