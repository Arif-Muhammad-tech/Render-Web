import { useEffect, useState } from "react";
import Home from "./pages/Home";
import CursorGlow from "./components/CursorGlow";
import Background from "./components/background";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Background */}
      <div className="bg-layer">
        <Background />
      </div>

      {/* Main App */}
      <div className="app-content">
        {loading ? <Loader /> : <Home />}
      </div>

      <CursorGlow />
    </>
  );
}

export default App;
