import { Route, Routes } from "react-router-dom";
import { SignOutOutlet } from "./components/Outlets";
import { SignIn, SignUp, Home, Ranking } from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/ranking" element={<Ranking />} />

        <Route element={<SignOutOutlet />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
