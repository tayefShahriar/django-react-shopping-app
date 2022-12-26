import React from 'react'
import { Container, Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import TrendingProducts from '../components/TrendingProducts'
import CategorysName from '../components/CategorysName'
import MostViewProduct from '../components/MostViewProduct'
import CategoryProducts from '../components/CategoryProducts'
import BrandsName from '../components/BrandsName'

const HomePage = () => {
    return (
        <>
        <Slider />
        <Container>
            <TrendingProducts />
            <CategorysName />
            <MostViewProduct />
            <CategoryProducts />
            <BrandsName />
        </Container>
        </>
    )
}
export default HomePage