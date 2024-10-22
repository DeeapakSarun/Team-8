import React, { useState } from "react";
import "./App.css";

function Main() {
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(true);
  const [isChallengesOpen, setIsChallengesOpen] = useState(false);
  const [isTrendsOpen, setIsTrendsOpen] = useState(false);
  const [isFutureOpen, setIsFutureOpen] = useState(false);

  return (
    <main className="App-main">
      <p>
        This is the website created as part of Group Assignment for the course "Webtechnologies". It has the Survey findings and details. on the topic "Privacy-Preserving Machine Learning Techniques For Web Applications"
      </p>
    </main>
  );
}

export default Main;
