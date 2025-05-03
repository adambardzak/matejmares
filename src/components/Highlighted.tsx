import React from "react";

type Props = {
  children: React.ReactNode;
};

const Highlighted = ({ children }: Props) => {
  return <span className="garamond-highlight">{children}</span>;
};

export default Highlighted; 