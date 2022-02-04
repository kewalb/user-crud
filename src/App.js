import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom"
import Create from "./components/Create";
import List from "./components/List";
import Edit from "./components/Edit";


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/create" element={ <Create/> } />
        <Route path="/list" element={ <List/> } />
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/" exact element={ <Homepage/> } />
      </Routes>
    </div>
  );
}

export default App;
