import axios from 'axios'
import './App.css'
import Search from './components/Search/Search'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  let getProduct=async()=>{
      try {
        let product= await axios.get('https://fakestoreapi.com/products')
        setData(product.data)
        
      } catch (error) {
        console.log(error);
      }
    
  }

  useEffect(() => {
    getProduct()
  }, [])
  
  // console.log(data);


  return (
  <>
   <h1 className="text-2xl font-bold ">
  
  <Search data={data}/>

    </h1>
  </>
  )
}

export default App
