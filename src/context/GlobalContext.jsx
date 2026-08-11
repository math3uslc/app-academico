import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
  const [alunos, setAlunos] = useState([])
  const [professores, setProfessores] = useState([])
  const [coordenadores, setCoordenadores] = useState([])
  const [diretor, setDiretor] = useState([])

  const addAluno = (name) => setAlunos((p) => [...p, name])
  const addProfessor = (name) => setProfessores((p) => [...p, name])
  const addCoordenador = (name) => setCoordenadores((p) => [...p, name])
  const addDiretor = (name) => setDiretor((p) => [...p, name])

  return (
    <GlobalContext.Provider value={{
      alunos,
      professores,
      coordenadores,
      diretor,
      addAluno,
      addProfessor,
      addCoordenador,
      addDiretor,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
