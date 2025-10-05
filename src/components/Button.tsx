import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isLoading}
        type="button"
        className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      >
        {isLoading ? "Cargando ..." : children}
      </button>
    </div>
  );
}

export default Button;
