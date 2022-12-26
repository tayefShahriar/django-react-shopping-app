import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {domain} from '../env'
import Headline from '../components/common/Headline'
import SingleBrand from '../components/common/SingleBrand'
import { Container, Typography, Card, Grid, Box, Button, TextField, IconButton } from '@material-ui/core'

const BrandsName = () => {
    const [brands, setBrands] = useState(null)
    useEffect(()=>{
        const getbrands = async() => {
            await Axios({
                url: `${domain}/api/brandsname/`,
                method: 'GET',
            }).then(response => {
                setBrands(response.data)
            })
        }
        getbrands()
    }, [])
    return (
        <Grid container spacing={7}>
            <Headline title="All" subtitle="Brands" />
            {
                brands?.map((item, i)=>(
                    <Grid key={i}  xs={6} sm={3} md={2} lg={2}>
                        <SingleBrand item={item}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}
export default BrandsName