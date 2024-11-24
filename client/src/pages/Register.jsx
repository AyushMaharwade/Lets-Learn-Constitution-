import { useState } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data
        try {
            const { data } = await axios.post('./register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Login Successful.  Welcome!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md h-full bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={registerUser} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={data.username}
                            onChange={(e) => setData({ ...data, username: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#FB8500] text-white py-2 rounded-lg hover:bg-[#f5a244] transition"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4 text-gray-600">
                    <a
                        href="/login"
                        className="text-[#FB8500] hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>




    )
}

export default Register