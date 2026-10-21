import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import toast from "react-hot-toast";
import "../styles/Github.css";
import "github-calendar/dist/github-calendar-responsive.css";
import GitHubCalendar from "github-calendar";
import GithubCard, { GithubCardSkeleton } from "./GithubCard";
import { githubDescription } from "../data";

const USERNAME = "victorgervac";

function createMarkup(markup) {
  return { __html: markup };
}

const Github = () => {
  const calendarRef = useRef(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, USERNAME, { responsive: true });
    }
  }, []);

  useEffect(() => {
    async function getRepos() {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100`
        );
        const sortedRepos = res.data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(sortedRepos);
      } catch (err) {
        toast.error("Could not load GitHub repositories.");
      } finally {
        setLoading(false);
      }
    }
    getRepos();
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const languageCount = new Set(repos.map((r) => r.language).filter(Boolean))
    .size;

  return (
    <section className="github-section">
      <a
        className="component-header github"
        href={`https://github.com/${USERNAME}`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" /> GitHub
      </a>

      <div
        className="github-paragraph"
        dangerouslySetInnerHTML={createMarkup(githubDescription)}
      />

      <div className="github-stats">
        <div className="github-stat">
          <span className="github-stat-value">{loading ? "–" : repos.length}</span>
          <span className="github-stat-label">Repositories</span>
        </div>
        <div className="github-stat">
          <span className="github-stat-value">{loading ? "–" : totalStars}</span>
          <span className="github-stat-label">Stars</span>
        </div>
        <div className="github-stat">
          <span className="github-stat-value">{loading ? "–" : languageCount}</span>
          <span className="github-stat-label">Languages</span>
        </div>
      </div>

      <div className="repo-grid">
        {loading
          ? Array.from({ length: 6 }, (_, i) => <GithubCardSkeleton key={i} />)
          : repos.slice(0, 9).map((repo) => (
              <GithubCard key={repo.id} repo={repo} />
            ))}
      </div>

      <div className="calendar-panel">
        <h3 className="calendar-title">Contribution activity</h3>
        <div className="calendar" ref={calendarRef}>
          Loading contributions…
        </div>
      </div>

      <div className="github-cta-wrapper">
        <a
          className="github-cta"
          href={`https://github.com/${USERNAME}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
        >
          View all repositories <Icon name="arrow right" />
        </a>
      </div>
    </section>
  );
};

export default Github;
