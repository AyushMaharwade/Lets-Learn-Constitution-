import { useState } from "react"

const Login = () => {
    const[data,setData] = useState({
        email:'',
        password:'',
    })

    const loginUser = (e) =>{
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={loginUser}>
            <label>Email</label>
            <input type="text" placeholder="Enter Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
            <label>Password</label>
            <input type="text" placeholder="Enter Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
            <button type="onSubmit">Login</button>
        </form>
    </div>
  )
}

export default Login