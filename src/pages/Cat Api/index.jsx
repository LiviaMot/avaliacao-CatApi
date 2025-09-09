import { Link } from 'react-router-dom'
import api from '../../api/api'
import './style.css'
import { useEffect, useState } from 'react'

export default function CatApi() {
  const [imagemUrl, setImagemUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  async function buscarGato() {
    setIsLoading(true)
    setError(null)
    try {
      const response = await api.get('/images/search')
      setImagemUrl(response.data[0].url)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    buscarGato()
  }, [])

  if (error) {
    return (
      <div className='card-gato erro'>
        <h2>Deu ruim!</h2>
        <p>Não foi possivel buscar um gatinho agora.</p>
        <button onClick={buscarGato}>Tentar Novamente</button>
      </div>
    )
  }

  return (
    <>
      <h1>Buscador de Gatos</h1>
      <div>
        <div>
          {isLoading ? (
            <p>Procurando...</p>
          ) : (
            <img src={imagemUrl} alt="Um gatinho aleatório" />
          )}
        </div>

        <button onClick={buscarGato} disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar Novo Gato'}
        </button>
      </div>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </>
  )
}