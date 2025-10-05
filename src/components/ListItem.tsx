import { MouseEvent, useState } from "react";

type Props = {
  data: string[];
  onSelect?: (element: string) => void;
};

function ListItem({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, element: string) => {
    console.log(i);
    setIndex(i);
    onSelect?.(element);
  };
  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i, element)}
          key={element}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default ListItem;
