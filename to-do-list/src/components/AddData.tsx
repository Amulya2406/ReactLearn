import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import ItemList from './ItemList';
import { toast } from 'sonner';

function AddData() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === '') return;

    const caps = input.trim().charAt(0).toUpperCase() + input.trim().slice(1);

    if (todos.includes(input.trim())) {
      toast.error('This task already exists');
      setInput('');
      return;
    }

    setTodos([...todos, caps]);

    setInput('');
  };

  const handleDelete = (indexToDelete: number) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <div className="flex items-center gap-2 p-2">
        <Input
          placeholder="Add new todo..."
          value={input}
          onChange={handleChange}
          onKeyDown={e => {
            if (e.key == 'Enter') {
              handleAdd();
            }
          }}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>

      <div>
        <ItemList todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default AddData;
