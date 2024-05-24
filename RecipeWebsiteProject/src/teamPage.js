// TeamPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import './styles.css';

import Blaze from "./TeamPageImages/blazeForSE.png";
import Axolotl from "./TeamPageImages/axolotlForSE.jpg";
import Salmon from "./TeamPageImages/SAlmnoForSe.png";
import Mooshroom from "./TeamPageImages/mooshroom.jpg";

class TeamMember {
    constructor(name, image, biography) {
        this.name = name;
        this.image = image;
        this.biography = biography;
    }
}

const teamMembers = [
    new TeamMember("Adam aka BLAZE", Blaze, "Blaze is a talented developer with a passion for coding."),
    new TeamMember("Alya aka Axolotl", Axolotl, "Axolotl is a coding expert with almost 200 years of experience."),
    new TeamMember("Garret aka Salmon", Salmon, "Salmon is a creative designer with an eye for detail."),
    new TeamMember("Arun aka Mooshroom", Mooshroom, "Mooshroom is Mooshroom, go Mooshroom"),
];



const TeamPage = () => {
    const [groceryListWidth, setGroceryListWidth] = useState(
        localStorage.getItem('groceryListWidth') || 0
      );
    
      useEffect(() => {
        const groceryListElement = document.getElementById('groceryList');
        if (groceryListElement) {
          const width = groceryListElement.offsetWidth;
          setGroceryListWidth(width);
          localStorage.setItem('groceryListWidth', width);
        }
      }, []);

    return (
        <div style={{ 
            backgroundColor: '#b5651d', 
            minHeight: '100vh', 
        }}>
            <Container className="p-3">
                <Card className="p-3">
                    <div className="header">
                        <h1>Our Team</h1>
                    </div>
                    <div className="centered-content team-container">
                        <div id="team-container">
                            {teamMembers.map((member, index) => (
                                <div className="member-card" key={index}>
                                    <img className="team-image" src={member.image} alt={member.name} />
                                    <h2>{member.name}</h2>
                                    <p>{member.biography}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default TeamPage;
