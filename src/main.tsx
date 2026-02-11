import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Import other pages
import { BhavaniPage } from './pages/BhavaniPage'
import { MetturPage } from './pages/MetturPage'
import { AnthiyurPage } from './pages/AnthiyurPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Main multi-center experience */}
                <Route path="/" element={<App />} />

                {/* Specific center pages */}
                <Route path="/bhavani" element={<BhavaniPage />} />
                <Route path="/mettur" element={<MetturPage />} />
                <Route path="/anthiyur" element={<AnthiyurPage />} />

                {/* Fallback to home */}
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
