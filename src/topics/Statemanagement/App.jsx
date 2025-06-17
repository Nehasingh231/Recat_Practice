import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Count: {count}</h2>
     <button onClick={() => setCount(count + 1) }>click</button>
    </div>
  )
}

export default App