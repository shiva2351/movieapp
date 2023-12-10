import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'

class AccountRoute extends Component {
  logBtn = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Account</h1>
          <hr />
          <p>Member ship</p>
          <div>
            <p>@gmail</p>
            <p>password: ********s</p>
          </div>
          <hr />
          <p>Plan details</p>
          <div>
            <p>Premium</p>
            <p>Ultra HD</p>
          </div>
          <hr />
          <button onClick={this.logBtn} type="button">
            Logout
          </button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(AccountRoute)
