import React from "react";
import Weather from "../assets/weather-dashboard.png";
import Quiz from "../assets/code-quiz.png";
import Happy from "../assets/happy-hour.png";
import SVG from "../assets/svg-logo-maker.png";
import Password from "../assets/password-generator.png";
import Note from "../assets/note-taker.png";

function Portfolio() {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={Weather} className="card-img-top" alt="Weather Dashboard" />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Displays current and future weather conditions.</p>
              <a href="https://beffylaureen.github.io/wx-dashboard/" className="btn btn-primary">View Project</a>
              <a href="https://github.com/beffylaureen/wx-dashboard">GitHub</a>
            </div>
          </div>
        </div>
        {/* Add more project cards or thumbnails */}
        <div className="col-md-4">
          <div className="card">
            <img src={Quiz} className="card-img-top" alt="Code Quiz" />
            <div className="card-body">
              <h5 className="card-title">Code Quiz</h5>
              <p className="card-text">A simple quiz about miscellaneous coding terms.</p>
              <a href="https://beffylaureen.github.io/code-quiz/" className="btn btn-primary">View Project</a>
              <a href="https://github.com/beffylaureen/code-quiz">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={Happy} className="card-img-top" alt="Happy Hour" />
            <div className="card-body">
              <h5 className="card-title">Happy Hour</h5>
              <p className="card-text">A cocktail recipe generator.  This was a group project with Andrew, Jon, and Wyatt.</p>
              <a href="https://wyattdronen.github.io/group-project-1/" className="btn btn-primary">View Project</a>
              <a href="https://github.com/wyattdronen/group-project-1">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={SVG}className="card-img-top" alt="SVG Logo Maker" />
            <div className="card-body">
              <h5 className="card-title">SVG Logo Maker</h5>
              <p className="card-text">A Node.js application that generates shapes containing three characters.</p>
              <a href="https://drive.google.com/file/d/1yHGoXqO-60FklVjmM76ga-VFrRaadwY2/view" className="btn btn-primary">View Project</a>
              <a href="https://github.com/beffylaureen/svg-logo-maker">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={Password} className="card-img-top" alt="Code Quiz" />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">For those times when you need to come up with a new password, this application will generate one for you!</p>
              <a href="https://beffylaureen.github.io/password-generator/" className="btn btn-primary">View Project</a>
              <a href="https://github.com/beffylaureen/password-generator">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={Note} className="card-img-top" alt="Note Taker" />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">A note-taking application that utilizes an Express.js back end.</p>
              <a href="https://git.heroku.com/easy-note-taker.git" className="btn btn-primary">View Project</a>
              <a href="https://github.com/beffylaureen/note-taker">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
