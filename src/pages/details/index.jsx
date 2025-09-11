import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const location = useLocation();
  const { id } = location.state || {}
  console.log(location.state)

    const [breed,setBreed] = useState(null);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds")
        .then(res => res.json())
        .then(data => {
            const b = data.find(item => item.id === id);
            setBreed(b);
        });
    }, [])
    if (!breed) return <p>Carregando...</p>;

    return (
        <div>
            <h2>{breed.name}</h2>
            <p><strong>Origem:</strong>{breed.origin}</p>
            <p><strong>Temperamento:</strong>{breed.temperament}</p>
            <p><strong>Expectativa de Vida:</strong>{breed.life_span} anos</p>
            <p>{breed.description}</p>
        </div>
    );
}
export default Details;