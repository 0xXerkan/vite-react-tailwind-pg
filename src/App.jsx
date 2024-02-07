import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold m-5">
          Welcome to the React Playground!
        </h1>
      </div>
    </>
  )
}

export default App
