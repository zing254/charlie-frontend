import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get('/api/profile').then(res => setUser(res.data)).catch(console.error)
  }, [])

  if (!user) return <div>Loading profile...</div>

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">My Profile</h1>
      <div className="border border-cyan-500 p-6 rounded bg-gray-900">
        <p><strong>Name:</strong> {user.full_name}</p>
        <p><strong>Phone:</strong> {user.phone_number} {user.phone_verified && '✓ Verified'}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Rating:</strong> {user.rating}/5 ({user.review_count} reviews)</p>
        <p><strong>Hourly Rate:</strong> KES {user.hourly_rate || 'Not set'}</p>
        <div>
          <strong>Skills:</strong>
          <div className="flex gap-2 mt-1 flex-wrap">
            {user.skill_tags?.map(tag => (
              <span key={tag} className="px-2 py-1 bg-cyan-900 text-cyan-300 rounded text-sm">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
