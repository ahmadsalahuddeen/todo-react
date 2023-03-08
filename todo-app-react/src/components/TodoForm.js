import React, {useState, useEffect, useRef} from "react";


export const   TodoForm = (props) => {
const [input, setInput ] = useState('')

const inputRef = useRef(null)
useEffect(()=>{
    inputRef.current.focus()
})


const handleChange = e => {
    setInput(e.target.value)
}

const handleSubmit = e =>{
    e.preventDefault()
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })
    setInput('')

}
    return ( 
    <>
   <form className="todo-form" onSubmit={handleSubmit}>
<input ref={inputRef} value={input} placeholder='Add ad Todo' type='text' name="text" className="todo-input"  onChange={handleChange} />
<button className="todo-button" type="submit">
    submit
</button>


   </form>
   </>  
    )

} 