import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { AddProduct } from "./pages/form/AddProduct";

function App() {
  return (
    <div className="">
        <div className="p-4 flex justify-between  h-screen bg-base-300 w-24">
          <Sidebar/>

          <Routes>
             <Route index element={<AddProduct/>}/>
          </Routes>
        </div>
    </div>
  );
} 

export default App;