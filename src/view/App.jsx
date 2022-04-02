import { Sidebar } from "./components/Sidebar";
import { useId } from "react";
import { Route, Routes } from "react-router-dom";
import { AddProoduct } from "./pages/AddProoduct";
function App() {
  return (
    <div className="flex">
      <div className="p-4 flex justify-between h-screen bg-base-200 w-24">
        <Sidebar />
      </div>
      <div className="p-10 w-full">
        <Routes>
          <Route index element={<AddProoduct/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
