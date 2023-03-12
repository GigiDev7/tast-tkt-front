import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tickets from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import useModal from "./hooks/useModal";
import Auth from "./components/Auth";

function App() {
  const { isShown, hideModal, showModal } = useModal();

  return (
    <div className="w-[90%] mx-auto">
      <NavBar showAuth={showModal} />
      {isShown && <Auth isAuthShown={isShown} hideAuth={hideModal} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Tickets />} />
        <Route path="/tickets/:eventId" element={<SingleEvent />} />
      </Routes>
    </div>
  );
}

export default App;
