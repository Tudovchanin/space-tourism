import { useState } from "react";
import "./Crew.css";

import BtnContent from "../components/BtnContent";
import Content from "../components/Content";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";
import TextComponent from "../components/TextComponent";
import Info from "../components/Info";

import dataCrew from "../db/crew.json";

const Crew = () => {
  const [crewInfo, setCrewInfo] = useState({
    name: dataCrew.crew[0].name,
    role: dataCrew.crew[0].role,
    bio: dataCrew.crew[0].bio,
  });

  function handleCrewChange(e) {
    const name = e.currentTarget.dataset.key;
    if (name === crewInfo.name) return;

    const objCrew = dataCrew.crew.find((v) => v.name === name);
    setCrewInfo({
      name: name,
      role: objCrew.role,
      bio: objCrew.bio,
    });
  }

  return (
    <div className="wrapper crew padding-common">
      <Content>
        <ContentText>
          <Info>
            <TextComponent
              as="h1"
              className="crew-role"
              size="var(--text-size-medium)"
              fontFamily="var(--third-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              {crewInfo.role}
            </TextComponent>

            <TextComponent
              as="h2"
              className="name-crew"
              size="var(--text-size-large)"
              fontFamily="var(--second-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              {crewInfo.name}
            </TextComponent>

            <TextComponent
              as="p"
              className="bio-crew scroll"
              size="var(--text-size-medium)"
              fontFamily="var(--font-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              {crewInfo.bio}
            </TextComponent>
            <div className="nav-crew">
              {dataCrew.crew.map((v) => (
                <BtnContent
                  key={v.name}
                  atr={v.name}
                  clickHandler={handleCrewChange}
                  className={"btn-content btn-content--hover"}
                >
                  {v.name}
                </BtnContent>
              ))}
            </div>
          </Info>
        </ContentText>

        <ContentImage>
          <div className="crew__img">
            <img
              src={`${process.env.PUBLIC_URL}/image/crew/image-${crewInfo.name
                .toLowerCase()
                .split(" ")
                .join("-")}.png`}
              alt={`${crewInfo.currentPlanet} planet`}
            />
          </div>
        </ContentImage>
      </Content>
    </div>
  );
};

export default Crew;
