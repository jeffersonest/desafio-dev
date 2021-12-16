/* eslint-disable @next/next/no-img-element */
import React from "react";
import UserMenu from "../../elements/UserMenu";

const CustomHeader: React.FC = () => {
  return (
    <section className="header">
      <div>
        {" "}
        <img src="/logo.png" alt="MDN logo"></img>
        <h1>...</h1>
      </div>
      <UserMenu />
    </section>
  );
};

export default CustomHeader;
