import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import toast from "react-hot-toast";

const GithubCard = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos();
  }, []);

  async function getRepos() {
    try {
      const res = await axios.get(
        `https://api.github.com/users/victorgervac/repos`
      );

      const sortedRepos = res.data.sort(
        (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)
      );

      setRepos(sortedRepos.slice(0, 20)); 
    } catch (err) {
      toast.error("Could not load GitHub repositories.");
    }
  }

  return (
    <div className="scrolling-wrapper">
      {repos.map((repo) => (
        <div key={repo.id} className="calendar-days rounded">
          <div className="sub-card rounded">
            <h4>
              <b>{repo.name}</b>
              {repo.stargazers_count > 0 && (
                <Icon
                  name="star"
                  color="yellow"
                  style={{ marginLeft: "0.5rem" }}
                />
              )}
            </h4>
            <b className="sub-tittle">{repo.language || "Unknown"}</b>
            <p>{repo.description || "No description provided."}</p>
            <a
              href={repo.html_url}
              className="primary-button"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GithubCard;


// --main-bg-color: #343b3f;
// --selected-text-color: #212121;
// --selected-text-bg-color: #aadc39;
// --main-text-color: #fff;
// --calendar-text-color: #f5f5f5;
// --nav-footer-bg-color: rgba(37,37,37,0.98);
// --small-padding: 1rem;
// --med-margin: 1.2rem;
// --twitter-brand: #1da1f2;
// --dull-white: #c5c4bf;
// font-family: Manrope,sans-serif;
// color: var(--main-text-color);
// box-shadow: 0 .25rem .5rem 0 rgba(0,0,0,.2);
// padding: 1rem 1.3rem;
// text-align: center;
// background-color: var(--nav-footer-bg-color);
// border-radius: .42rem;
// width: 90%;
// margin: 1rem;
// transition: all .25s;
// justify-self: center;

// --main-bg-color: #343b3f;
// --selected-text-color: #212121;
// --selected-text-bg-color: #aadc39;
// --main-text-color: #fff;
// --calendar-text-color: #f5f5f5;
// --nav-footer-bg-color: rgba(37,37,37,0.98);
// --small-padding: 1rem;
// --med-margin: 1.2rem;
// --twitter-brand: #1da1f2;
// --dull-white: #c5c4bf;
// text-align: center;
// padding: 0;
// font-family: Manrope,sans-serif;
// color: var(--main-text-color);
// max-height: 5rem;
// margin: .5rem 0;

{/* <Grid>
<Grid.Row>
    {repos.map((r) => (
      <Grid.Column key={r.id} width={5}>
        Not the most resuable 
        <Card style={styles.card}>
          <Card.Content>
            <Card.Header style={{overflow:"hidden", textOverflow: "ellipsis"}}>
            {r.full_name}
            </Card.Header>
            <Card.Meta>{r.description}</Card.Meta>
            {r.stargazers_count > 0 && (
              <Star>
              <Icon name="star" />
            </Star>
              )}
          </Card.Content>
          <Card.Content extra>
            <ButtonLink href={r.html_url} target="_blank">
              View
            </ButtonLink>
          </Card.Content>
        </Card>
      </Grid.Column>
    ))}
  </Grid.Row>
</Grid>
} */}