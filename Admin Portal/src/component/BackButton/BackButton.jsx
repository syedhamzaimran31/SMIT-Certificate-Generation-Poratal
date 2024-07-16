import React from 'react'

function BackButton() {
    const back=()=>{
        window.history.back()
    }
  return (
    <>
        <button className='btn btn-secondary ms-3' onClick={back}>Go Back</button>
    </>
  )
}

export default BackButton