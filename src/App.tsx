import { Home } from "./pages/Home";
import { ContainerStyle } from "./styles/container";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
    <GlobalStyle/>
    <ContainerStyle>
      
      <Home/>
      </ContainerStyle>
    </>
  );
}

export default App;
