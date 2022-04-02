import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { AddProoduct } from "./pages/AddProoduct";
import { ViewList } from "./pages/ViewList";
function App() {
  return (
    <div className="flex">
      <div className="p-4 flex justify-between h-screen bg-base-200 w-24">
        <Sidebar />
      </div>
      <div className="p-10 w-full">
        <Routes>
          <Route index element={<AddProoduct/>}/>
          <Route path="/viewlist" element={<ViewList/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
