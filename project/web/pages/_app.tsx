import "../styles/globals.scss";
import type { AppProps } from "next/app";
import CustomHeader from "../components/layouts/Header";
import Main from "../components/layouts/Main";
import Footer from "../components/layouts/Footer";
import Page from "../components/layouts/Page";
import AuthProvider from "../contexts/auth.context";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Main>
          <CustomHeader />
          <Page>
            <Component {...pageProps} />
          </Page>
          <Footer />
        </Main>
      </AuthProvider>
    </>
  );
}

export default App;
