import React, { ReactNode } from "react";

type Props = {
  isLoading: boolean;
  children: ReactNode;
  onClick: () => void;
};

function Button({ isLoading, children, onClick }: Props) {
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
