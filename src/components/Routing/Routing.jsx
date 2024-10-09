import { Route, Routes } from "react-router-dom"
import MainLayout from '../../pages/Layout'
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Home/>}/>
                <Route path="/details/:coinId" element={<CoinDetailsPage/>}/>
            </Route>
    </Routes>
    )
}
export default Routing