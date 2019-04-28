import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

export default function(props) {
    const pushToProjects = event => {
        event.preventDefault();
        props.history.push("/projects");
    }
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <section className="cta cta-partner">
            <div className="content">
              <h2>Finding the right contractor</h2>
              <p>
                for your home improvement can be a pain.
                <br />
                With Simple it's... well, simple
              </p>
              <button onClick={pushToProjects} className="ctaBtn">Find A Contractor</button>
            </div>
            <img alt="finding contractor" className="cta-image" src="imgs/undraw_hire_te5y.svg" />
          </section>

          <div className="barrierIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
            >
              <polygon
                className="st0"
                points="500 500 0 0 0 0 0 500 500 500 "
              />
            </svg>
          </div>
          <section className="spotlight">
            <img alt="filtering results" className="spotlight-image search" src="imgs/filter.svg" />
            <div className="content">
              <h2>See whats relevant</h2>
              <p>
                Filter Projects to the improvements you want to make. See who
                does the best work and find the contractor who's best for you.
              </p>
            </div>
          </section>
          <div className="barrierOut">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
            >
              <polygon
                className="st0"
                points="500 500 0 0 0 0 0 500 500 500 "
              />
            </svg>
          </div>

          <section className="spotlight">
            <div className="content">
              <h2>See what people are saying</h2>
              <p>
                We know word of mouth is important and built our entire platform
                around it. Making it easy to see both sides of an install, and
                easy to add to the community.
              </p>
            </div>
            <img alt="word of mouth" className="spotlight-image search" src="imgs/chat.svg" />
          </section>

          <div className="barrierIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
            >
              <polygon
                className="st0"
                points="500 500 0 0 0 0 0 500 500 500 "
              />
            </svg>
          </div>
          <section className="spotlight">
            <img alt="Super women" className="spotlight-image search" src="imgs/superWomen.svg" />
            <div className="content">
              <h2>Live Your Best Life</h2>
              <p>
                Enjoy the confidence you get knowing you made the right choice.
                Who knows what it could lead to.
              </p>
            </div>
          </section>
          <div className="barrierOut">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
            >
              <polygon
                className="st0"
                points="500 500 0 0 0 0 0 500 500 500 "
              />
            </svg>
          </div>
          {/* <section className="cta cta-partner">
            <div className="content">
              <h2>Become a Partner</h2>
              <p>
                Get your business seen! We'll work with you to get your buisness
                profile set up and help you get the most out of every project
                you post
              </p>
              <button className="ctaBtn">Email Us!</button>
            </div>
            <img alt="join team" className="cta-image" src="imgs/undraw_team_page_pgpr.svg" />
          </section> */}
        </div>
      </Container>
    </>
  );
}

const Container = styled.main`
  min-height: 100vh;
  width: 100%;

  .container {
    margin: 0 auto;
  }

  .content {
    width: 40%;
    text-align: center;
    @media (max-width: 850px) {
      width: 90%;
    }

    h2 {
      line-height: 1.5;
      font-size: 4rem;

      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }

    p {
      margin-bottom: 20px;
      font-size: 2.4rem;

      @media (max-width: 500px) {
        font-size: 1.8rem;
      }
    }
  }

  .barrierIn {
    width: 100%;
    height: 100px;
    margin-top: -100px;

    @media (max-width: 500px) {
      height: 50px;
    }

    svg {
      fill: #4abdac;
      height: 100px;
      width: 100%;

      @media (max-width: 500px) {
        height: 50px;
      }
    }
  }

  .barrierOut {
    width: 100%;
    height: 100px;
    margin-top: -100px;

    @media (max-width: 500px) {
      height: 50px;
    }

    svg {
      fill: white;
      height: 100px;
      width: 100%;
      transform: scale(-1, 1);

      @media (max-width: 500px) {
        height: 50px;
        width: 100%;
      }
    }
  }

  .cta {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px 0;

    @media (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
      min-height: unset;
    }

    .cta-image {
      width: 45%;
      @media (max-width: 850px) {
        width: 90%;
      }
    }

    .ctaBtn {
      width: 200px;
      padding: 15px;
      font-size: 2rem;
      background: #4abdac;
      color: white;

      border: 2px solid #4abdac;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

      transition: 0.25s;

      &:hover {
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
      }

      @media (max-width: 850px) {
        margin-bottom: 50px;
      }
    }
  }

  .spotlight {
    background: #4abdac;
    color: white;

    min-height: 200px;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 850px) {
      flex-direction: column-reverse;
      padding-top: 100px;
    }

    @media (max-width: 500px) {
      padding-top: 50px;
    }

    &:nth-of-type(2n-1) {
      background: white;
      color: black;

      @media (max-width: 850px) {
        flex-direction: column;
      }
    }

    .spotlight-image {
      width: 35%;
      padding: 100px 0;

      @media (max-width: 850px) {
        width: 60%;
        padding: 50px 0;
      }
    }
  }
`;
