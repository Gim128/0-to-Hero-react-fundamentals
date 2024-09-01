import { useState } from "react";


function ListGroup() {
  const items = ["France", "Mexico", "German", "Sri Lanka", "ENgland"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>This is a GridList</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => { setSelectedIndex(index);}}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
