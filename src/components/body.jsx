// function Body(){
//     return <div className="bg-yellow-400 h-[420px]">

//     <div className="ml-20 p-10">
//     <p className="text-black font-medium">Lorem ipsum dolor sit amet consectetur.</p> <br></br>
//     <h1 className="font-bold text-3xl w-[300px] ">Find your Dream Home Today</h1> <br></br>
//     <p className="text-black font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, culpa? Repellendus minima necessitatibus voluptatibus libero!</p>
//     <button className="bg-black text-white mt-4 h-7 w-[120px] rounded-bl-[10px]">Explore Now</button>
//     <div className="hover:bg-black bg-green-500 w-[250px] h-[250px] rounded-full ml-[700px] mt-[-230px]"></div>
//     </div>
    
//     </div>
// }

// export default Body\
function Body(props){
    return <div>
        <div className="flex gap-[10px] mx-[200px] m-10 -mb-10">
        
                <img className="rounded border-black border-2  hover:scale-[1.1] cursor-default" src={props.img} />
            
<div>
    <h1 className="text-xl mb-5">{props.name}</h1>
    <p className="mb-150 mx-10"> {props.delivery} </p>
    <h5 className="text-2xl">{props.cash} </h5>
    <button className="bg-yellow-500 mt-5 hover:bg-white px-6 py-2 rounded">Order Now</button>
</div>
        </div>

    </div>
}
export default Body