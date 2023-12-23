import "./null.css";
import MainPage from "./components/mainpage/MainPage";
import { Routes, Route } from "react-router-dom";
import { ChatPage } from "./components/chatpage/ChatPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
