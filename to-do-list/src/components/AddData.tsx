import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button';
import ItemList from './ItemList';

function AddData() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("")

  const handleChange = (e : any) => {setInput(e.target.value);}

  const handleAdd = () => {
    if(input.trim() === "") return;

    setTodos([...todos, input]);

    setInput("")
  };

  return (
    <div className='flex items-center gap-2'>
      <Input placeholder="Add new todo..." value={input} onChange={handleChange} onKeyDown={(e) => { if(e.key == "Enter"){ handleAdd();}}}/>
      <Button onClick={handleAdd}>Add</Button>

      <div>
        <ItemList todos={todos}/>
      </div>
    </div>
  )
}

export default AddData
