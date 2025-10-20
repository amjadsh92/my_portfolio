/* eslint-disable */

import "./Home.scss";
import contrastIcon from "../../assets/images/contrast.png";
import { useState } from "react";


function Home({isDarkMode}) {

    return(

        <div className={`${isDarkMode ? "home-dark" : "home-light"} `}>

        </div>
    )
  
}

export default Home;
