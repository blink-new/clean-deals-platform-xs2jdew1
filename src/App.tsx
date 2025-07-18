import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { DealPage } from '@/pages/DealPage'
import { UserPage } from '@/pages/UserPage'
import { DealsPage } from '@/pages/DealsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/deal/:id" element={<DealPage />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App