import "./Home.css";
import Content from "../components/Content";
import ContentImage from "../components/ContentImage";
import ContentText from "../components/ContentText";
import TextComponent from "../components/TextComponent";
import CircleAction from "../components/CircleAction";
import Info from "../components/Info";

const Home = () => {
  return (
    <div className="wrapper home padding-common padding-bt">
      <Content>
        <ContentText>
          <Info className="info-home">
            <TextComponent
              as="h1"
              size="var(--text-size-medium)"
              fontFamily="var(--third-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              SO, YOU WANT TO TRAVEL TO
            </TextComponent>

            <TextComponent
              as="strong"
              size="var(--text-size-large)"
              fontFamily="var(--second-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              SPACE
            </TextComponent>

            <TextComponent
              as="p"
              size="var(--text-size-medium)"
              fontFamily="var(--third-family)"
              weight="var(--font-weight-normal)"
              color="var(--primary-color)"
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </TextComponent>
          </Info>
        </ContentText>
        <ContentImage>
          <CircleAction>EXPLORE</CircleAction>
        </ContentImage>
      </Content>
    </div>
  );
};

export default Home;
