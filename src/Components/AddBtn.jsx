import React from 'react'

function AddBtn(props) {
  function submitNote(e) {
    props.onAdd(note);
    e.preventDefault()
  }
  return (
    <button onClick={submitNote} className='w-fit rounded-full p-3 -bottom-4 flex self-end text-amber-500 absolute bg-amber-50 shadow-lg border-x border-y border-amber-500'>Add</button>
  )
}

export default AddBtn