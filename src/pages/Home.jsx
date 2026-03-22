export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-cyan-400">Welcome to KFIE</h1>
      <p className="text-lg mb-6">
        Connecting Kenyan freelancers with global opportunities. AI-powered matching, secure escrow payments, and reputation scoring.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="border border-cyan-500 p-6 rounded bg-gray-900">
          <h2 className="text-xl font-semibold mb-2">For Freelancers</h2>
          <p>Showcase your skills, get matched with high-quality jobs, and get paid securely.</p>
        </div>
        <div className="border border-cyan-500 p-6 rounded bg-gray-900">
          <h2 className="text-xl font-semibold mb-2">For Clients</h2>
          <p>Post jobs, receive vetted applicants, and pay only when work is completed.</p>
        </div>
        <div className="border border-cyan-500 p-6 rounded bg-gray-900">
          <h2 className="text-xl font-semibold mb-2">AI-Powered</h2>
          <p>Our engine matches the right talent to the right job using skill analysis and reputation.</p>
        </div>
      </div>
    </div>
  )
}
