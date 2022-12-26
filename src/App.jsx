import React, {useEffect} from 'react'
import { Container, Typography } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import HomePage from "./page/HomePage"
import ProductDetails from "./page/ProductDetails"
import SingleCategoryProducts from "./page/SingleCategoryProducts"
import SingleBrandProducts from "./page/SingleBrandProducts"
import SearchResultPage from "./page/SearchResultPage"
import OrderPage from "./page/OrderPage"
import ProfilePage from "./page/ProfilePage"
import AuthPage from "./page/AuthPage"
import axios from 'axios'
import {domain, getheader} from './env'
import { useStateValue } from "./state/stateProvider"

const App = () => {
    const [{profile}, dispatch] = useStateValue()
    useEffect(()=>{
        const getprofile = async() => {
            await axios ({
                url: `${domain}/api/profile/`,
                method: 'GET',
                headers: getheader,
            }).then(response=>{
                dispatch({
                    type: 'PRO',
                    value: response.data,
                })
            }).catch(_=>{
                dispatch({
                    type: 'PRO',
                    value: null,
                })
            })
        }
        getprofile()
    }, [])
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path = "/" element={<HomePage/>} />
            <Route exact path = "/p-:title-:id" element={<ProductDetails/>} />
            <Route exact path = "/category-:title-:id" element={<SingleCategoryProducts/>} />
            <Route exact path = "/brand-:title-:id" element={<SingleBrandProducts/>} />
            <Route exact path = "/q-:q" element={<SearchResultPage />} />
            <Route exact path = "/login" element={<AuthPage />} />
            {
                profile !== null &&
                <>
                    <Route exact path = '/orders' element={<OrderPage />} />
                    <Route exact path = '/profile-:username' element={<ProfilePage />} />
                </>
            }
            <Route exact element={<AuthPage />} />
        </Routes>
        </BrowserRouter>
    )
}
export default App