import { Link } from "react-router-dom";

const LandingPage = () => {
  const listofChallenges = [{ day: 1, challange: "Guess the colour", route: "ColorGuess" }, { day: 2, challange: "Dynamic Dropdown", route: "DynamicDropdown"}];
  return (
    <>
      <div className="container">
        <div className="challenge-box">
          {listofChallenges.map((challenge) => (
            <Link to={challenge.route} className="challenge-box">
              <div className="day" >Day {challenge.day}</div>
              <div className="challenge">Challenge : {challenge.challange}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;