import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import api from '../../Api/Api';

const GameCard = ({ hero }) => {
    const [heroData, setHeroData] = useState([]);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            const { data } = await api.get(hero);
            setHeroData(data);
            setReady(true);
        };
        fetchApi();
    }, [hero]);

    return (
        ready ? (
            <Card sx={{ maxWidth: 250, maxHeight: 600 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={heroData.image.url}
                    alt="hero image"
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'center', marginBottom: 2 }} gutterBottom variant="h4" component="div">
                    {heroData.name}
                    </Typography>
                    <Button sx={{ backgroundColor: 'purple', marginBottom: 2 }} variant="contained">
                    {`Combat: ${heroData.powerstats.combat}`}
                    </Button>
                    <Button sx={{ backgroundColor: 'purple', marginBottom: 2 }} variant="contained">
                    {`Durability: ${heroData.powerstats.durability}`}
                    </Button>
                    <Button sx={{ backgroundColor: 'purple', marginBottom: 2 }} variant="contained">
                    {`Intelligence: ${heroData.powerstats.intelligence}`}
                    </Button>
                    <Button sx={{ backgroundColor: 'purple', marginBottom: 2 }} variant="contained">
                    {`Power: ${heroData.powerstats.power}`}
                    </Button>
                    <Button sx={{ backgroundColor: 'purple', marginBottom: 2 }} variant="contained">
                    {`Speed: ${heroData.powerstats.speed}`}
                    </Button>
                    <Button sx={{ backgroundColor: 'purple', marginBottom: 2 }} variant="contained">
                    {`Strength: ${heroData.powerstats.strength}`}
                    </Button>
                </CardContent>
                </Card>
        ) : (
            null
        )
    )
};

export default GameCard;