import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Container, Typography, Grid } from '@material-ui/core'
import {domain} from "../env"
import Headline from "./common/Headline"
import SingleCategory from "./common/SingleCategory"

const CategorysName = () => {
    const [categoryname, setcategoryname] = useState(null)
    useEffect(()=>{
        const getCategory = async() => {
            await Axios({
                url: `${domain}/api/category/`,
                method: 'GET',
            }).then(response=>{
//                 console.log(response.data)
                    setcategoryname(response.data)
            }).catch(error=>{
                console.log("Category Name ", error)
            })
        }
        getCategory()
    }, [])
    return (
        <Grid container spacing={3}>
            <Headline title="All" subtitle="Categories" />
            {
                categoryname?.map((item,i)=>(
                    <Grid key = {i} item xs={6} sm={3} md={2} lg={2}>
                        <SingleCategory item = {item} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
export default CategorysName