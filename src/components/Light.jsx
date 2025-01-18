import { useState } from "react";
function Light(){

    const [color,setColor]= useState("")
     // Function State update kusameynaayo 
    const handleOn = ()=>{
        setColor("bg-yellow-500");
    }

    // Function State update kusameynaayo Off
    const handleOff =()=>{
        setColor("bg-White")
    }
    return <div className="flex justify-center mt-5">
        <div>
            <div className={`w-[400px] h-[400px] ${color} border-4 border-black rounded-4`}></div>
            <button onClick={handleOn} className="bg-blue-500 px-12 py-4 text-2xl m-6 rounded">On</button>
            <button onClick={handleOff} className="bg-blue-500 px-12 py-4 text-2xl m-6 rounded">Off</button>
        </div>
    </div>
}
export default Light               