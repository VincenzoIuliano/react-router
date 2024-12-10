import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className='menu'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Lista dei post</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}