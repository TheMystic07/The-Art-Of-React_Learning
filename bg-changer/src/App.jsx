import { useState } from 'react'


function App() {
  const [color, setColor] = useState("coral")
  
  return (
    <>
      <div className= "w-screen h-screen duration-300 "
       style={{backgroundColor:color}} >
      
      <div className="wraper fixed  flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2  shadow-lg bg-black  opacity-50  px-3 py-2 rounded-xl ">

        <button className='outline-none px-4  py-1 rounded-2xl text-white shadow-xl opacity-100 ' style={{backgroundColor:"red" }} onClick={() =>setColor("red")}>RED</button>
        <button className='outline-none px-4  py-1 rounded-2xl text-white shadow-xl opacity-100 ' style={{backgroundColor:"blue" }} onClick={() =>setColor("blue")}>blue</button>
        <button className='outline-none px-4  py-1 rounded-2xl text-white shadow-xl opacity-100 ' style={{backgroundColor:"green" }} onClick={() =>setColor("green")}>green</button>
        <button className='outline-none px-4  py-1 rounded-2xl text-white shadow-xl opacity-100 ' style={{backgroundColor:"yellow" }} onClick={() =>setColor("yellow")}>yellow</button>
        <button className='outline-none px-4  py-1 rounded-2xl text-white shadow-xl opacity-100 ' style={{backgroundColor:"sky" }} onClick={() =>setColor("sky")}>sky</button>
        <button className='outline-none px-4  py-1 rounded-2xl text-white shadow-xl opacity-100 ' style={{backgroundColor:"brown" }} onClick={() =>setColor("brown")}>brown</button>

        </div>
      </div>
       
            </div>
    </>
  )
}

export default App
