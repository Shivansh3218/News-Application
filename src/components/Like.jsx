import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from 'react';
function Like({url}) {
    let [count,setCount]= useState(0)

    const handleClick= ()=>{
        if(count===1) return setCount(0)
        else if(count===0) return setCount(1)
    }
  return (
    <div>
        {
            count===0?
            <FavoriteIcon id = {url}  onClick={handleClick}/>:
            <FavoriteIcon id = {url} style={{color:'red'}} onClick={handleClick}/>
        }
     
    </div>
  )
}

export default Like