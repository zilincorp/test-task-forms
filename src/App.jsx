import {SignIn} from "./Containers/SignIn/SignIn";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "./Containers/SignUp/SignUp";
import {Layout} from "./Containers/Layout/Layout";
import {useState} from "react";


const initialState = {
  name: "",
  password: "",
}

function App() {
  const [credentials, setCredentials] = useState(initialState)

  function addCredentials(name, password) {
    setCredentials({...credentials, name: name, password: password})
  }

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<SignUp addCredentials={addCredentials}/>}/>
        <Route path='/signin' element={<SignIn credentials={credentials}/>}/>
      </Routes>
    </Layout>
  )
}

export default App
