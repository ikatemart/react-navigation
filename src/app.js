import { Route, Router } from './router'
import Navbar from './navbar'
import './app.css'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__content">
          <Route href="/">Home</Route>
          <Route href="/about">About</Route>
          <Route href="/features">Features</Route>
          <Route href="/projects">Projects</Route>
          <Route href="/contacts">Contacts</Route>
        </div>
      </div>
    </Router>
  )
}
