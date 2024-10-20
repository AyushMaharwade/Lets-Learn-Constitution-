import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const[data,setData] = useState({
        name:'',
        email:'',
        password:'',
    })
    
    const registerUser = async (e) =>{
        e.preventDefault();
        const {name, email, password} = data
        try {
        const {data} = await axios.post('./register',{
            name, email, password
        })
        if(data.error){
            toast.error(data.error)
        }else{
            setData({})
            toast.success('Login Successful.  Welcome!')
            navigate('/login')
        }
        } catch (error) {
         console.log(error)   
        }
    }

  return (
    <div>
        <form onSubmit={registerUser}>
            <label>Name</label>
            <input type="text" placeholder="Enter Name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}></input>
            <label>Email</label>
            <input type="text" placeholder="Enter Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
            <label>Password</label>
            <input type="text" placeholder="Enter Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
            <button type="submit" className="px-2 py-1 border-2px bg-orange-400 rounded">Submit</button>
        </form>
    </div>
  )
}

export default Register