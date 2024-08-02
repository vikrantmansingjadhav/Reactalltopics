import { useState } from "react";
import { useNavigate } from "react-router-dom";
   
   const Navigate = () => {

    const [name , setName] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
           
        e.preventDefault();

        if(!name || !password){

            setError("error")
            alert("please fill field")

        }else{
 
             setError("")

             navigate("/dashboard")

             localStorage.setItem("navigate component",JSON.stringify(name , password))

        }

    }
     
    return(
        
        <>
         
                   <div className="container">
                    <div className="row">
                         
                         <form action="">

                 <label htmlFor="">name</label>
                 <input type="text" name="name" id="name"
                 onChange={(e) => setName(e.target.value)} />



                 <label htmlFor="">password</label>
                 <input type="text" name="password" id="password"
                 onChange={(e) => setPassword(e.target.value)} />

                 <button className="btn btn-dark" onClick={handleSubmit}>Submit</button>


                         </form>

                    </div>
                   </div>
        
        </>

    )

   }

   export default Navigate;