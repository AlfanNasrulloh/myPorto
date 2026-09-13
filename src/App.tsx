import './App.css'

function App() {

  return (
    <div className='bg-zinc-100'>
      <ul className='flex flex-nowrap justify-center bg-white/
      80 rounded-md m-3 mx-auto p-3 w-90 shadow-lg fixed backdrop-blur-md left-1/2 -translate-x-1/2 z-50'>
          <li className="px-4 py-2 text-zinc-600 hover:font-medium rounded-lg cursor-pointer transition-all ease-in-out hover:bg-white hover:text-zinc-900 hover:scale-105 hover:shadow-md">
    Home
  </li>
          <li className='px-4 py-2 text-zinc-600 hover:font-medium rounded-lg cursor-pointer transition-all ease-in-out hover:bg-white hover:text-zinc-900 hover:scale-105 hover:shadow-md'>About</li>
          <li className='px-4 py-2 text-zinc-600 hover:font-medium rounded-lg cursor-pointer transition-all ease-in-out hover:bg-white hover:text-zinc-900 hover:scale-105 hover:shadow-md'>Project</li>
          <li className='px-4 py-2 text-zinc-600 hover:font-medium rounded-lg cursor-pointer transition-all ease-in-out hover:bg-white hover:text-zinc-900 hover:scale-105 hover:shadow-md'>Contact</li>
      </ul>
    </div>
  )
}

export default App
