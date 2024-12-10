import { BrowserRouter , Routes , Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
