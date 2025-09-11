import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import './style.css';
import { useEffect, useState } from 'react';

export default function CatApi() {
  const [gatos, setGatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function buscarGatos() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get('/images/search?limit=12&has_breeds=1');
      setGatos(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarGatos();
  }, []);

  if (error) {
    return (
      <div className='container erro'>
        <h2>Deu ruim!</h2>
        <p>Não foi possível buscar os gatinhos agora.</p>
        <button onClick={buscarGatos}>Tentar Novamente</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Galeria de Gatos</h1>

      <div className="header-actions">
        <button onClick={buscarGatos} disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar Nova Galeria'}
        </button>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </div>

      {isLoading ? (
        <p className="loading-text">Procurando gatinhos...</p>
      ) : (
        <div className="gallery-container">
          {gatos.map((gato) => (
            <div key={gato.id} className="gallery-item">
              <img src={gato.url} alt={gato.breeds[0]?.name || 'Gato'} />
              <p className="breed-name"><strong>Raça:</strong> {gato.breeds[0]?.name || 'Raça não definida'}</p>
            <button onClick={() => { navigate("/details/"+gato.id, {state: { id: gato.breeds[0]?.id }}) }}>
              Detalhes
            </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}