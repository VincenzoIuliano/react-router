import { BrowserRouter , Routes , Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import ContactUs from "./Pages/ContactUs"
import Nav from "./Layouts/Navbar"
import DefaultLayout from "./Layouts/DefaultLayout"
import PostsList from "./Pages/PostsList"
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
