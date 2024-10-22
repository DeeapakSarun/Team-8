import React, { useState } from 'react';
import './Team.css';

const teamMembers = [
  {
    name: "Ravali Gangineni",
    bio: "As the reporting and delivery head making sure to submit the work on time.Worked on creating the content page and contributions page. Worked on respective Papers",
    imgUrl: "/images/Ravali.jpeg",
  },
  {
    name: "Deepak Sarun Yuvachandran",
    bio: "Developed website structure and ensured responsiveness. Implemented CI/CD pipelines and collaborated on the home page design, improving functionality and user experience with survey papers.",
    imgUrl: "/images/Deepak.png",
  },
  {
    name: "Sai Sandeep Reddy Gandluri",
    bio: "Created a Draft of Taxonomy page and worked on the survey paper using the overleaf template provided.",
    imgUrl: "/images/Sandeep.png",
  },
  {
    name: "Vyshnavi Gavara",
    bio: "Populated the content in the taxonomy page and worked her respective papers",
    imgUrl: " /images/Vyshnavi.png",
  },
  {
    name: "Mouli Naidu Lukalapu",
    bio: "Created the sidebar, did some styling added the content in the home page",
    imgUrl: "/images/MouliNaidu.png",
  },
  {
    name: "Navreet Kaur",
    bio: "summarized the survey paper findings into a table and worked on development too",
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
            <div className="flip-card-inner" title='Click to flip the card'>
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
