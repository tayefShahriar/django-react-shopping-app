import React, {useEffect, useState} from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import Axios from 'axios'
import {domain} from '../env'
import Headline from '../components/common/Headline'
import SingleProduct from '../components/common/SingleProduct'

const TrendingProducts = () => {
    const [trending, getTrending] = useState(null)
    useEffect(()=>{
        const getTrendingProducts = async() => {
            await Axios({
                url: `${domain}/api/trendingproducts/`,
                method: 'GET',
            }).then(resoponse=>{
                getTrending(resoponse.data)
            }).catch(e=>{
                console.log('Error in trending', e)
            })
        }
        getTrendingProducts()
    }, [])
    return (
        <Grid container spacing={2}>
            <Headline title="Trending" subtitle="Products" />
            {
                trending?.map((item, i)=><Grid key={i} md={2} sm={4} item>
                    <SingleProduct product={item.product}/>
                </Grid>)
            }
        </Grid>
    )
}
export default TrendingProducts