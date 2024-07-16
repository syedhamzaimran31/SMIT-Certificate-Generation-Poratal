import React from 'react'

function GoBackButton() {
    const back=()=>{
        window.history.back()
    }
  return (
    <>
        <button className='btn' onClick={back}><i className="fa-solid fa-arrow-left"></i></button>
    </>
  )
}

export default GoBackButton