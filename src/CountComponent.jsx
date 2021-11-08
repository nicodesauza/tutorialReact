import React from 'react'
import axios from 'axios';

const CountComponent = () => {
    // // const [count, setCount] = React.useState(0)
    // // React.useLayoutEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    //     console.log(res)
    //     // })
    // })
    // const html = () => {
    //     return (
    //         <h1>Some HTML text here</h1>
    //     )
    // }

    // const formattedBody = `<h1>Some HTML text here</h1>`;
    // const mailToLink = "mailto:x@y.com?body=" + encodeURIComponent(formattedBody);
    return (
        <div className="flex flex-col justify-center">
            <div>mailto</div>
            {/* <a href={mailToLink}>mailto</a> */}
            {/* <p className="text-3xl text-indigo-700 text-center">{count}</p>
            <div className="flex space-x-1 justify-center">
                <button className="py-2 px-3 bg-green-400 text-white rounded-full" onClick={() => setCount(v => v + 1)}>Tambah</button>
                <button className="py-2 px-3 bg-red-400 text-white rounded-full" onClick={() => setCount(v => v > 0 ? v - 1 : 0)}>Kurang</button>
            </div> */}
        </div>
    )
}

export default CountComponent
