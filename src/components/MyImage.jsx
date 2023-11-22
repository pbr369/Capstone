import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(imgs.length > 0 ? imgs[0] : null);

  if (!Array.isArray(imgs)) {
    console.error("imgs must be an array");
    return null; // or handle the error in a way that makes sense for your application
  }

  // Filter out images without a valid URL
  const validImages = imgs.filter(
    (img) => typeof img === "string" && img.trim() !== ""
  );

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {validImages.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm}
              alt={`Image ${index + 1}`}
              className="max-w-[200px] h-[100px] border border-gray-300 rounded shadow-md"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>
      {/* 2nd column  */}

      <div className="max-w-[400px] h-[150px]">
        {mainImage && <img src={mainImage} alt={`Main Image`} />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 70%) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
