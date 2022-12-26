import React, {useEffect, useState} from 'react'
import { Container, Typography, Grid, Box } from '@material-ui/core'
import {domain} from "../env"
import Axios from 'axios'
import Headline from "./common/Headline"
import SingleCategory from "./common/SingleCategory"
import AllProducts from "./common/AllProducts"

const CategoryProducts = () => {
    const [categoryproduct, setcategoryproduct] = useState(null)
    useEffect(()=>{
        const getcategoryproducts = async() => {
            await Axios({
                url: `${domain}/api/categoryproduct/`,
                method: 'GET',
            }).then(response=>{
//                 console.log(response.data)
                    setcategoryproduct(response.data)
            }).catch(error=>{
                console.log("Category Name ", error)
            })
        }
        getcategoryproducts()
    }, [])
    return (
         <Grid container direction = "column" >
         {categoryproduct?.map((item, i) =>
         <Box key={i} container="div">
         <>
            <Headline title={item?.title} subtitle="Products" />
            <AllProducts products={item?.products} categorytitle={item?.title} categoryid={item?.id} />
          </>
          </Box>
    )}
     </Grid>
)}

export default CategoryProducts