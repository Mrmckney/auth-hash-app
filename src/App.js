import { useState } from 'react'
import 'antd/dist/antd.css'
import Signup from './components/Signup'
import Login from './components/Login'
import ProtectedForm from './components/ProtectedForm'

function App() {

  const [user, setUser] = useState()
  const [returningUser, setReturningUser] = useState(false)

  if(!user) {
    return (
      <>
        {!returningUser 
        ?
          <Signup setUser={setUser} setReturningUser={setReturningUser} />
        :
          <Login setUser={setUser} setReturningUser={setReturningUser} />
        }
      </>
    )
  }
  return (
    <>
     <ProtectedForm />
    </>
  )
}

export default App
