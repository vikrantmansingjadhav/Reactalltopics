import { useNavigate } from "react-router-dom"


 const Dashboard = () => {
    
    const navigate = useNavigate()

    const backpage = () => {
          
         navigate(-1)

    }

    return(
          
        <>
         
          <h1> Welcome To Dashboard</h1>

          <button onClick={backpage} className="btn btn-danger">Back To Navigate Page</button>
        
        </>
         
    )

 }

 export default Dashboard