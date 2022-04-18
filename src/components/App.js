import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Callback from "./Callback";
import Profile from "./Profile";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}
