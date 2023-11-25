import {Switch, Route, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/notfound" component={NotFound} />
    <Redirect to="notfound" />
  </Switch>
)

export default App
