import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSubForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const apiurl = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify({username, password})}
    const response = await fetch(apiurl, options)
    const resData = await response.json()
    if (response.ok) {
      console.log(resData)
      this.onSuccess(resData.jwt_token)
    } else {
      console.log(resData, 'kk')
      this.setState({errorMsg: resData.error_msg})
    }
  }

  onSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-card">
        <div className="login-img-container">
          <img
            className="login-website-logo"
            src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1656594712/Group_7399_wrvd0n.png"
            alt="login website logo"
          />
        </div>
        <div className="login-f-container">
          <form onSubmit={this.onSubForm} className="login-form-card">
            <h1>login</h1>
            <label className="login-label" htmlFor="userId">
              USERNAME
            </label>
            <input
              className="login-input"
              onChange={this.onChangeUser}
              id="userId"
              value={username}
              placeholder="Username"
              type="text"
            />
            <label className="login-label" htmlFor="passId">
              PASSWORD
            </label>
            <input
              className="login-input"
              onChange={this.onChangePass}
              id="passId"
              value={password}
              placeholder="Password"
              type="password"
            />
            {errorMsg !== '' && <p>{errorMsg}</p>}
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
