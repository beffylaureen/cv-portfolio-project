import React from "react";
import Me from "../assets/IMG_2048.jpg";

export default function User(props){

    const imageStyle = {
    width: "300px",
    height: "300x",
  }

  console.log(props)


  return(
    <>
   {<h1>About Me</h1>}
      <div>
      
        <p>
            After a number of years in Brokerage Operations, I am pursuing a new career in web development.
        </p>
        <p>
            In my spare time I enjoy knitting.  Check out my Instagram page to view some of my knitting projects.
        </p>
        <img src={Me} alt="Me" style={imageStyle}/>
      </div>


    </>
  )

}
