import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Admin() {
  const [stats, setStats] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get('/api/admin/stats'),
      axios.get('/api/admin/users?limit=10')
    ]).then(res => {
      setStats(res[0].data)
      setUsers(res[1].data.users)
    }).catch(console.error)
  }, [])

  if (!stats) return <div>Loading admin dashboard...</div>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-cyan-500 p-4 rounded bg-gray-900">
          <h2 className="text-xl font-semibold text-cyan-300">Total Users</h2>
          <p className="text-4xl font-bold">{stats.total_users}</p>
        </div>
        <div className="border border-cyan-500 p-4 rounded bg-gray-900">
          <h2 className="text-xl font-semibold text-cyan-300">Active Jobs</h2>
          <p className="text-4xl font-bold">{stats.active_jobs}</p>
        </div>
        <div className="border border-cyan-500 p-4 rounded bg-gray-900">
          <h2 className="text-xl font-semibold text-cyan-300">Revenue (KES)</h2>
          <p className="text-4xl font-bold">{stats.revenue.toLocaleString()}</p>
        </div>
      </div>
      <div className="border border-cyan-500 p-6 rounded bg-gray-900">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Recent Users</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-cyan-900">
              <th className="py-2">Name</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b border-gray-800">
                <td className="py-2">{u.full_name}</td>
                <td>{u.phone_number}</td>
                <td>{u.role}</td>
                <td>{new Date(u.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
