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
import SkipNextIcon from "@mui/icons-material/SkipNext";
import AutoModeIcon from "@mui/icons-material/AutoMode";

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
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    },
    {
      author: "Steve Jobs",
      quote: "La innovación distingue a los líderes de los seguidores",
      img: "https://i.blogs.es/de3e88/steve-jobs/450_1000.webp",
    },
    {
      author: "Nelson Mandela",
      quote: "La educación es el arma más poderosa para cambiar el mundo",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/78/Nelson_Mandela_1994_%282%29.jpg",
    },
    {
      author: "Albert Einstein",
      quote:
        "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    },
    {
      author: "Bob Marley",
      quote:
        "Nunca sabes lo fuerte que eres, hasta que ser fuerte es la única opción que te queda",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Bob_Marley_1976_press_photo.jpg",
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
      img: "https://historia.nationalgeographic.com.es/medio/2021/11/05/retrato-del-escritor-ruso-fiodor-dostoievski-realizado-en-1876_ca5664cf_475x599.jpeg",
    },
    {
      author: "Teresa de Calcuta",
      quote:
        "Pasamos mucho tiempo ganándonos la vida, pero no el suficiente tiempo viviéndola",
      img: "https://www.biografiasyvidas.com/biografia/t/fotos/teresa_de_calcuta.jpg",
    },
    {
      author: "Stephen Hawking",
      quote:
        "Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/05/01/21/stephen-hawking.jpg?width=1200",
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
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    {
      author: "Larry Page",
      quote: "Siempre da más de que lo esperan de ti",
      img: "https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/9da25564-a085-4df4-853e-963ecc6051cd/Larry_Page.jpg?fm=jpg&auto=format",
    },
    {
      author: "Walt Disney",
      quote: "La forma de empezar es dejar de hablar y empezar a actuar",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
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
    <Card
      sx={{
        display: "flex",
        backgroundImage:
          "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
        boxShadow:
          "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
        p: 6,
        mt: 8,
        mx: 6,
        borderRadius: 4,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h4"
            sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, mr: 2 }}
          >
            {quotes[index].quote}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary", fontFamily: "Poppins, sans-serif" }}
          >
            {quotes[index].author}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="newQuote" onClick={getRandomIndex}>
            <AutoModeIcon sx={{ height: 38, width: 38, color: "skyblue" }} />
            <Typography variant="body1" sx={{ mx: 1, color: "skyblue" }}>
              New Quote
            </Typography>{" "}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: 3 }}
        image={quotes[index].img}
        alt={quotes[index].author}
      />
    </Card>
  );
}
