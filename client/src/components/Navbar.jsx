import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="NovaDraft logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => navigate('/')}
      />

      {/* Middle nav (optional but useful) */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
        <Link to="/ai" className="hover:text-brand-500">Dashboard</Link>
        <Link to="/ai/write-article" className="hover:text-brand-500">Write</Link>
        <Link to="/ai/generate-images" className="hover:text-brand-500">Images</Link>
        <Link to="/changelog" className="hover:text-brand-500">Changelog</Link> {/* ← added */}
      </nav>

      {/* Auth */}
      <div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-brand-500 hover:bg-brand-600 text-white px-10 py-2.5"
          >
            Get started <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
