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
    const script = document.createElement("script");
    script.src = "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
    script.async = true;
    script.onload = () => {
      if (calendarRef.current && typeof window.GitHubCalendar === "function") {
        window.GitHubCalendar(calendarRef.current, "victorgervac", {
          responsive: true,
          proxy: (username) => {
            return fetch(`https://your-proxy.com/github?user=${username}`);
          }
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <a
        className="component-header github"
        href="https://github.com/victorgervac"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" /> Github
      </a>
      <div className="grid-container">
        <div className="paragraph-cards">
          <div
            className="github-paragraph"
            dangerouslySetInnerHTML={createMarkup(githubDescription)}
            />
          <GithubCard />
        </div>
        <div className="calendar" ref={calendarRef} style={{ color: "white", fontWeight: "bold" }}>
          Loading the data just for you.
        </div>
      </div>
    </div>
  );
};

export default Github;


