import { useState } from "react"

function SomaliQuotes (){

const  maahmaah=[
    "Ma qori baa tilmaamay,",
    "Mise qoomamo baa baray?",
    "Ma qiso baa ku saabsani",
    "Qormadeeda la yidhi dhugo?",
    "Qof ma taabtay gacantiisa,",
    "Qalbigiisa ma degtay",
    "Qoomamada ma saaqday?",
    "Qalinkiisa ma daalay,",
    "Qiso daaro dhexaad ah,",
    "Mise waa qarsoodi?"


]

const [index,setIndex] = useState(0)
const handleNext=()=>{
    setIndex(index + 1)
}

const handlePrev = () =>{
    setIndex(0)
}

    return <div className="text-center mt-28">
        <h1 className="text-4xl mb-10 font-mono mx-[20%]">{maahmaah[index]}</h1>

        <button onClick={handleNext} className="bg-blue-500 px-10 py-3 text-white rounded  m-3 text-3xl">next</button>
        <button onClick={handlePrev} className="bg-blue-500 px-10 py-3 text-white rounded  m-3 text-3xl">Prev</button>
    </div>
}

export default SomaliQuotes