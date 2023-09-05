import React from "react";
import resumeFile from "../assets/Resume.pdf";

const ResumePage = () => {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Work Experience</h2>
        <ul>
          <li>RBC Capital Markets - Specialist</li>
            <p>Held a number of positions within RBC Capital Markets Operations.</p>
            <p>Most recent position was Specialist in Product Services Initiatives.</p>
        </ul>

      <h2>Education</h2>
        <ul>
          <li>Winona State University - Bachelor of Science in Finance</li>
          <li>University of Minnesota - Full Stack Web Development Certificate</li>
        </ul>

      <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
        </ul>  
      <a href={resumeFile} download="Resume.pdf">Download Resume</a>

    </div>

  
  );
};

export default ResumePage;
