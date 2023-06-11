import React from "react";
import homeVideo from './video.mp4';
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <video autoPlay muted loop className="background-video">
        <source src={homeVideo} type="video/mp4" />
      </video>
      <div className="centered-content">
        <h1>Taskinator</h1>
        <h2> Taskinator is your task-getting solution!</h2>
        <h2> Find tasks listed by top companies in your field and get experience!</h2>
        <h2 class="h2-button">Get Started Now!
        <NavLink to="/SignUp" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")
                            }
                                
                            >
                                </NavLink>
        
        </h2>

      </div>
      
    </div>
  );
}
