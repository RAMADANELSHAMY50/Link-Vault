import { useState } from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="flex justify-center items-center h-80 text-3xl font-bold underline">
          Welcome to Vite
        </h1>
      </div>
    </>
  )
}

export default App
