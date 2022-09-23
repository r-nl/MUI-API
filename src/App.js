import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
   .then(response => response.json())
   .then(data => data.slice(0, 10))
   .then(trimmedData => setQuotes(trimmedData))
  }, []);

  return (
    <>
      <header>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      </header>
      <body>
      <br /><center><Typography variant="h4" component="div">Quotes some guy on the internet liked</Typography></center><br /><br />
      <Grid container spacing={2}>
      {quotes.map((quote) => {
         return (
          <Grid xs={6}>
            <Card sx={{ minWidth: 275, p: 1, m: 2  }}>
              <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Quote by {quote.author}
              </Typography>
              <Typography variant="h5" component="div">
              "{quote.text}"
              </Typography>
              </CardContent>
            </Card>
            <br />
          </Grid>
      )})}
      </Grid>
      </body>
    </>
  );
}

export default App;
