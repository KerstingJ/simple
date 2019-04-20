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
      <button className="btnLeft" onClick={moveLeft}>{`<`}</button>
      {images.map((img, index) => (
        <img
          className={`img${index === active ? ` imgdisplay` : ``}`}
          src={img}
        />
      ))}
      <button className="btnRight" onClick={moveRight}>{`>`}</button>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

  .img {
    display: none;
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    &.imgdisplay {
      display: unset;
    }
  }

  button {
    position: absolute;
    background: rgba(124,124,124,0.4);
    color: white;
    /* text-shadow: 1px 1px 0 white; */
    border-radius: 25px;
    border: 1px solid white;
    /* box-shadow: 1px 1px 0 white; */
    padding: .5rem .9rem;

    &.btnLeft{
        left: 15%;
    }

    &.btnRight{
        right: 50%;
    }

  }
`;
