import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = (props: Props) => {
  const { children } = props;
  return (
    <div
      className="Card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body"> {children} </div>
    </div>
  );
};

export default Card;
type CardBodyProps = {
  title: string;
  text?: string;
};
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}
