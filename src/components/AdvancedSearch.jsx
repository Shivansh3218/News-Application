import React, { useState } from "react";
import Header from "./Header";

import "../components/css/AdvancedSearch.css";

export default function AdvancedSearch() {
  return (
    <>
      <Header />
   
      <div className="main">
        <h1 id="headingTop">ADVANCED SEARCH</h1>
        <div id="hero">

       
        <label>
          Enter a keyword:
          <input type="text"  required id="inputSearch" placeholder="Type Something"/>
        </label>
        <div id="dateSelector">
          <label>
            From date:
            <input type="date" />
          </label>
          <label>
            To date:
            <input type="date" />
          </label>
        </div>
        </div>

<div id="wrapper_filters">
  
<div id="catogoryCheckboxes">

<h1 className="categoryHeading">Select Category</h1>
<hr />
  <label >
    Entertainment
    <input className= 'checkbox' type="checkbox" value='Entertainment'/>
  </label>
  <label >
    Sports
    <input className= 'checkbox' type="checkbox" value='Sports'/>
  </label>
  <label >
    Buissness
    <input className= 'checkbox' type="checkbox" value='Buissness'/>
  </label>
  <label >
    Science
    <input className= 'checkbox' type="checkbox" value='Science'/>
  </label>
  <label >
    general
    <input className= 'checkbox' type="checkbox" value='general'/>
  </label>
</div>

<div id="regionCheckboxes">
  
<h1 className="regionHeading">Select Region</h1>
<hr />

  <label >
    Argentina
    <input className= 'checkbox'type="checkbox" value='ar'/>
  </label>

  <label >
    Brazil
    <input className= 'checkbox'type="checkbox" value='br'/>
  </label>
  <label >
    Canada
    <input className= 'checkbox'type="checkbox" value='ca'/>
  </label>
  <label >
    india
    <input className= 'checkbox'type="checkbox" value='in'/>
  </label>
</div>


<div id="language_radios">
  
<h1 className="languageHeading">Select Language</h1>
<hr />

  <label >
  Spanish
    <input className= 'radio'type="radio" value='ar'/>
  </label>
  <label >
    French
    <input className= 'radio'type="radio" value='fr'/>
  </label>
  <label >
    Italian
    <input className= 'radio'type="radio" value='it'/>
  </label>
  <label >
  Portuguese
    <input className= 'radio'type="radio" value='pt'/>
  </label>
  <label >
    Russian
    <input className= 'radio'type="radio" value='ru'/>
  </label>
</div>

</div>

<button id="searchbtn">Search</button>
        </div>
      </>
   
  );
}
