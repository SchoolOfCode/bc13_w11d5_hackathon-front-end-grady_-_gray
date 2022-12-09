// import LoginButton from "../Auth0/login";
// import LogoutButton from "../Auth0/logout";
// import Profile from "../Auth0/profile";
import "./App.css";
// import CancelLaunchButton from "../CancelLaunchButton"
import React, { useState } from "react";
// import {useState} from "react";
import { useGet } from "../../hooks/useGet/useGet";
import { Themecontext } from "../Contexts/Themecontext";
import Optionbar from "../Optionbar/Optionbar";
//import c from "classnames";

function App() {
  // const [userName, setUserName] = useState(false)
  const [theme, setTheme] = useState("light");

  const themes = {
    light: "light",
    dark: "dark",
  };

  const { response, error } = useGet(
    "https://operationbarrybackend.onrender.com/items"
  );
  console.log(response, error);

  // //function handleClick(e){
  //   e.window.open("https://media.tenor.com/v2n3rVxTeJQAAAAd/jeff-goldblum.gif")
  //   console.log(e)
  // }

  return (
    <Themecontext.Provider value={{ theme, setTheme, themes }}>
      <div className={theme}>
        <header className="App-header">Ooops!</header>

        <p>{JSON.stringify(response)}</p>
        <Optionbar></Optionbar>
        {/* <Profile setUserName={setUserName}/>
 
      <div className="button-container">
        <LoginButton  />
        <LogoutButton />
      {userName && (
        <CancelLaunchButton handleClick={handleClick}/>)}
      </div> */}

        {/* </div> */}
      </div>
    </Themecontext.Provider>
  );
}
export default App;
