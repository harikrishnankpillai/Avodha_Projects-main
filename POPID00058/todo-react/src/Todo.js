import React from 'react'

const Todo = ({todo,index,deleteTodo}) => {
 
  return (
<li  key={index}>
{todo}
<span id={index} onClick={(e)=>{deleteTodo(e)}}>❌</span>
</li>
  )

}

export default Todo
