import React from "react";

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
        <img src="../../src/assets/IMG_2048.jpg" alt="Me" style={imageStyle}/>
        <p>
            After a number of years in Brokerage Operations, I am persuing a new career in web development.
        </p>
      </div>


    </>
  )

}
