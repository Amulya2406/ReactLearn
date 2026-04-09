
type props = {
    todos : string[];
};

function ItemList({todos} : props) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
            {todo}
        </div>
      ))}
    </div>
  );
}

export default ItemList
