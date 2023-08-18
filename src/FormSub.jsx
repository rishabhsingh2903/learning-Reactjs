import { useState } from "react"
export function FormSub({onsubmit}){
    const [newItem,setNewItem]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        if (newItem=="") return 
        onsubmit(newItem)
      setNewItem('')     
    }
    
    return (
    <form onSubmit={handleSubmit} className='new-item-form'>
    <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e =>setNewItem(e.target.value)} type="text" id="item" />
    </div>
    <button className="btn">add</button>
    </form>
    )
}