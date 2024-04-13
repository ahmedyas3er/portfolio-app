import React, {useEffect , useState  } from 'react';
import { BrowserRouter, Route, Routes }from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import "./App.css";
import 'animate.css';






import Home from './Home'
import NavBar from './NavBar'
const App = () => {


  //loading

  const [loading , setLoading] = useState(false);
  
          useEffect(() =>{
             setLoading(true);
  
         setTimeout(()=>{
             setLoading(false)
               }, 2000 )
  
   },[])

  return (
    <div>
       <BrowserRouter>

       

  
{loading ?
  <div className='loading'>
<ScaleLoader color= {"rgb(9, 51, 175)"} loading = {loading} height={100}  margin={10} />
  </div>:
    <>

<NavBar />
  
  <Routes>
  <Route path='/' element={<Home />} />
 </Routes>
 </>
  
 }
  
  </BrowserRouter>
  
      
    </div>
  )
}

export default App
