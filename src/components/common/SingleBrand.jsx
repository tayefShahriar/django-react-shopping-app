import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import {Link, useNavigate} from 'react-router-dom'

const SingleBrand = ({item}) => {
    const navigate = useNavigate()
    const showbrandproducts = () => {
        navigate(`brand-${item?.title}-${item?.id}`)
    }
    return (
        <CardActionArea onClick={showbrandproducts}>
            <Card style={{
                width: "100%",
                height: "100px",
                backgroundColor: "#6275A3",
                backgroundImage: `url(${item?.logo})`,
                backgroundSize: '100% 100%',
                padding: '5px',
                color: 'white',
            }}>
                <Box>

                    <Typography variant='h4'>{item?.title}</Typography>

                </Box>
            </Card>
        </CardActionArea>
    )
}
export default SingleBrand