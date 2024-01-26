import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Home from "./views/pages/Home.jsx";
import Front from "./views/layouts/Front.jsx";
import Single from "./views/pages/Single.jsx";


function App() {

  return (
      <>
          <Browser>
              <Routes>
                  <Route path="" element={<Front />}>
                    <Route path="" element={<Home />}/>
                    <Route path="post/show" element={<Single />}/>
                  </Route>
              </Routes>
          </Browser>
      </>
  )
}

export default App
