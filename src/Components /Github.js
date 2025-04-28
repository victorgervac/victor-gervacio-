import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "semantic-ui-react";
import { COLORS } from "../styles/styles";
import "../styles/Github.css";
import GithubCard from "./GithubCard";
import { githubDescription } from "../data";

function createMarkup(markup) {
  return { __html: markup };
}

const Github = () => {
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
        <img 
          src="https://ghchart.rshah.org/victorgervac" 
          alt="GitHub Contributions Chart" 
          style={{ width: "90%", height: "auto", marginTop: "2rem" ,marginLeft: "2rem",marginBottom: "2rem"  }}
        />
      </div>
    </div>
  );
};

export default Github;


