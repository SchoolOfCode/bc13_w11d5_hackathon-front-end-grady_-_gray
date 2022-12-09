// import LoginButton from "../Auth0/login";
// import LogoutButton from "../Auth0/logout";
// import Profile from "../Auth0/profile";
import "./App.css";
// import CancelLaunchButton from "../CancelLaunchButton"
import React from "react";
// import {useState} from "react";
import { useGet } from "../../hooks/useGet/useGet";


function App() {
  // const [userName, setUserName] = useState(false)

  const {response, error} = useGet("https://operationbarrybackend.onrender.com/items")
  console.log(response, error)


  // //function handleClick(e){
  //   e.window.open("https://media.tenor.com/v2n3rVxTeJQAAAAd/jeff-goldblum.gif")
  //   console.log(e)
  // }

  return (
    <div className="App">
      <header className="App-header">Ooops!</header>
      
      <p>{JSON.stringify(response)}</p>
      
      
      
      {/* <Profile setUserName={setUserName}/>
 
      <div className="button-container">
        <LoginButton  />
        <LogoutButton />
      {userName && (
        <CancelLaunchButton handleClick={handleClick}/>)}
      </div> */}
      
      {/* </div> */}
    </div>
  );
}
export default App;
