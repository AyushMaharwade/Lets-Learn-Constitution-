import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
            const {email, password} = data
            try {
                const {data} = await axios.post('/login', {
                    email, password
                });
                if(data.error) {
                    toast.error(data.error)
                } else {
                    setData({});
                    navigate('/profile')
                }
            }catch (error){
                console.log(error)
            }
    }

    return (

        <div className="flex justify-center items-center min-h-screen" >
            <div className="w-full max-w-md h-full bg-white shadow-lg rounded-lg p-6">
                {/* Background Image Layer */}
                <div className="absolute inset-0 bg-[url('/login.jpg')] bg-cover bg-center opacity-40 blur-sm -z-10">
              </div>
              <div className="absolute inset-0 bg-orange-400 opacity-10 blur-md -z-10"></div>

            
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            <form onSubmit={loginUser} className="space-y-4">
                {/* Email Input */}
                <div className="mt-10">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
                            required
                        />
                    </div>
                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
                            required
                        />
                    </div>
                </div>
                {/* Submit Button */}
                <div>
                    <button
                        type="onSubmit"
                        className="w-full bg-[#FB8500] text-white py-2 rounded-lg hover:bg-[#ff8e15] transition mt-10"
                    >
                        Login
                    </button>
                </div>
            </form>
            <p className="text-center mt-4 text-gray-600">
                Don’t have an account?{" "}
                <a
                    href="/register"
                    className="text-[#FB8500] hover:underline"
                >
                    Sign Up
                </a>
            </p>
        </div>
        </div >
    )
}

export default Login