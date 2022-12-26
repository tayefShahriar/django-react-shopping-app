import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { Container, Typography, Grid } from '@material-ui/core'
import {useParams} from 'react-router-dom'
import {domain} from "../env"
import AllProducts from "../components/common/AllProducts"

const SingleCategoryProducts = () => {
    const [category, setCategory] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        const getproducts = async() => {
            await Axios({
                url: `${domain}/api/singlecategory/${id}/`,
                method: 'GET',
            }).then(response=>{
//                 console.log(response.data)
                setCategory(response.data[0])
            })
        }
        getproducts()
    },[])
    return (
        <Container>
            <Grid container direction='column' alignItems='center'>
                <Typography variant='h3'>{category?.title}</Typography>
                <Typography variant='p'>{category?.details}</Typography>
                <img style={{width: '100%', padding: '10px'}} alt={category?.title} src={category?.image} />
                <AllProducts products={category?.products} showall={true}/>
            </Grid>
        </Container>
    )
}
export default SingleCategoryProducts