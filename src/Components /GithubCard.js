import React from "react";
import { Icon } from "semantic-ui-react";

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Ruby: "#701516",
  Python: "#3572A5",
  Swift: "#F05138",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Shell: "#89e051",
};

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
              backgroundColor: LANGUAGE_COLORS[repo.language] || "#8b949e",
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
