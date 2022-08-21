import React from 'react'

function Emp({name,age,place}) {
  return (
    <div className="mx-auto" style={{border:'2px solid white',borderRadius:'1rem',padding:'1rem',
          margin:'0.8rem',maxWidth:'15rem'}}>
        <p className="times">Name: {name} <br />
        Age: {age} <br /> Place: {place} </p>
    </div>
  )
}

export default Emp ;