import {Link} from 'react-router-dom'

const Header = () => {
  console.log('head')
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <img alt="website logo" src="" />
          </li>
        </Link>
        <li>
          <Link to="/">
            <p>Home</p>
            <p>Popular</p>
          </Link>
        </li>
        <li>
          <button type="button">searchButton</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
