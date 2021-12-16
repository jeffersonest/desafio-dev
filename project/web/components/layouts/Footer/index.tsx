import React from "react";
import { useAuth } from "../../../contexts/auth.context";

const Footer: React.FC = () => {
  const { user } = useAuth();
  return (
    <section className="footer">{`${
      user.email !== undefined ? user.email : ""
    } Challenge 2021`}</section>
  );
};

export default Footer;
