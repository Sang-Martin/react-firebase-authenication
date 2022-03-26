import AddProductPanel from "./components/panels/AddProductPanel";
import AllProductPanel from "./components/panels/AllProductPanel";
import EditProductPanel from "./components/panels/EditProductPanel";
import { Routes, Route } from "react-router-dom";
import { DashBoardPage, LoginPage, PageNotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} >
        <Route index element={<AllProductPanel title="All Product"/>}/>
        <Route path="add" element={<AddProductPanel title="Add New Product"/>}/>
        <Route path="edit" element={<EditProductPanel title="Edit Product"/>}/>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
