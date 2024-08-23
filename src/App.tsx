import { Route, Routes } from "react-router-dom";
import { Store, Library } from "./pages";
import { Client, Footer } from "./components";

export default function App() {
  return (
  <>
    <Client />
    <Routes>
      <Route 
        path="/"
        element={<Store />}
      />
      <Route 
        path="/library"
        element={<Library />}
      />
    </Routes>
    <Footer />
  </>
  );
}