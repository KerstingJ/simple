import React, { useState } from "react";
import styled from "styled-components";

export default function(props) {
  const [active, setActive] = useState(0);
  const { images } = props;

  function moveLeft(event) {
    event.preventDefault();
    setActive(active - 1 >= 0 ? active - 1 : images.length - 1);
  }

  function moveRight(event) {
    event.preventDefault();
    setActive(active + 1 < images.length ? active + 1 : 0);
  }

  return (
    <CarouselContainer>
      {images.length > 1 && (
        <button className="btnLeft" onClick={moveLeft}>{`<`}</button>
      )}
      {images &&
        images.map((img, index) => (
          <img
            alt="project detail"
            key={img}
            className={`img${index === active ? ` imgdisplay` : ``}`}
            src={img}
          />
        ))}
      {images.length > 1 && (
        <button className="btnRight" onClick={moveRight}>{`>`}</button>
      )}
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
    display: flex;
    overflow: none;
    width: 100%;
  }

  .img {
    display: none;
    width: 100%;
    max-width: 500px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-left: -29px;

    @media (max-width: 750px) {
      width: 100%;
      height: auto;
      max-width: none;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 2px;
      margin-left: unset;
    }

    &.imgdisplay {
      display: unset;
    }
  }

  button {
    position: relative;
    background: rgba(124, 124, 124, 0.4);
    color: white;
    /* text-shadow: 1px 1px 0 white; */
    border-radius: 25px;
    border: 1px solid white;
    /* box-shadow: 1px 1px 0 white; */
    padding: 0.5rem 0.9rem;

    @media (max-width: 750px) {
      position: absolute;
    }

    &.btnLeft {
      left: 4%;
      @media (max-width: 750px) {
        left: 20%;
      }
      @media (max-width: 500px) {
        left: 5%;
      }
    }

    &.btnRight {
      right: 13%;
      @media (max-width: 750px) {
        right: 5%;
      }
    }
  }
`;
