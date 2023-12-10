import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

class Header extends Component {
  state = {isShow: false}

  componentDidMount() {
    const {isShow} = this.props
    if (isShow !== undefined) {
      this.setState({isShow: true})
    }
  }

  onSearch = event => {
    const {searchMovie} = this.props
    searchMovie(event.target.value)
  }

  searchClick = () => {
    const {history} = this.props
    if (history.location.pathname !== '/search') {
      history.push('/search')
    } else {
      const {getSearchList} = this.props
      getSearchList()
    }
  }

  render() {
    const {isShow} = this.state
    console.log('head')
    return (
      <nav>
        <ul className="header-list">
          <li className="header-logo-card">
            <Link to="/">
              <img
                className="header-website-logo"
                src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1656594712/Group_7399_wrvd0n.png"
                alt="website logo"
              />
            </Link>
            <div className="header-links">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/popular">
                <p>Popular</p>
              </Link>
            </div>
          </li>
          <li className="header-logo-card">
            {isShow && <input type="search" onChange={this.onSearch} />}
            <button
              onClick={this.searchClick}
              testid="searchButton"
              type="button"
            >
              <HiOutlineSearch />
            </button>
            <Link to="/account">
              <img
                alt="profile"
                src="https://res.cloudinary.com/delrn2vxa/image/upload/v1700967713/Avatar_eqbel6.png"
              />
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)
