
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



  const Apicalluseeffect = () => {
      
     const [data , setData] = useState([])

     useEffect(() => {
          
        const fetchData = async() => {
           
             const res = await fetch("https://jsonplaceholder.typicode.com/users")
             const maindata = await res.json()

             setData(maindata)

        }

        fetchData()
         
     })

     return(
              
        <>
         
              <div className="container">
                <div className="row">
                     
                     {
                 
                 data.map((cval) => {
                   
                    return(

                           <>
                           
                           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cval.url} />
      <Card.Body>
        <Card.Title>{cval.name}</Card.Title>
        <Card.Text>
          
           {cval.address.street}

        </Card.Text>
        <Button variant="primary">Click Me</Button>
      </Card.Body>
    </Card>

                           
                           </>

                    )

                 })

                     }


                </div>
              </div>
        
        </>

     )
     
  }

  export default Apicalluseeffect;