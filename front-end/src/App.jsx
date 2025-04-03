import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Register from "./pages/Register";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Header user={user} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
        <Route path="/register" element={<Register setUser={setUser}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
