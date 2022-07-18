import React, { useState }from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [appSite, setAppSite] = useState(false)
  //const appSiteState = appSite ? "" :  "App light"
  const appClass = appSite ? "App dark" : "App light"

  function changeAppSite() {
    if(appSite === false) {
      setAppSite(true)
    }else{
      setAppSite(false)
    }
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeAppSite}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
