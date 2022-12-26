import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'

const Headline = ({title, subtitle}) => {
    return (
        <Grid container style={{
            justifyContent: 'center',
            borderBottom: '3px solid green',
            marginTop: '30px'
        }}>
        <Box style={{
            fontWeight: 'bold',
            fontSize: '20px',
            textTransform: "uppercase",
            color: "blue",
            marginRight: "10px",
        }}>{title}</Box>
        <Box style={{
            fontWeight: 'bold',
            fontSize: '20px',
            textTransform: "uppercase",
            color: "red",
        }}>{subtitle}</Box>
        </Grid>
    )
}
export default Headline