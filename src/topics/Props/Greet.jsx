// *** A short example to understand
import React from 'react'

function Greet({name}) {
  return (
    <div><h2>Hello, {name}  </h2></div>
  )
}

export default Greet

//**  another way to recive data
// function Greet(props) {
//   return (
//     <div><h2>Hello, {props.name}  </h2></div>
//   )
// }

// export default Greet