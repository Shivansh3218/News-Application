import React, { useState, useEffect, useContext } from "react"
import axios from "axios";
import { Paper } from "@mui/material";

import Header from "./Header";
import "../components/css/AdvancedSearch.css";
import { ThemeContext } from "./Contexts/ContextTheme";
import Cards from "./Cards";

export default function AdvancedSearch() {
  
  const [datas, setData] = useState([]);
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useContext(ThemeContext);
  const [pageTheme, setPageTheme] = useState(theme.light);

  let [search, setSearch] = useState({
    keyword: "bitcoin",
    from: "2022-12-27",
    to: "2022-12-27",
    region: "in",
    category: "all",
    language: "all",
  });
  
  const [searched, setSearched] = useState({ keyword: "bitcoin",
  from: "2022-12-27",
  to: "2022-12-27",
  region: "in",
  category: "all",});
  
  const handleSearch = () => {
    setSearched({ ...search });
  };
  useEffect(() => {
    console.log(searched, 'searcheddddddddd')
    console.log(search, 'search')
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searched['keyword']}&from=${searched["from"]}&to=${searched["to"]}country=uslanguage=${searched['language']}&apiKey=ab3256b8df06417da840cd79b7e986f8`
      )
      .then((response) => {
        setData([response.data.articles]);
      });
  }, [searched]);

  const handleTheme = () => {
    count === 0 ? setCount(1) : setCount(0);
    count === 0 ? setPageTheme(theme.dark) : setPageTheme(theme.light);
  };


  let regionArr = [
    ["Argentina", "ar"],
    ["Brazil", "br"],
    ["Canada", "ca"],
    ["India", "in"],
    ["USA", "us"],
  ];

  let languageArr = [
    ["English", "all"],
    ["Spanish", "ar"],
    ["French", "fr"],
    ["Italian", "it"],
    ["Portuguese", "pt"],
    ["Russian", "ru"]
    ];

  document.getElementById("root").style = { ...pageTheme };

  return (
    <>
      <Header handleTheme={handleTheme} pageTheme={pageTheme} />

      <section className="main" style={{ ...pageTheme }}>
        <h1 id="headingTop">ADVANCED SEARCH</h1>
        <div style={{ ...pageTheme }} id="searchBtn-container">
        
        </div>
        <div id="hero">
          <label>
            Enter a keyword:
            <input
              type="text"
              required
              id="inputSearch"
              onChange={ (e)=>setSearch({ ...search, keyword: e.target.value })}
              placeholder="Type Something"
            />
          </label>
          <div id="dateSelector">
            <label>
              From date:
              <input
                onChange={(e) => setSearch({ ...search, from: e.target.value })}
                type="date"
              />
            </label>
            <label>
              To date:
              <input
                onChange={(e) => setSearch({ ...search, to: e.target.value })}
                type="date"
              />
            </label>
          </div>
        </div>

        <section id="wrapper_filters">
          <div id="language_radios">
            <h1  style={{...pageTheme}}  className="languageHeading">Select Language</h1>
            <hr />
            <select onChange={(e)=>{
                console.log(e.target.value, 'language value')
                setSearch({...search, language:e.target.value})
               }} name="language" id="language_select">
            {languageArr.map((item) => {
              return (
               <option  className="option_lang" value={item[1]}>{item[0]}</option>
              );
            })}
            </select>
          </div>
          <div id="language_radios">
            <h1  style={{...pageTheme}}  className="languageHeading">Select Region</h1>
            <hr />
            <select onChange={(e)=>{
                console.log(e.target.value, 'region value')
                setSearch({...search, region:e.target.value})
               }} name="language" id="language_select">
            {regionArr.map((item) => {
              return (
               <option  className="option_lang" value={item[1]}>{item[0]}</option>
              );
            })}
            </select>
          </div>
          <button
            style={{
              ...pageTheme,
              backgroundColor: "green",
              fontSize: "1.5rem",
              color: "white",
            }}
            id="searchbtn"
            onClick={handleSearch}
          >
            Search
          </button>
        </section>
      
      <Paper
        style={{
          ...pageTheme,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {datas[0] !== undefined
          ? datas[0].length >= 1
            ? datas[0].map((item) => {
                return <Cards item={item} pageTheme={pageTheme} />;
              })
            : null
          : null}
      </Paper>
      </section>
    </>
  );
}
