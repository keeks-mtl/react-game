import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import api from './../Api/Api';

const GameCard = () => {
    const [heroData, setHeroData] = useState([]);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            const { data } = await api.get('/01');
            setHeroData(data);
            setReady(true);
        };
        fetchApi();
    }, []);

    return (
        ready ? (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={heroData.image.url}
                    alt="hero image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                    {heroData.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {`Combar: ${heroData.powerstats.combat}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {`Durability: ${heroData.powerstats.durability}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {`Intelligence: ${heroData.powerstats.intelligence}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {`Power: ${heroData.powerstats.power}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {`Speed: ${heroData.powerstats.speed}`}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {`Strength: ${heroData.powerstats.strength}`}
                    </Typography>
                </CardContent>
                </Card>
        ) : (
            null
        )
    )
};

export default GameCard;