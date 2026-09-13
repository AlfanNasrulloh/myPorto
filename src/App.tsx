import './App.css'

function App() {

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
  <ul className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200/80 rounded-full px-4 py-2 shadow-lg shadow-zinc-200/50">
    <li className="px-4 py-1.5 text-sm text-zinc-600 font-medium rounded-full cursor-pointer transition-all duration-200 hover:text-zinc-900 hover:bg-zinc-100/80 hover:scale-105">
      Home
    </li>
    <li className="px-4 py-1.5 text-sm text-zinc-600 font-medium rounded-full cursor-pointer transition-all duration-200 hover:text-zinc-900 hover:bg-zinc-100/80 hover:scale-105">
      About
    </li>
    <li className="px-4 py-1.5 text-sm text-zinc-600 font-medium rounded-full cursor-pointer transition-all duration-200 hover:text-zinc-900 hover:bg-zinc-100/80 hover:scale-105">
      Project
    </li>
    <li className="px-4 py-1.5 text-sm text-zinc-600 font-medium rounded-full cursor-pointer transition-all duration-200 hover:text-zinc-900 hover:bg-zinc-100/80 hover:scale-105">
      Contact
    </li>
  </ul>
</nav>
  )
}

export default App
