import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Contador() {
  const [number, setNumber] = useState(0)

  return (
    <div>
      <h1>Contador de Cliques</h1>

      <p>{number}</p>
      <button onClick={ () => {
        setNumber(number + 1)
      } }>Aumentar</button>

      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </div>
  )
}