import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./Contexts/ContextTheme";
import Cards from "./Cards";
import Header from "./Header";
import { Button, Paper, Skeleton } from "@mui/material";
import { SearchContext } from "./Contexts/SearchProvider";
import { Box} from "@mui/system";
import { ColorRing } from "react-loader-spinner";

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
      console.log(page, "coming from axios");
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${search}&page=${page}&apiKey=7568337b00bd4c7ba1138802145d183e`
        )
        .then((response) => {
          console.log(search);
          setData([response.data.articles]);
        });
    }, [search, page]);

let pageArr= [1,2,3,4,5]

  const handleNext = () => setPage((x) => x + 1);
  const handlePrev = () => setPage((x) => x - 1);
  

  return (
    <React.Fragment>
      <Header handleTheme={handleTheme} />
      <Paper
        style={{
          ...pageTheme,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {datas.length >= 1
          ? datas[0].map((item) => <Cards item={item} pageTheme={pageTheme} />)
          : 
          <ColorRing
          style={{marginTop:'20rem'}}
          visible={true}
          height="700"
          width="300"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
     }
          
      </Paper>
      <Box sx={{display:'flex',justifyContent:'space-around', margin:'1%'}}>
      <Button variant="contained" onClick={handlePrev}>Prev</Button> 
      {pageArr.map((pageNo)=>{
        return <Button onClick={()=>setPage(pageNo)} variant="text">{pageNo}</Button>
      })}
      <Button variant="contained" onClick={handleNext}>Next</Button> 
      </Box>
    </React.Fragment>
  );
}

export default News;
