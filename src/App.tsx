import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tickets from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Tickets />} />
        <Route path="/tickets/:eventId" element={<SingleEvent />} />
      </Routes>
    </div>
  );
}

export default App;
