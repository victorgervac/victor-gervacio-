import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/Github.css";
import GithubCard from "./GithubCard";
import axios from "axios";
const USERNAME = "victorgervac";
const Github = () => {
  const [repos, setRepos] = useRef([]);
  const [loading, setLoading] = useRef(true);
  const calendarRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src   = "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
    script.async = true;
    script.onload = () => {
      if (calendarRef.current && typeof window.GitHubCalendar === "function") {
        window.GitHubCalendar(calendarRef.current, "victorgervac", { responsive: true });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
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
    <section id="github" className="github-section">
      <div className="github-section-header">
        <h2 className="github-section-title">
          <FontAwesomeIcon icon={faGithub} className="github-title-icon" />
          GitHub
        </h2>
        <a
          href="https://github.com/victorgervac"
          target="_blank"
          rel="noreferrer"
          className="github-profile-link"
        >
          @victorgervac
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "0.4rem", fontSize: "0.72rem" }} />
        </a>
      </div>

      <p className="github-intro">
        My repositories span <strong>Ruby on Rails</strong>, <strong>React</strong>,{" "}
        <strong>JavaScript</strong>, and <strong>Python</strong> — from production
        property-management tools to scripting experiments. Click any card to explore.
      </p>

      <GithubCard />

      <div className="calendar-wrapper">
        <h3 className="calendar-heading">Contribution Activity</h3>
        <div ref={calendarRef} className="calendar github-calendar-themed">
          <div className="calendar-loading">Loading activity…</div>
        </div>
      </div>
    </section>
  );
};

export default Github;
