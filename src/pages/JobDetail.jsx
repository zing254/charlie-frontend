import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function JobDetail() {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [applications, setApplications] = useState([])

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then(res => setJob(res.data))
    axios.get(`/api/applications?job_id=${id}`).then(res => setApplications(res.data.applications || []))
  }, [id])

  if (!job) return <div>Loading...</div>

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/jobs" className="text-cyan-400 hover:underline mb-4 block">← Back to jobs</Link>
      <h1 className="text-3xl font-bold mb-4 text-cyan-300">{job.title}</h1>
      <p className="mb-2"><strong>Budget:</strong> KES {job.budget}</p>
      <p className="mb-2"><strong>Deadline:</strong> {job.deadline}</p>
      <p className="mb-4"><strong>Client:</strong> {job.client_id}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="whitespace-pre-wrap">{job.description}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex gap-2 flex-wrap">
          {job.skill_tags?.map(tag => (
            <span key={tag} className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded">{tag}</span>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Applications ({applications.length})</h2>
        <div className="space-y-3">
          {applications.map(app => (
            <div key={app.id} className="border border-cyan-700 p-3 rounded bg-gray-900">
              <p><strong>Freelancer:</strong> {app.freelancer_id}</p>
              <p>{app.cover_letter}</p>
              <p><strong>Proposed Rate:</strong> KES {app.proposed_rate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
