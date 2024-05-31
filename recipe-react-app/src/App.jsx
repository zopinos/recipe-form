//import { useState } from 'react'
import AutoResizeTextarea from "./components/AutoResizeTextarea"
import IngredientsList from "./components/IngredientsList"
//import TextContent from "./components/TextContent"
/* 
const testText =
`1.  Sekoita uunivuoassa peruna
    sipulisekoitus ja mausteet. Sekoita
    joukkoon kinkku. Kaada päälle ruokakerma. \n
2.  Kypsennä uunin ala- / keskiosassa
    225 asteessa n. 1 tunti tai
    kunnes perunat ...
`
 */
function App() {
  return (
    <div className="container">
      <h1>Recipe Form</h1>
      <IngredientsList />
      <AutoResizeTextarea />
      <button className="button button-add-item" type="button">
        <span className="material-symbols-outlined">
          add_circle
        </span>
      </button>
    </div>
  )
}

export default App
