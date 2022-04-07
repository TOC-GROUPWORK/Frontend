import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CardProps } from '../'
import React from 'react'

const Phone:React.FC<CardProps> = ({ id, img, name }) => {
    return (
        <Card
            sx={{
                justifyContent:'center',
                alignItems:'center',
            }}
            onClick={()=>console.log("click")}
        >
            <CardMedia
                component={'img'}
                image={img}
                alt={name}
                width={'200px'}
                height={'200px'}
                sx={{
                    objectFit:'contain',
                    '&:hover': { cursor: 'pointer' },
                }}
            />
            <CardContent>
                <Typography
                    variant='h5'
                    textAlign={'center'}
                >
                    {name}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default Phone;