import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <section className='not_found'>
        <h1>404</h1>
        <p>Pagina non trovata</p>
        <Link to="/" >torna alla home</Link>
      </section>
    </main>
  )
}