import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">App Acadêmico</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Cadastrar</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/alunos">Alunos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/professores">Professores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/coordenadores">Coordenadores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/diretor">Diretor</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/alunos" element={<ListPage role="alunos" />} />
            <Route path="/professores" element={<ListPage role="professores" />} />
            <Route path="/coordenadores" element={<ListPage role="coordenadores" />} />
            <Route path="/diretor" element={<ListPage role="diretor" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
