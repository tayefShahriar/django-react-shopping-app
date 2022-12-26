import React from 'react'
import { Container, Typography, Card, Grid, Box, Button, TextField, IconButton, CardHeader, Avatar } from '@material-ui/core'

const SingleReview = ({item}) => {
    return (
        <Card>
            <CardHeader
                avatar = {
                    <Avatar style={{
                        backgroundColor: 'blue'
                    }}>
                        {item?.customer?.username?.[0]}
                    </Avatar>
                }
                title = {item?.title}
                subheader = {item?.customer?.username}
            />
        </Card>
    )
}

export default SingleReview