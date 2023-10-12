import { Button, Grid, Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
const IMAGES = [
  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",

  "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg",

  "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg",

  "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg",
];
export default function Carousel() {
  const [index, setIndex] = useState(0);
  const leftHandler = () => {
    if (index === 0) {
      let slide = IMAGES.length - 1;
      setIndex(slide);
    } else {
      setIndex(index - 1);
    }
  };
  const rightHandler = () => {
    let slide = IMAGES.length - 1;
    if (index === slide) {
      let slider = 0;
      setIndex(slider);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <Paper>
      <Grid container>
        <Grid item xs={2}>
          <Button onClick={leftHandler}>
            <ArrowBackIosIcon />
          </Button>
        </Grid>
        <Grid item xs={8}>
          <img src={IMAGES[index]} style={{ maxWidth: 500 }} />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={rightHandler}>
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
