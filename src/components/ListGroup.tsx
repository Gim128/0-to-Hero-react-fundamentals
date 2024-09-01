import { useState } from "react";
// {items: [],heading: string }
interface Props {
  items: string[];
  heading: string
}


function ListGroup({items, heading}: Props) {
  

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
