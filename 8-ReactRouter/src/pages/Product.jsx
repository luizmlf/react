import { useParams } from "react-router-dom"

const Product = () => {

  const {id} = useParams(); 

  return (
    <>

      <h2>Id do produto: {id}</h2>
    
    </>
  )
}

export default Product