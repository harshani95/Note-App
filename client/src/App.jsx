import {
  BrowserRouter as BroWserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BroWserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BroWserRouter>
    </>
  );
}

export default App;
