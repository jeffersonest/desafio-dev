import React, { ElementType, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/auth.context";

type mainTypes = {
  children: ElementType;
};

const Main: React.FC = ({ children }: mainTypes) => {
  const { setUser, getLocalUser } = useAuth();
  const router = useRouter();
  const [init, setInit] = useState(false);

  useEffect(() => {
    async function checkToken() {
      if (!init) {
        const userData = await getLocalUser();
        if (userData) {
          setUser(userData);
          router.push("/home");
        } else {
          router.push("/");
        }
      }
    }
    checkToken();
    setInit(true);
  }, [getLocalUser, router, setUser, init]);

  return <section className="main">{children}</section>;
};

export default Main;
