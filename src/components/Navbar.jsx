import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="border-b border-cyan-500 bg-black p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyan-400">KFIE</Link>
        <div className="space-x-6">
          <Link to="/jobs" className="hover:text-cyan-400">Jobs</Link>
          <Link to="/profile" className="hover:text-cyan-400">Profile</Link>
          <Link to="/admin" className="hover:text-cyan-400">Admin</Link>
          <Link to="/login" className="hover:text-cyan-400">Login</Link>
        </div>
      </div>
    </nav>
  )
}
