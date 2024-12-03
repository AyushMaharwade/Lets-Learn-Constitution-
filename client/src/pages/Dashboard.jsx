import { useContext } from "react"
import {UserContext} from "../../context/userContext"

const Dashboard = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h1>DashBoard</h1>
      {!!user && (<h2> hi {user.name}</h2>)}
      
    </div>
  )
}

export default Dashboard