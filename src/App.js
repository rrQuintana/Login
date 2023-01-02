import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./components/LandingPage";
import Login from "./components/Login/Login";
import Error404 from "./components/Error404";
import Logged from "./components/Logged";

import firebaseApp from "./firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp)

function App() {
  const [user, setUser] = React.useState(null);

  async function getRol(uid){
    const docuRef = doc(firestore, `/usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef)
    const infoFinal = docuCifrada.data().rol;
    return infoFinal
  }

  function setUserWithFirebasweAndRol(usuarioFirebase){
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol
      }
      setUser(userData)
    })    
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){      
      if(!user){
        setUserWithFirebasweAndRol(usuarioFirebase)
      }
    }else{
      setUser(null)
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<Logged user={user} ></Logged>}></Route>
        ) : (
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        )}
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
