import { Route, Routes } from "react-router-dom"
import MainLayout from '../../pages/Layout'
import {lazy ,Suspense} from 'react';
import PageLoader from '../PageLoader/PageLoader'
const Home =lazy(()=>import('../../pages/Home'));
const CoinDetailsPage = lazy(()=>import('../../pages/CoinDetailsPage'));
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

function Routing() {
    return (
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={
                        <Suspense fallback={<PageLoader/>}>
                            <Home/>
                        </Suspense>
                        }/>
                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<PageLoader/>}>
                            <CoinDetailsPage/>
                        </Suspense>                 
                        }/>
                </Route>
        </Routes>
    </CustomErrorBoundary>
    )
}
export default Routing