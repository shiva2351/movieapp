import {Switch, Route, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import AccountRoute from './components/AccountRoute'
import PopularRoute from './components/PopularRoute'
import './App.css'
import MovieItemDetails from './components/MovieItemDetails'
import SearchRoute from './components/SearchRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/account" component={AccountRoute} />
    <ProtectedRoute exact path="/popular" component={PopularRoute} />
    <ProtectedRoute exact path="/search" component={SearchRoute} />
    <ProtectedRoute exact path="/movies/:id" component={MovieItemDetails} />
    <Route exact path="/notfound" component={NotFound} />
    <Redirect to="/notfound" />
  </Switch>
)

export default App
