import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function JobBoard() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios.get('/api/jobs?limit=20').then(res => setJobs(res.data.jobs)).catch(console.error)
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Job Board</h1>
      <div className="space-y-4">
        {jobs.map(job => (
          <Link key={job.id} to={`/jobs/${job.id}`} className="block border border-cyan-500 p-4 rounded bg-gray-900 hover:bg-gray-800">
            <h2 className="text-xl font-semibold text-cyan-300">{job.title}</h2>
            <p className="text-sm text-gray-400">Budget: KES {job.budget} | Deadline: {job.deadline}</p>
            <p className="mt-2">{job.description.substring(0, 100)}...</p>
            <div className="mt-2 flex gap-2">
              {job.skill_tags?.map(tag => (
                <span key={tag} className="px-2 py-1 bg-cyan-900 text-cyan-300 text-xs rounded">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
