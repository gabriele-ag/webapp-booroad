import Home from "./pages/Home"
import SingleTravel from "./pages/SingleTravel";
import { BrowserRouter, Route, Routes } from "react-router"
import GuestLayout from "./layout/GuestLayout";


function App() {


  return (


      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/singletravel/:id" element={<SingleTravel />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App
