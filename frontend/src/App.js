import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Components/LoginSignUp/Login";
import Register from "./Components/LoginSignUp/Register";
import Forgot from "./Components/LoginSignUp/Forgot";
import ChatPage from "./Components/Pages/ChatPage";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
