import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-200 to-green-200 px-8 md:px-14 lg:px-36 pb-10 pt-7">
      <Header />
      <Hero />
    </div>
  )

}

export default App
