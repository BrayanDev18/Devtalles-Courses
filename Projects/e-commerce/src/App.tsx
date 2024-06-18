import { Navbar } from "./Layouts/Navbar/Navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from "./pages/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router >
  )
}

export default App
