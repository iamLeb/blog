import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Front from "./views/layouts/Front.jsx";
import axios from 'axios';
import "./index.css"
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Dashboard from "./views/admin/Dashboard.jsx";
import Admin from "./views/Layouts/Admin.jsx";
function App() {
    axios.defaults.baseURL = "http://localhost:3001";
    axios.defaults.withCredentials = true;
  return (
      <>
          <Browser>
              <Routes>
                  <Route path="" element={<Front />}>
                    <Route path="" element={<Home />}/>
                    <Route path="/about" element={<About />}/>

                    {/*authentication*/}
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                  </Route>

                  <Route path="/admin" element={<Admin />}>
                      <Route path="" element={<Dashboard />}/>
                  </Route>
              </Routes>
          </Browser>
      </>
  )
}

export default App
