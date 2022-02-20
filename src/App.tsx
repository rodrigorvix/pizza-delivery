import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ContainerStyle } from "./styles/container";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
    <GlobalStyle/>

    <Header/>
    <ContainerStyle>
      <Home/>
      </ContainerStyle>
    <Footer/>
    </>
  );
}

export default App;
