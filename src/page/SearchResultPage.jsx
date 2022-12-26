import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import {domain} from '../env'
import { Container, Typography, Card, Grid, Box, Button, TextField, IconButton } from '@material-ui/core'
import Headline from '../components/common/Headline'
import SingleBrand from '../components/common/SingleBrand'
import AllProducts from '../components/common/AllProducts'

const SearchResultPage = () => {
    const {q} = useParams()
    const [result, setResult] = useState(null)
    useEffect(()=>{
        const getSearch = async() => {
            await axios({
                url: `${domain}/api/search/${q}/`,
                method: 'GET',
            }).then(response=>{
                setResult(response.data)
            })
        }
        getSearch()
    },[q])
    return (
        <Container>
            <Typography variant = 'h4'>Searc Result For: "{q}"</Typography>
            <Grid container direction='column'>
            {
                result?.brand?.length !== 0 && <Grid container
                direction='row'
                justifyContent='center'
                alignitem='center'
                spacing={2}
                >
                <Headline title='Brand' />
                {
                    result?.brand?.map((item, i)=>
                    <Grid key={i}  xs={6} sm={3} md={2} lg={2}>
                        <SingleBrand item={item}/>
                    </Grid>)
                }
                </Grid>
            }
            {
                result?.category?.length !== 0 && <Grid container
                direction='row'
                justifyContent='center'
                alignitem='center'
                spacing={2}
                >
                <Headline title='Category' />
                {
                    result?.category?.map((item, i)=>
                    <Grid key={i}  xs={6} sm={3} md={2} lg={2}>
                        <SingleBrand item={item}/>
                    </Grid>)
                }
                </Grid>
            }
            {
                result?.products?.length !== 0 && <Grid container
                direction='row'
                justifyContent='center'
                alignitem='center'
                spacing={2}
                >
                <Headline title='Products' />
                {
                    <AllProducts products = {result?.products} showall = {true} />
                }
                </Grid>
            }
            </Grid>
        </Container>
    )
}
export default SearchResultPage