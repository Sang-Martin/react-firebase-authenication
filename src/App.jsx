import AddProductPanel from "./components/panels/AddProductPanel";
import AllProductPanel from "./components/panels/AllProductPanel";
import { Routes, Route } from "react-router-dom";
import { DashBoardPage, LoginPage, PageNotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} >
        <Route index element={<AllProductPanel/>}/>
        <Route path="add" element={<AddProductPanel />}/>
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
