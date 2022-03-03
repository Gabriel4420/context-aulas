import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextProvider } from './contexts/Context'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Titulo da Pagina</h1>
        <hr />

        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
