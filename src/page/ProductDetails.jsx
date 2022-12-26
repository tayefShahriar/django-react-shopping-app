import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import Axios from 'axios'
import {domain} from '../env'
import { Container, Typography, Card, Grid, Box, Button, TextField, IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import SendIcon from '@material-ui/icons/Send'
import SingleReview from '../components/common/SingleReview'

const ProductDetails = () => {
    const [product, setProduct] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        const getproductdetails = async() => {
            await Axios({
                url: `${domain}/api/singleproduct/${id}/`,
                method: 'GET',
            }).then(response=>{
//                 console.log(response.data[0])
                   setProduct(response.data[0])
            })
        }
        getproductdetails()
    }, [])
    useEffect(()=>{
        const addproductview= async() => {
            await Axios({
                url: `${domain}/api/addproductview/`,
                method: 'POST',
                data: {
                    'id': id
                }
            }).then(response=>{

            })
        }
        addproductview()
    }, [])
    return (
        <Container>
            <Card style = {{
                paddingTop: '50px',
            }}>
                <Grid container>
                    <Grid item xs = {12} sm = {12} md = {5} lg = {5}>
                        <img style = {{
                            width: '100%',
                            height: 'auto',
                        }} src = {product?.image} alt = {product?.title} />
                    </Grid>
                    <Grid item xs = {12} sm = {12} md = {7} lg = {7}>
                        <Grid container style={{marginLeft: '10px'}}>
                            <Grid item xs={12} md={6} lg={6}>
                                <Typography variant = 'h4'>{product?.title}</Typography>
                                <Box>
                                {
                                    product?.category?.map((item,i)=><Button key={i}>{item?.title}</Button>)
                                }
                                </Box>
                                <Box>
                                {
                                    product?.brand &&
                                    <Button variant='outlined'>{product?.brand?.title}</Button>
                                }
                                </Box>
                                <Box>
                                    {
                                        product?.discount > 0 && <Box style={{
                                            fontSize: '40px'
                                        }}>{product?.discount}% OFF</Box>
                                    }
                                </Box>
                                <Box>
                                {
                                    product?.old_price && <Box style={{
                                        fontSize: '40px',
                                        color: 'red',
                                        textDecoration: 'line-through',
                                        marginRight: '10px',
                                    }} component='span'>{product?.old_price} Tk</Box>
                                }
                                <Box style={{
                                    fontSize: '40px',
                                    color: 'black',
                                }} component='span'>{product?.price} Tk</Box>
                                <Box style={{
                                    margin: '10px 0px',
                                }} >
                                <Button size='large' variant='outlined'>Add to Cart</Button>
                                </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                            <Card style={{
                                padding: '10px',
                                margin: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Button endIcon = {
                                    <VisibilityIcon />
                                } color='primary' size='large'>{product?.view}</Button>
                            </Card>
                            </Grid>
                            <Typography>{product?.details}</Typography>
                        </Grid>
                        <Typography variant='h4' align='center'>Review</Typography>
                        <Box p={3}>
                            <TextField
                                label = 'Add Review...'
                                style = {{width: '100%'}}
                                variant = 'outlined'
                                InputProps = {{
                                    endAdornment: (
                                        <IconButton>
                                            <SendIcon />
                                        </IconButton>
                                    )
                                }}
                            />
                            {
                                product?.review?.map((item, i)=><SingleReview key={i} item={item} />)
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}
export default ProductDetails