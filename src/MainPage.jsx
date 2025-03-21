import waspLogo from './waspLogo.png'
import './Main.css'

import { Outlet } from 'react-router-dom'
import { Link } from 'wasp/client/router'

export const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="py-20 flex-1 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img src={waspLogo} alt="wasp" className="max-h-[200px]" />
        </div>

        <h2 className="font-medium">
          Welcome to Wasp - you just started a new app!
        </h2>
        <h3 className="font-normal mb-12">
          This is page <code className="rounded px-1 bg-gray-100 font-mono">MainPage</code> located at route <code className="rounded px-1 bg-gray-100 font-mono">/</code>.
          Open <code className="rounded px-1 bg-gray-100 font-mono">src/MainPage.jsx</code> to edit it.
        </h3>

        <button className="rounded text-xl py-4 px-8 text-center font-bold border-2 border-[#bf9900] bg-[#bf9900] text-[#f4f4f4]">
          <Link to="/demo-app">
            <span>Demo App</span>
          </Link>
        </button>

      </main>
      <Outlet />
    </div>
  )
}
