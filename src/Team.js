import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
    imgUrl: "public/images/Navreet.png",
  },
  {
    name: "Mouli Naidu Lukalapu",
    bio: "Bio for Mouli...",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Navreet Kaur",
    bio: "Hi,My name is Navreet Kaur and I am a graduate student currently pursuing a Master's degree in Computer Science, following my Bachelor's in Computer Application from Punjab, India. Throughout my academic journey, I have worked on various projects that have enhanced my skills in Java and Python. As part of my software development principles coursework, I collaborated on a group project called GoFundEase, an innovative platform aimed at revolutionizing fundraising for personal causes, charitable events, and entrepreneurial ventures. My primary focus was on the backend development, where I designed and implemented a robust server-side architecture to handle API requests and manage database interactions. Outside of academics, I enjoy reading books,  Brian Weiss being one of my favorite authors, which allows me to maintain a balanced life while pursuing my studies.",
    imgUrl: "public/images/Navreet.png",
  },
];

function Team() {
  return (
    <div className="App-team">
      <Typography variant="h4" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className="team-card">
              <div className="media-wrapper">
                <CardMedia
                  component="img"
                  alt={member.name}
                  image={member.imgUrl}
                  className="team-image"
                />
              </div>
              <CardContent>
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Team;