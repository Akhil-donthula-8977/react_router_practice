import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./home"

function App() {
  return (
    <div className="bg-slate-400 relative bottom-5  pb-3 ">
      <br></br>
      <BrowserRouter>
        
          <nav className="m-5 flex justify-between bg-slate-500 overflow-hidden p-1 rounded-3xl">

            <Link to="/"><h1 className="text-5xl relative left-6  text-slate-700">#Vans Life</h1></Link>

            <div className="py-4 px-4 mr-8">
              <Link to="/" className="my-3 mx-2 text-blue-200 bg-blue-900 p-4 text-center hover:text-white rounded-xl">home</Link>
              <Link to="/about" className="my-3 mx-2 text-blue-200 bg-blue-900 p-4 text-center hover:text-white rounded-xl">about</Link>
              <Link to="/about" className="my-3 mx-2 text-blue-200 bg-blue-900 p-4 text-center hover:text-white rounded-xl">contact</Link>
            </div>
          </nav>
       
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<h1>about route is shown</h1>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
