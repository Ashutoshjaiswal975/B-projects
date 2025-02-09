
import { useEffect,  useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

 /**this part is dong the same work what conf.js is doing
  *  but this is not so good approach */ console.log(import.meta.env.VITE_APPWRITE_URL)

  // this state is developed for implement conditional rendering, because when we request somethig from networkState, or database we
  //we want rendering from loading state that use dis has acces front loading or not 
  const [loading, setLoading] = useState(true)
  //use for asking current uuser for changing the current state
  const dispatch = useDispatch //  this is the merger to combine redux with react

  //as soon this service get load then ask to the service that the user is loged in or not, for this use use effect
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, /**dependency array */ [])

 

  return !loading ? (
   <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div>
    <Header/>
    <main>
     TODO {/* <Outlet/> */}
    </main>
    <Footer/>
  </div>

  </div>
  ) : null
}

export default App
