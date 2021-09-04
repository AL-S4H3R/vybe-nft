import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>
    )
} 

const root = document.getElementById('root')

render(<App />, root)

