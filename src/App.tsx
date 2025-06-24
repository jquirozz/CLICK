import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeedPage from "@/feed/FeedPage";
import ExplorePage from "@/explore/ExplorePage";
import ProfilePage from "@/profile/ProfilePage";
import SettingsPage from "@/settings/SettingsPage";

import NavBar from "@/components/NavBar";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main className="screen">
          <Routes>
            <Route path="*" element={<FeedPage />} />
            <Route path="/" element={<FeedPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/explore/collections" element={<ExplorePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
