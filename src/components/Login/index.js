import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

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
    }
  }

  onSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/home')
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <form onSubmit={this.onSubForm}>
          <label htmlFor="userId">USERNAME</label>
          <input
            onChange={this.onChangeUser}
            id="userId"
            value={username}
            placeholder="Username"
            type="text"
          />
          <label htmlFor="passId">PASSWORD</label>
          <input
            onChange={this.onChangePass}
            id="passId"
            value={password}
            placeholder="Password"
            type="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
