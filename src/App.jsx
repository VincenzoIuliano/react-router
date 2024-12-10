import { BrowserRouter , Routes , Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import ContactUs from "./Pages/ContactUs"
import Nav from "./Layouts/Navbar"

function App() {

  return (
    <>
     <BrowserRouter>
        <Nav />
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
