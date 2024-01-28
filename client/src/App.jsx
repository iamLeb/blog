import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Home from "./views/pages/Home.jsx";
import Front from "./views/layouts/Front.jsx";
import Single from "./views/pages/Single.jsx";
import Admin from "./views/layouts/Admin.jsx";
import Login from "./views/pages/authentication/Login.jsx";
import Register from "./views/pages/authentication/Register.jsx";
function App() {

  return (
      <>
          <Browser>
              <Routes>
                  <Route path="" element={<Front />}>
                    <Route path="" element={<Home />}/>
                    <Route path="post/show" element={<Single />}/>
                    {/*  authentication page */}
                    <Route path="login" element={<Login />}/>
                    <Route path="register" element={<Register />}/>
                  </Route>
              </Routes>
          </Browser>
      </>
  )
}

export default App
