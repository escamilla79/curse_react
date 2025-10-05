import { MouseEvent, useState } from "react";

type Props = {
  data: string[];
};

function ListItem({ data }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number) => {
    console.log(i);
    setIndex(i);
  };
  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i)}
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
