import { useState } from "react"

function Tasbih(){

const[conter,setCounter] = useState(0)

let handleIncrement =()=>{
    // function Wax kudaraayo Conterka
    setCounter(conter +1)
}

// function Conter 0 kadhigaayo
let handleReset =()=>{
    setCounter(0)
}

    return <div className="text-center mt-28">
        <h1 className="text-9xl mb-10">{conter}</h1>
        <button onClick={handleIncrement} className="bg-orange-500 px-10 py-3 m-3 rounded-full text-white text-3xl">Increment</button>
        <button onClick={handleReset} className="bg-orange-500 px-10 py-3 m-3 rounded-full text-white text-3xl">reset</button>
    </div>
}

export  default Tasbih