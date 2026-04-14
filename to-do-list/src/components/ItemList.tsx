import { Button } from './ui/button';

type props = {
  todos: string[];
  onDelete: (index: number) => void;
};

function ItemList({ todos, onDelete }: props) {
  return (
    <div className="p-5">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-2 border border-blue-300 p-2"
        >
          <span className="text-xl text-blue-400">{todo}</span>

          <Button onClick={() => onDelete(index)}>Delete</Button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
