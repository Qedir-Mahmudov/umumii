import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Adminpanel from './Adminpanel';
import Home from './Home';
import Addpage from './addpage';
import Detail from './detail';
import Basket from './Basket';
import Mainlayout from './assets/layout/mainlayout';


function App() {
 

  return (
    <>
    <div className="conta">

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="Detail" element={<Detail />} />
            <Route path="Addpage" element={<Addpage  />} />
            <Route path="Basket" element={<Basket />} />
            <Route path="Adminpanel" element={<Adminpanel />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
   
    </>
  )
}

export default App
