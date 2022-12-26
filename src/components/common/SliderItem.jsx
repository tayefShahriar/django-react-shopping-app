import React from 'react'
import { Container, Typography, Card, Grid, Box, Button, TextField, IconButton, Paper } from '@material-ui/core'

const SliderItem = ({item}) => {
    return (
        <Paper style = {{
            height: '400px',
            width: '100%',
            backgroundImage: `url(${item.image})`,
            backgroundSize: '100% 500px',
        }}>
            <Grid style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white'
            }}>
                <Typography variant='h3'>{item?.name}</Typography>
                <Typography variant='h6'>{item?.details}</Typography>
                <Button color='primary' variant='contained'>
                    Learn More
                </Button>
            </Grid>
        </Paper>
    )
}
export default SliderItem