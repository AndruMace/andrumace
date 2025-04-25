import './App.css'
import { Route, Switch, useLocation } from 'wouter'
import { useEffect } from 'react'
import HomePage from './components/HomePage'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  return (
    <div className="showcase-container">
      <header className="showcase-header">
        <h1>PawPath</h1>
        <p className="subtitle">
          {/* A must have for pet owners */}
        </p>
      </header>
      <main className="showcase-content">
        <Switch>
          <Route path="/pawpath" component={HomePage} />
          <Route path="/pawpath/privacy" component={PrivacyPolicy} />
          <Route path="/">
            <Redirect to="/papwath" />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

// Redirect component to handle routing to the main page
function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation()
  
  useEffect(() => {
    setLocation(to)
  }, [setLocation, to])
  
  return null
}

export default App
