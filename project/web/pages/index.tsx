import type { NextPage } from "next";
import { useEffect } from "react";

import GoogleButton from "react-google-button";
import { useAuth } from "../contexts/auth.context";

const Home: NextPage = () => {
  const { auth } = useAuth();

  function Auth() {
    auth();
  }

  return (
    <section className="login-page">
      <div>
        <GoogleButton onClick={() => Auth()} />
      </div>
    </section>
  );
};

export default Home;
