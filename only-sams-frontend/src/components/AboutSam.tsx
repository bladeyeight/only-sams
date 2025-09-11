import React from 'react';
import './style/AboutSam.css';

const AboutSam: React.FC = () => {
  const bio = `Hello!  My name is Sam and I love video games.  I've been playing them for about 30 years ever since I was 5 years old. Whenever I sit down to play a game with my adorable cat asleep on my lap, I can feel how much human passion, time, and money went into the worlds created on my screen and I find it hard to believe that these games even exist at all. I feel so grateful to the people that make it happen and inspired by them to make my dreams a reality in the same way.  Video games inspired me to become a software developer for my career and to obviously make this site.  We truly live in the golden age of video games and there are SO many games being released every day by extremely small dedicated teams and massive corporations alike that are all competing for your time.  There are so many games on Steam and other platforms that it can seem impossible to find the best games to play.  I want to help you find them quickly as they come out each year, especially the less well known indie games that can slip through the cracks.  \n\nI have beaten every single game that is listed on this site(beaten means seeing credits).  Because of this most games have received a score of 7 or above because if a game is below 7 I probably don't want to spend the time to complete it.      `;

  const renderBio = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="bio-paragraph">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Sam</h1>
        <div className="profile-image-container">
          <img 
            src="/facebookprof.jpg" 
            alt="Sam's Profile" 
            className="profile-image"
          />
        </div>
        <div className="about-section">
          <div className="bio-content">
            {renderBio(bio)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSam;
