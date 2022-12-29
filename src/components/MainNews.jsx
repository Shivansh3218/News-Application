import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./Contexts/ContextTheme";
import Cards from "./Cards";
import { Button, Paper } from "@mui/material";
import { SearchContext } from "./Contexts/SearchProvider";
import { Box } from "@mui/system";
import { ColorRing } from "react-loader-spinner";
import logo from "../Assets/logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function News() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [pageTheme, setPageTheme] = useState(theme.light);
  const [datas, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const { search, setSearch } = useContext(SearchContext);

  const handleTheme = () => {
    count === 0 ? setCount(1) : setCount(0);
    count === 0 ? setPageTheme(theme.dark) : setPageTheme(theme.light);
  };
  useEffect(() => {
    // search===null?search='bitcoin':search=search;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${search}&page=${page}&from=2022-12-26&to=2022-12-26&sortBy=popularity&apiKey=ab3256b8df06417da840cd79b7e986f8`
        // `https://newsapi.org/v2/everything?q=bitcoin&apiKey=ab3256b8df06417da840cd79b7e986f8`
      )
      .then((response) => {
        setData([response.data.articles]);
      });
  }, [search, page]);

  let pageArr = [1, 2, 3, 4, 5];

  const handleNext = () => setPage((x) => x + 1);
  const handlePrev = () => setPage((x) => x - 1);

  return (
    <React.Fragment>
      <div className="image" style={{ ...pageTheme }}>
        <img
          style={{ width: "50%", height: "1%", marginLeft: "25%" }}
          src={logo}
          alt=""
        />
      </div>
      <Navbar handleTheme={handleTheme} pageTheme={pageTheme} />
      <Paper
        style={{
          ...pageTheme,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {datas.length >= 1 ? (
          datas[0].map((item) => <Cards item={item} pageTheme={pageTheme} />)
        ) : (
          <ColorRing
            style={{ marginTop: "20rem" }}
            visible={true}
            height="700"
            width="300"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </Paper>

      <Footer />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "auto",
          paddingBottom:'2rem',
          "@media(max-width:800px)": {
            justifyContent: "center",
          },
        }}
      >
        <Button variant="contained" onClick={handlePrev}>
          Prev
        </Button>
        {pageArr.map((pageNo) => {
          return (
            <Button onClick={() => setPage(pageNo)} variant="text">
              {pageNo}
            </Button>
          );
        })}
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default News;
