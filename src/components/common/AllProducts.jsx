import React from 'react'
import { Container, Typography, Grid, Box, Button } from '@material-ui/core'
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp'
import SingleProduct from "./SingleProduct";
import {useNavigate} from 'react-router-dom'

const AllProducts = ({products, showall=false, categorytitle, categoryid}) => {
    const navigate = useNavigate()
    const showcategorproducts = () => {
        navigate(`category-${categorytitle}-${categoryid}`)
    }
    return (
        <Grid container spacing={2}>
        {
            products?.map((item, i)=>(
                showall?
                <Grid key={i} item md={2} sm={4}>
                    <SingleProduct product={item} />
                </Grid>:
                <>
                {i<=1 && (<Grid key={i} item md={2} sm={4}>
                    <SingleProduct product={item} />
                </Grid>)}
                </>
            ))
        }
        {
            (products?.length>1 && !showall) &&
            <Grid item>
                <Button onClick={showcategorproducts}>
                    <Typography>See More</Typography>
                    <DoubleArrowSharpIcon />
                </Button>
            </Grid>
        }
        </Grid>
    )
}
export default AllProducts