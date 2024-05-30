//import { useState } from 'react'
import IngredientsList from "./components/IngredientsList"
import TextContent from "./components/TextContent"

const testText = '1. Sekoita uunivuoassa peruna- \n \
sipulisekoitus ja mausteet. Sekoita \n \
joukkoon kinkku. Kaada päälle ruokakerma. \n \
2. Kypsennä uunin ala- / keskiosassa \n \
225 asteessa n. 1 tunti tai \n \
kunnes perunat ... \n'

function App() {
  return (
    <div className="container">
      <h1>Recipe Form</h1>
      <IngredientsList />
      <TextContent textContent={testText}/>
    </div>
  )
}

export default App
