import React, { useEffect } from "react";
import AppRouter from "components/Router";
import {useState} from "react"
import { authService } from 'fbase';

function App() {
  const [init, setInit]=useState(false); //앱이 시작하면 로그인이 된상태인지 확인후 component요소 반환
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])
  return (
  <>
    {init ?<AppRouter isLoggedIn={isLoggedIn} />: "initializing..."}
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
  </>
  )
}

export default App;