import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const roleMap = {
  alunos: { label: 'Alunos', key: 'alunos' },
  professores: { label: 'Professores', key: 'professores' },
  coordenadores: { label: 'Coordenadores', key: 'coordenadores' },
  diretor: { label: 'Diretor', key: 'diretor' },
}

export default function ListPage({ role }) {
  const ctx = useContext(GlobalContext)
  const mapping = roleMap[role]
  const items = mapping ? ctx[mapping.key] || [] : []

  return (
    <div>
      <h4>{mapping ? mapping.label : 'Lista'}</h4>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan={2} className="text-muted">Nenhum cadastrado</td>
            </tr>
          )}
          {items.map((n, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{n}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
