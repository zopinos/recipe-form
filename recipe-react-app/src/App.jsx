import { EditableHeader1 } from "./components/AutoResizeTextarea"
import IngredientsList from "./components/IngredientsList"
import TextContent from "./components/TextContent"

function App() {
  return (
    <div className="container">
      <EditableHeader1 placeholder={'Recipe Title'} />
      <IngredientsList />
      <TextContent />
      <button className="button button-add-item" type="button">
        <span className="material-symbols-outlined">
          add_circle
        </span>
      </button>
    </div>
  )
}

export default App
