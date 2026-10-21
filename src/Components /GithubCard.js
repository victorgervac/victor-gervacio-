import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeFork, faArrowUpRightFromSquare, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "../Hooks/useInView";
import { Icon } from "semantic-ui-react";

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Ruby:       "#701516",
  Python:     "#3572A5",
  Swift:      "#F05138",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  Shell:      "#89e051",
  Go:         "#00ADD8",
  Rust:       "#dea584",
  Java:       "#b07219",
};

function relativeTime(dateStr) {
  const diff   = Date.now() - new Date(dateStr).getTime();
  const days   = Math.floor(diff / 86400000);
  const months = Math.floor(days / 30);
  const years  = Math.floor(days / 365);
  if (years  > 0) return years  + "y ago";
  if (months > 0) return months + "mo ago";
  if (days   > 0) return days   + "d ago";
  return "today";
}

function timeAgo(date) {
  const days = Math.floor((Date.now() - new Date(date)) / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export const GithubCardSkeleton = () => (
  <div className="repo-card skeleton">
    <div className="skeleton-line wide" />
    <div className="skeleton-line" />
    <div className="skeleton-line" />
    <div className="skeleton-line short" />
  </div>
);

const GithubCard = ({ repo }) => (
  <a
    className="repo-card"
    href={repo.html_url}
    target="_blank"
    rel="noreferrer"
  >
    <div className="repo-card-header">
      <Icon name="book" className="repo-icon" />
      <h4 className="repo-name">{repo.name}</h4>
      <Icon name="external alternate" className="repo-external" />
    </div>

    <p className="repo-description">
      {repo.description || "No description provided."}
    </p>

    {repo.topics?.length > 0 && (
      <div className="repo-topics">
        {repo.topics.slice(0, 3).map((topic) => (
          <span key={topic} className="repo-topic">
            {topic}
          </span>
        ))}
      </div>
    )}

    <div className="repo-meta">
      {repo.language && (
        <span className="repo-meta-item">
          <span
            className="language-dot"
            style={{
              backgroundColor: LANG_COLORS[repo.language] || "#8b949e",
            }}
          />
          {repo.language}
        </span>
      )}
      {repo.stargazers_count > 0 && (
        <span className="repo-meta-item">
          <Icon name="star outline" /> {repo.stargazers_count}
        </span>
      )}
      {repo.forks_count > 0 && (
        <span className="repo-meta-item">
          <Icon name="fork" /> {repo.forks_count}
        </span>
      )}
      <span className="repo-meta-item repo-updated">
        {timeAgo(repo.pushed_at)}
      </span>
    </div>
  </a>
);

export default GithubCard;
