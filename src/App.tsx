import { Route, Routes } from "react-router-dom";
import { Store, Library } from "./pages";
import { Client, Footer } from "./components";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  
  return (
    <>
      <Client />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Footer />
    </>
  );
}
