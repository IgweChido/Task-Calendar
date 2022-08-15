import React from 'react'
import '../styles/TaskLook.scss'

function AddedTaskPromt(props) {
  return (
    <div className={props.color ?'at-prompt': 'at-prompt1'}>
        <p>{props.word}</p>
    </div>
  )
}

export default AddedTaskPromt