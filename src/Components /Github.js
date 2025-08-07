import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "semantic-ui-react";
import { COLORS } from "../styles/styles";
import "../styles/Github.css";
import GithubCard from "./GithubCard";
import { githubDescription } from "../data";
import { useEffect, useRef } from "react";
import "github-calendar/dist/github-calendar-responsive.css";


function createMarkup(markup) {
  return { __html: markup };

}

const Github = () => {
  
  const calendarRef = useRef(null); 
  useEffect(() => {
    if (calendarRef.current && typeof GitHubCalendar === "function") {
      GitHubCalendar(calendarRef.current, "victorgervac", {
        responsive: true,
        proxy: (victorgervac) => {
          return fetch(`https://your-proxy.com/github?user=${victorgervac}`);
        }
      });
    }
  }, []);

  return (
    <div>
        <Icon name="github" /> Github
      <div className="grid-container">
        <div className="paragraph-cards">
          <div
            className="github-paragraph"
            dangerouslySetInnerHTML={createMarkup(githubDescription)}
            />
          <GithubCard />
        </div>
        <div className="calendar" ref={calendarRef}>
          {/* Loading placeholder */}
          Loading the data just for you.
        </div>
          <a
            className="component-header github"
            href="https://github.com/victorgervac"
            target="_blank"
            rel="noreferrer"
            >
            </a>
  
        {/* <img 
          src="https://ghchart.rshah.org/victorgervac" 
          alt="GitHub Contributions Chart" 
          style={{ width: "90%", height: "auto", marginTop: "2rem" ,marginLeft: "2rem",marginBottom: "2rem"  }}
        /> */}
      </div>
    </div>
  );
};

export default Github;


