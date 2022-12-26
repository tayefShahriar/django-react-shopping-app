import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import { Container, Typography, Grid } from '@material-ui/core'
import {useParams} from 'react-router-dom'
import {domain} from "../env"
import AllProducts from "../components/common/AllProducts"

const SingleBrandProducts = () => {
    const [brand, setBrand] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        const getproducts = async() => {
            await Axios({
                url: `${domain}/api/singlebrand/${id}/`,
                method: 'GET',
            }).then(response=>{
//                 console.log(response.data)
                setBrand(response.data[0])
            })
        }
        getproducts()
    },[])
    return (
        <Container>
            <Grid container direction='column' alignItems='center'>
                <Typography variant='h3'>{brand?.title}</Typography>
                <Typography variant='p'>{brand?.details}</Typography>
                <img style={{width: '50%', padding: '10px'}} alt={brand?.title} src={brand?.logo} />
                <AllProducts products={brand?.products} showall={true}/>
            </Grid>
        </Container>
    )
}
export default SingleBrandProducts