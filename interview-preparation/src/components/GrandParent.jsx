import Prop1 from "./Prop1"

 const GrandParent = () => {

    const data = "Hello Iam Vikrant"
 
    return(
        
        <>

      <h1>GrandParent</h1>       

      <Prop1 data = {data}/>
        
        </>
 
    )

 }

 export default GrandParent