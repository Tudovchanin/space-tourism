import { useState } from "react";
import "./Destination.css";
import dataPlanet from "../db/destinations.json";
import BtnContent from "../components/BtnContent";
import TextComponent from "../components/TextComponent";
import Content from "../components/Content";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";
import Info from "../components/Info";

const Destination = () => {
  const [planetInfo, setPlanetInfo] = useState({
    currentPlanet: dataPlanet.destinations[0].name,
    description: dataPlanet.destinations[0].description,
    distance: dataPlanet.destinations[0].distance,
    travel: dataPlanet.destinations[0].travel,
  });

  function handlePlanetChange(e) {
    const namePlanet = e.currentTarget.dataset.key;
    if (namePlanet === planetInfo.currentPlanet) return;
    const objPlanet = dataPlanet.destinations.find(
      (v) => v.name === namePlanet
    );
    setPlanetInfo({
      currentPlanet: namePlanet,
      description: objPlanet.description,
      distance: objPlanet.distance,
      travel: objPlanet.travel,
    });
  }

  return (
    <div className="wrapper destination padding-common">
      <Content>
        <ContentImage>
          <div className="destination__img">
            <img
              src={`${process.env.PUBLIC_URL}/image/destination/image-${planetInfo.currentPlanet.toLowerCase()}.png`}
              alt={`${planetInfo.currentPlanet} planet`}
            />
          </div>
        </ContentImage>
        <ContentText>
          <Info>
            <div className="nav-planet">
              {dataPlanet.destinations.map((planet) => (
                <BtnContent
                  key={planet.name}
                  atr={planet.name}
                  clickHandler={handlePlanetChange}
                  className={"btn-content--hover"}
                >
                  {planet.name}
                </BtnContent>
              ))}
            </div>
            <div className="description-planet">
              <TextComponent
                as="h1"
                size="var(--text-size-large)"
                fontFamily="var(--second-family)"
                weight="var(--font-weight-normal)"
                color="var(--primary-color)"
              >
                {planetInfo.currentPlanet}
              </TextComponent>
              <hr className="line-decor" />
              <TextComponent
                as="p"
                className="destination-description scroll"
                size="var(--text-size-medium)"
                fontFamily="var(--font-family)"
                weight="var(--font-weight-normal)"
                color="var(--primary-color)"
              >
                {planetInfo.description}
              </TextComponent>
            </div>
            <div className="planet-travel-info">
              <TextComponent
                as="p"
                size="var(--text-size-small)"
                fontFamily="var(--third-family)"
                weight="var(--font-weight-bold)"
                color="var(--primary-color)"
              >
                AVG. DISTANCE : {planetInfo.distance}
              </TextComponent>
              <TextComponent
                as="p"
                size="var(--text-size-small)"
                fontFamily="var(--third-family)"
                weight="var(--font-weight-bold)"
                color="var(--primary-color)"
              >
                EST. TRAVEL TIME : {planetInfo.travel}
              </TextComponent>
            </div>
          </Info>
        </ContentText>
      </Content>
    </div>
  );
};

export default Destination;
