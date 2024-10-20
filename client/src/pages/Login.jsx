import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const[data,setData] = useState({
        email:'',
        password:'',
    })

    const loginUser = (e) =>{
        e.preventDefault()
        axios.get('/')
    }

  return (
    <div>
        <form onSubmit={loginUser}>
            <label>Email</label>
            <input type="text" placeholder="Enter Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
            <label>Password</label>
            <input type="text" placeholder="Enter Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
            <button type="onSubmit" className="px-2 py-1 border-2px bg-orange-400 rounded">Login</button>
        </form>
    </div>
  )
}

export default Login