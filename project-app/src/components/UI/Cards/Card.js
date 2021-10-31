import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import api from "../../Api/Api";

const GameCard = ({ hero }) => {
  const [heroData, setHeroData] = useState([]);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await api.get(hero);
      setHeroData(data);
      setReady(true);
    };
    fetchApi();
  }, [hero]);

  const handleClick = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return ready ? (
    <Card sx={{ maxWidth: 250, maxHeight: 600 }}>
      <CardMedia
        component="img"
        height="200"
        image={heroData.image.url}
        alt="hero image"
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "center", marginBottom: 2 }}
          gutterBottom
          variant="h4"
          component="div"
        >
          {heroData.name}
        </Typography>
        <Button
          sx={{ backgroundColor: "purple", marginBottom: 2 }}
          variant="contained"
          value={heroData.powerstats.combat}
          onClick={handleClick}
        >
          {`Combat: ${heroData.powerstats.combat}`}
        </Button>
        <Button
          sx={{ backgroundColor: "purple", marginBottom: 2 }}
          variant="contained"
          value={heroData.powerstats.durability}
          onClick={handleClick}
        >
          {`Durability: ${heroData.powerstats.durability}`}
        </Button>
        <Button
          sx={{ backgroundColor: "purple", marginBottom: 2 }}
          variant="contained"
          value={heroData.powerstats.intelligence}
          onClick={handleClick}
        >
          {`Intelligence: ${heroData.powerstats.intelligence}`}
        </Button>
        <Button
          sx={{ backgroundColor: "purple", marginBottom: 2 }}
          variant="contained"
          value={heroData.powerstats.power}
          onClick={handleClick}
        >
          {`Power: ${heroData.powerstats.power}`}
        </Button>
        <Button
          sx={{ backgroundColor: "purple", marginBottom: 2 }}
          variant="contained"
          value={heroData.powerstats.speed}
          onClick={handleClick}
        >
          {`Speed: ${heroData.powerstats.speed}`}
        </Button>
        <Button
          sx={{ backgroundColor: "purple", marginBottom: 2 }}
          variant="contained"
          value={heroData.powerstats.strength}
          onClick={handleClick}
        >
          {`Strength: ${heroData.powerstats.strength}`}
        </Button>
      </CardContent>
    </Card>
  ) : null;
};

export default GameCard;
