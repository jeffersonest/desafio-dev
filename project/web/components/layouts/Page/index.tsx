import React, { ElementType } from "react";

type pageTypes = {
  children: ElementType;
};

const Page: React.FC = ({ children }: pageTypes) => {
  return <section className="page">{children}</section>;
};

export default Page;
