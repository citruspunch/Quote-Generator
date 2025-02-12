import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function MediaControlCard() {
  const theme = useTheme();

  const quotes = [
    {
      author: "Charles Chaplin",
      quote: "Un día sin reír es un día perdido",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Charlie_Chaplin_portrait.jpg",
    },
    {
      author: "Stephen Hawking",
      quote:
        "No puedes permitirte estar discapacitado en espíritu a la vez que físicamente",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/05/01/21/stephen-hawking.jpg?width=1200",
    },
    {
      author: "Albert Einstein",
      quote: "Cada día sabemos más y entendemos menos",
      img: "https://culturizando.com/wp-content/uploads/2019/01/Albert-Einstein-y-su-viaje-a-California.jpg",
    },
    {
      author: "Steve Jobs",
      quote: "La innovación distingue a los líderes de los seguidores",
      img: "https://commons.wikimedia.org/wiki/File:Steve_Jobs_Headshot_2010-CROP.jpg",
    },
    {
      author: "Nelson Mandela",
      quote: "La educación es el arma más poderosa para cambiar el mundo",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nelson_Mandela-2008_%28edit%29.jpg",
    },
    {
      author: "Albert Einstein",
      quote:
        "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera",
      img: "https://albert.ias.edu/files/original/778348b9-9634-4b64-8967-b5f04cd433bd.jpg",
    },
    {
      author: "Bob Marley",
      quote:
        "Nunca sabes lo fuerte que eres, hasta que ser fuerte es la única opción que te queda",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bob_Marley_in_Concert_Zurich_05-30-80.jpg",
    },
    {
      author: "Albert Einstein",
      quote:
        "Hay dos maneras de vivir la vida: una como si nada fuese un milagro, la otra como si todo fuese un milagro",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    },
    {
      author: "Fiódor Dostoievski",
      quote:
        "El secreto de la existencia humana no solo está en vivir, sino también en saber para qué se vive",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dostoevsky_1876.jpg",
    },
    {
      author: "Teresa de Calcuta",
      quote:
        "Pasamos mucho tiempo ganándonos la vida, pero no el suficiente tiempo viviéndola",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Mother_Teresa_1.jpg",
    },
    {
      author: "Stephen Hawking",
      quote:
        "Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle",
      img: "https://cnnespanol.cnn.com/wp-content/uploads/2018/03/stephen-hawking-2.jpg",
    },
    {
      author: "Friedrich Nietzsche",
      quote: "Lo que no te mata, te hace más fuerte",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg",
    },
    {
      author: "Mark Zuckerberg",
      quote:
        "Los éxitos más importantes se consiguen cuando existe la posibilidad de fracasar",
      img: "https://observer.com/wp-content/uploads/sites/2/2019/04/mark-zuckerberg.jpg",
    },
    {
      author: "Larry Page",
      quote: "Siempre da más de que lo esperan de ti",
      img: "https://www.topmost10.com/wp-content/uploads/2020/01/Larry-Page.jpg",
    },
    {
      author: "Walt Disney",
      quote: "La forma de empezar es dejar de hablar y empezar a actuar",
      img: "https://www.history.com/.image/t_share/MTU3ODc4NjAzOTYxMjkzOTAy/walt-disney.jpg",
    },
  ];

  const [index, setIndex] = React.useState(0);
  const handleNext = () =>
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  const handlePrevious = () =>
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex + 1 === quotes.length) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomIndex() {
    setIndex((prevIndex) => {
      let randomIndex = getRandomInt(quotes.length);
      while (prevIndex === randomIndex) {
        randomIndex = getRandomInt(quotes.length);
      }
      return randomIndex;
    });
  }

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h3">
            {quotes[index].quote}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {quotes[index].author}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={handlePrevious}>
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" onClick={handleNext}>
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={quotes[index].img}
        alt={quotes[index].author}
      />
    </Card>
  );
}
