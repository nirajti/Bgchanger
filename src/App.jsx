import { useState } from "react"


function App() {
  const [color, setcolor] = useState('oOrange') 

  return (
    <div className="w-full h-screen duration-200"
     style={{ backgroundColor: color }}
      
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
     
     <button
     onClick={() => setcolor('green')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
     style={{ backgroundColor: "red" }}
     >Red
     </button>

     <button
     onClick={() => setcolor('red')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
     style={{ backgroundColor: "Blue" }}
     >Blue
     </button>

     <button
     onClick={() => setcolor('Black')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer  hover:text-green-600"
     style={{ backgroundColor: "Green" }}
     >Black
     </button>

     <button
     onClick={() => setcolor('Brown')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer  hover:text-green-600"
     style={{ backgroundColor: "Green" }}
     >Brown
     </button>

     <button
     onClick={() => setcolor('Brown')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer  hover:text-green-600"
     style={{ backgroundColor: "Green" }}
     >Brown
     </button>

     <button
     onClick={() => setcolor('Orange')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer  hover:text-green-600"
     style={{ backgroundColor: "Green" }}
     >Orange
     </button>

     <button
     onClick={() => setcolor('Pink')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer  hover:text-green-600"
     style={{ backgroundColor: "Green" }}
     >Pink
     </button>

     <button
     onClick={() => setcolor('Maroon')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer  hover:text-green-600"
     style={{ backgroundColor: "Green" }}
     >Maroon
     </button>

     <button
     onClick={() => setcolor('	Violet')}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer  hover:text-green-600"
     style={{ backgroundColor: "Green" }}
     >	Violet
     </button>
    </div>

    </div>
     
    </div>
  )
}

export default App
