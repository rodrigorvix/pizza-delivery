import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GlobalStorage } from './contexts/GlobalSorage'
import { RoutesPage } from './routes/RoutesPage'
import { ContainerStyle } from './styles/container'
import GlobalStyle from './styles/global'

function App() {
  return (
    <GlobalStorage>
      <GlobalStyle />

      <Header />
      <ContainerStyle>
        <RoutesPage />
      </ContainerStyle>
      <Footer />
    </GlobalStorage>
  )
}

export default App
