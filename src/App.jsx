import { Route, Routes } from "react-router-dom"
import ColorGuess from "./Day1/colorGuess"
import LandingPage from "./Landing"
import DynamicDropdown from "./Day2/Dropdowns"


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/ColorGuess" element={<ColorGuess />} /> 
      <Route path="/DynamicDropdown" element={<DynamicDropdown />} />

    </Routes>
  )
}

export default App
