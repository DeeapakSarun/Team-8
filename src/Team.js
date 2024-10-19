import React, { useState } from 'react';
import './Team.css';

const teamMembers = [
  {
    name: "Ravali Gangineni",
    bio: "Bio for Ravali...",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Deepak Sarun Yuvachandran",
    bio: "Bio for Deepak...",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sai Sandeep Reddy Gandluri",
    bio: "Bio for Sai Sandeep...",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Vyshnavi Gavara",
    bio: "Bio for Vyshnavi...",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Mouli Naidu Lukalapu",
    bio: "Bio for Mouli...",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Navreet Kaur",
    bio: "Bio for Navreet...",
    imgUrl: "/images/Navreet.png",
  },
];

function Team() {
  const [flipped, setFlipped] = useState(Array(teamMembers.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="App-team">
      <h2>Meet the Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="media-wrapper">
                  <img src={member.imgUrl} alt={member.name} className="team-image" />
                </div>
                <h5>{member.name}</h5>
              </div>
              <div className="flip-card-back">
                <p>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
