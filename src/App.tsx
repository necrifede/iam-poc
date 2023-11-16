import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Public from "./pages/Public";
import Private from "./pages/Private";
import { useOidc } from "@axa-fr/react-oidc";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="public" element={<Public />} />
        <Route path="private" element={<Private />} />
      </Routes>
    </>
  );
}

function Layout() {
  const { login, logout } = useOidc();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/public">go to Public</Link>
          </li>
          <li>
            <Link to="/private">go to private, secured</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      <hr />
    </>
  );
}

export default App;
