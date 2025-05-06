import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import Account from "./pages/Account";
import { UserContext } from "./contexts/UserContext";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/users/profile");

      setUser(data);
    };

    axiosGet();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser}}>
      <BrowserRouter>
        <Header user={user} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          ></Route>
          <Route
            path="/register"
            element={<Register setUser={setUser} />}
          ></Route>
          <Route
            path="/account/:subpage?"
            element={<Account />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
