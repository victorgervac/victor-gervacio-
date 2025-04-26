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
        <div
          className="github-paragraph"
          dangerouslySetInnerHTML={createMarkup(githubDescription)}
        />
        <img 
          src="https://ghchart.rshah.org/victorgervac" 
          alt="GitHub Contributions Chart" 
          style={{ width: "100%", height: "auto", marginTop: "2rem" }}
        />
        <GithubCard />
      </div>
    </div>
  );
};

export default Github;


