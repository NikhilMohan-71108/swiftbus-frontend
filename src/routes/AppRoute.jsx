import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import Registration from "../pages/Registration";
import Login from "../pages/Login";


function AppRoute(){
    return(
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<LandingPage />} />
             <Route path="/registration" element={<Registration/>}/>
             //<Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute