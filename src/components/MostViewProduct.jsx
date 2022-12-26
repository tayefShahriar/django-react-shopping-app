import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {domain} from '../env'
import Headline from '../components/common/Headline'
import { Container, Typography, Grid } from '@material-ui/core'
import SingleProduct from '../components/common/SingleProduct'

const MostViewProduct = () => {
      const [products, setProducts] = useState(null);
      useEffect(()=>{
        const getmostviewsproducts = async()=>{
          await axios({
            url:`${domain}/api/mostviewproducts/`,
            method:'GET'
          }).then(response=>{
            setProducts(response.data)
            console.log("MostViewProduct===",response.data);
          })
        }
        getmostviewsproducts()
    },[])
    return (
        <Grid container spacing={2}>
            <Headline title="Most Views" subtitle="Products" />
            {
                products?.map((item, i)=><Grid key={i} md={2} sm={4} item>
                    <SingleProduct product={item.product}/>
                </Grid>)
            }
        </Grid>
    )
}
export default MostViewProduct