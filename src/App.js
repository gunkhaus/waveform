//Devin Thompson
//3-25-25
//A.I. Disclaimer: All work for this assignment was completed by myself and entirely without the use of artificial intelligence tools such as ChatGPT, MS Copilot, other LLMs, etc.

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home"; // Import Home component
import Search from "./search";
import Playlists from "./playlists";
import LikedSongs from "./likedsongs";
import RecentlyPlayed from "./recentlyplayed";
import { useState } from "react";
import "./App.css";


function App() {
  //set up array to store "posts"
  const [posts, setPosts] = useState([]); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/RecentlyPlayed" element={<RecentlyPlayed />} />
        <Route path="/Playlists" element={<Playlists />} />
        <Route path="/LikedSongs" element={<LikedSongs />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;