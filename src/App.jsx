import { Route, Routes } from "react-router-dom"
import ColorGuess from "./Day1/colorGuess"

function App() {

  return (
    <Routes>
      <Route path="/" element={<ColorGuess />} /> 
    </Routes>
  )
}

export default App
