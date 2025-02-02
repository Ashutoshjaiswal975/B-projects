
import './App.css'

function App() {

 /**this part is dong the same work what conf.js is doing
  *  but this is not so good approach */ console.log(import.meta.env.VITE_APPWRITE_URL)
 

  return (
    <>
      <h1>app block with appwrite</h1>
    </>
  )
}

export default App
