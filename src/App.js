import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages

import Homepage from "./pages/Homepage";
import NPCs from "./pages/NPCs";
import NpcDetails from "./pages/NpcDetails";

import Quests from "./pages/Quests";
import QuestDetails from "./pages/QuestDetails";

import Legends from "./pages/Legends";
import LegendDetails from "./pages/LegendDetails";
import RecapDetails from "./pages/RecapDetails";

import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/NPCs" element={<NPCs />} />
          <Route path="/npcDetails/:id" element={<NpcDetails />} />
          <Route path="/Quests" element={<Quests />} />
          <Route path="/QuestDetails" element={<QuestDetails />} />
          <Route path="/Legends" element={<Legends />} />
          <Route path="/LegendDetails" element={<LegendDetails />} />
          <Route path="/RecapDetails/:id" element={<RecapDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
