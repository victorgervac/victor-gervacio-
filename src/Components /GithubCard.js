import React, { useState, useEffect } from "react";
import axios from "axios"
import Carousel from "react-simply-carousel";
import { Button , Card, CardContent, Grid, GridColumn, GridRow, Icon } from "semantic-ui-react";

const GithubCard = () => {
  const [isOPen, setIsOpen ]= useState(false)
  const [repos, setRepos]= useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

    useEffect(()=>{
      getRepos()
    },[]);

    async function getRepos() {
        try {
        const res = await axios.get(
            `https://api.github.com/users/victorgervac/repos`
        );
        debugger
        if(repos.stargazers_count.length > 0){
        setRepos(res.data);
        // console.log("called getRepos",res.data);
        
        }
        } catch (err) {
        alert("error occuered getting repos");
        }
      }
    
  return(
  <div className="box-repo"> 
   {/* <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between"
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        itemsToShow={2}
        speed={400}
      >   */}
        {repos.map((r) =>(
          // <div clasName="box-github-cards">
          // {r.stargazers_count > 0 &&(
                     
              <div className="card" key={r.id}>
               {/* <Card className="cardClass" key={r.id}> */}
                  <h1>{r.name}</h1>
                  <div className="description">
                    <h4>{r.description}</h4>
                  </div>
                  <h4 className="star"> 
                   <Icon >
                    {r.stargazers_count}
                    </Icon>
                  </h4>
                  {r.desciption ? {r} : "This project was made usuing the best of my avilitys, follow the code to learn more"}
                  <div>
                    <a href={r.html_url} className="button"  target="_blank" rel="noreferrer">
                      <span className="link">
                        LEARN MORE
                      </span> 
                    </a>
                  </div>
          </div>
          // )}
        //  </div>
        ))} 
        {/* </Carousel> */}
  </div>
);
}


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