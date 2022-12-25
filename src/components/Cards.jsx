import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Like from "./Like";
import { red } from "@mui/material/colors";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Cards({ item, pageTheme }) {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  <IconButton
    aria-label="expand row"
    size="small"
    onClick={() => setOpen(!open)}
  >
    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
  </IconButton>;

  return (
    <>
      <Card
        style={pageTheme}
        sx={{
          display: "inline-block",
          maxHeight: 1000,
          margin: "auto",
          height: "auto",
          maxWidth: 500,
          margin: 3,
        }}
        key={item.url}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={item.title}
          subheader={item.publishedAt}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.urlToImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" style={pageTheme}>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Like value={item.url} style={pageTheme} />
          </IconButton>

          <ExpandMore
            expand={expanded}
            id={item.url}
            onClick={(e) => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={pageTheme} id={item.url} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {item.content.slice(0, 200)}
              <a href={item.url} target="_blank" rel="noreferrer">
                read more
              </a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
