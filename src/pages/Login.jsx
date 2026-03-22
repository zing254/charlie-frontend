import { useState } from 'react'

export default function Login() {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // MVP: mock registration or verification
    alert('OTP verified! Token would be stored.')
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">Phone Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Phone Number (+254...)</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-cyan-500 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-cyan-500 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded"
        >
          Verify & Login
        </button>
      </form>
    </div>
  )
}
