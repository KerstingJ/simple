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
      {images.length > 1 && <button className="btnLeft" onClick={moveLeft}>{`<`}</button>}
      {images && images.map((img, index) => (
        <img
          alt="cetail of project"
          key={img}
          className={`img${index === active ? ` imgdisplay` : ``}`}
          src={`../${img}`}
        />
      ))}
      {images.length > 1 && <button className="btnRight" onClick={moveRight}>{`>`}</button>}
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 500px;
    overflow: hidden;

  .img {
    display: none;
    width: 100%;
    object-fit: cover;

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
        left: 10%;
    }

    &.btnRight{
        right: 10%;
    }

  }
`;
