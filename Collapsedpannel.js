import { Box, Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
const PARAGRAPH = [
  {
    heading: "Is this a good product",

    paragraph:
      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    heading: "How much does it cost?",

    paragraph: "cost based on the product you haven selected ",
  },
  {
    heading: "Whwn i get it",

    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export default function Collapsedpannel() {
  const [button, Setbutton] = useState(PARAGRAPH);

  return (
    <Paper
      style={{
        background: "#061ab8",
        paddingLeft: 20,
        paddingRight: 20,
        margin: 100,
        paddingTop: 10,
        paddingBottom: 60,
        borderRadius: 20,
      }}
    >
      <h1 style={{ fontSize: 40, color: "white" }}>
        Frequantly Asked Questions
      </h1>

      <Grid container style={{ margin: 30, width: 800 }}>
        {PARAGRAPH.map((faq, i) => (
          <Faq key={i} data={faq} />
        ))}
      </Grid>
    </Paper>
  );
}

function Faq({ data }) {
  const [open, setOpen] = useState(true);
  const collaps = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ background: "white" }}>
      <Grid container>
        <Grid item xs={10}>
          {" "}
          <h4>{data.heading}</h4>
        </Grid>
        <Grid item xs={2}>
          {" "}
          <Button
            style={{
              background: "#d3d8fd",
              border: "3px solid blue",
              marginTop: 10,
              minWidth: 0,
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>
      <p style={{}}>{data.paragraph}</p>
    </Box>
  );
}
