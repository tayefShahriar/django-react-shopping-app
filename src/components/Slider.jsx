import React, {useEffect, useState} from 'react'
import { Container, Typography } from '@material-ui/core'
import Axios from 'axios'
import {domain} from '../env'
import Carousel from 'react-material-ui-carousel'
import SliderItem from '../components/common/SliderItem'

const Slider = () => {
    const [slide, getSlide] = useState(null)
    useEffect(()=>{
        const getslider = async() => {
            await Axios({
                url: `${domain}/api/sliders/`,
                method: 'GET',
            }).then(response=>{
                getSlide(response.data)
            })
        }
        getslider()
    })
    return (
        <Carousel interval='2000' stopAutoPlayOnHover='true'>
        {
            slide?.map((item, i) => <SliderItem key={i} item={item} />)
        }
        </Carousel>
    )
}
export default Slider