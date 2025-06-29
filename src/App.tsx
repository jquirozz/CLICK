import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "@/Public/views/Landing";
import Explore from "@/Explore/views/Explore";
import Post from "@/Post/views/Post";
import Profile from "@/Profile/views/Profile";
import Settings from "@/Settings/views/Settings";

import Navbar from "@/components/Navbar/Navbar";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="screen">
          <Routes>
            <Route path="*" element={<Landing />} />
            <Route path="/" element={<Landing />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
