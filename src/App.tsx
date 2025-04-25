import './App.css'
import PhoneScene from './components/PhoneScene'

function App() {
  return (
    <div className="showcase-container">
      <header className="showcase-header">
        <h1>App Showcase</h1>
        <p className="subtitle">
          A modern, sleek application interface for your next project
        </p>
      </header>
      <main className="showcase-content">
        <PhoneScene />
      </main>
    </div>
  )
}

export default App
