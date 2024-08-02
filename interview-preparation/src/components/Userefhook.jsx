import { useRef } from "react";


  const Userefhook =  () => {
   
    const imgref = useRef()

    const vikimg = () => {
        
        imgref.current.src = "https://png.pngtree.com/background/20230612/original/pngtree-fairytale-nature-hd-background-picture-image_3174247.jpg"

    }

    return(
      
        <>
         
         <div className="container">
            <div className="row">

                <button className="btn btn-dark" onClick={vikimg}>Change</button>
                   
                   <img style={{height:"20rem",width:"25rem"}} ref={imgref} src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg" alt="" />

      

            </div>
         </div>
        
        </>

    )

  }


  export default Userefhook;