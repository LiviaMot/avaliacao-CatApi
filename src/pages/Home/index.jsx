import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Olá</h1>

      <Link to="/catApi">
        <button type="button">Cat Api</button>
      </Link>
    </>
  )
}