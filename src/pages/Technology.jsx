import { useState } from "react";
import "./Technology.css";
import dataTechnology from "../db/technology.json";

import BtnContent from "../components/BtnContent";
import Content from "../components/Content";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";
import TextComponent from "../components/TextComponent";
import Info from "../components/Info";

const Technology = () => {
  const [technologyInfo, setTechnologyInfo] = useState({
    technology: dataTechnology.technology[0].name,
    description: dataTechnology.technology[0].description,
  });
  function handleTechnologyChange(e) {
    const name = e.currentTarget.dataset.key;
    const objTechnology = dataTechnology.technology.find(
      (v) => v.name === name
    );
    setTechnologyInfo({
      technology: name,
      description: objTechnology.description,
    });
  }
  function getImagePath(technology) {
    const imageName = technology.toLowerCase().split(" ").join("-");
    return `./image/technology/image-${imageName}`;
  }

  return (
    <div className="wrapper technology padding-common padding-bt">
      <Content className="content-technology">
        <ContentText>
          <Info className="info-technology">
            <TextComponent
              as="h1"
              className="technology-name"
              size="var(--text-size-large)"
              fontFamily="var(--second-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              {technologyInfo.technology}
            </TextComponent>

            <TextComponent
              as="p"
              className="technology-description scroll"
              size="var(--text-size-medium)"
              fontFamily="var(--font-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              {technologyInfo.description}
            </TextComponent>

            <div className="nav-technology">
              {dataTechnology.technology.map((v) => (
                <BtnContent
                  key={v.name}
                  atr={v.name}
                  clickHandler={handleTechnologyChange}
                  className={"btn-content btn-content--reset-width btn-content--hover"}
                >
                  {v.name}
                </BtnContent>
              ))}
            </div>
          </Info>

        </ContentText>
        <ContentImage>
          <div className="technology__img">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={
                  getImagePath(technologyInfo.technology) + "-portrait.jpg"
                }
              />
              <img
                src={getImagePath(technologyInfo.technology) + "-landscape.jpg"}
                alt={`${technologyInfo.technology} planet`}
              />
            </picture>
          </div>
        </ContentImage>
      </Content>
    </div>
  );
};

export default Technology;
