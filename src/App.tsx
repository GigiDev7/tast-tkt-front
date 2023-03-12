import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tickets from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import useModal from "./hooks/useModal";
import Auth from "./components/Auth";
import UserContext from "./context/userContext";

function App() {
  const { isShown, hideModal, showModal } = useModal();
  const userContext = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      userContext.updateUser(JSON.parse(user));
    }
  }, []);

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
