import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export default function FormPage() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const { addAluno, addProfessor, addCoordenador, addDiretor } = useContext(GlobalContext)

  function handleSave(role) {
    const trimmed = name.trim()
    if (!trimmed) return

    if (role === 'aluno') addAluno(trimmed)
    if (role === 'professor') addProfessor(trimmed)
    if (role === 'coordenador') addCoordenador(trimmed)
    if (role === 'diretor') addDiretor(trimmed)

    setName('')

    // navigate to corresponding list
    if (role === 'aluno') navigate('/alunos')
    if (role === 'professor') navigate('/professores')
    if (role === 'coordenador') navigate('/coordenadores')
    if (role === 'diretor') navigate('/diretor')
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Cadastrar</h5>

        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome"
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => handleSave('aluno')}>Salvar Aluno</button>
          <button className="btn btn-secondary" onClick={() => handleSave('professor')}>Salvar Professor</button>
          <button className="btn btn-success" onClick={() => handleSave('coordenador')}>Salvar Coordenador</button>
          <button className="btn btn-warning" onClick={() => handleSave('diretor')}>Salvar Diretor</button>
        </div>
      </div>
    </div>
  )
}
