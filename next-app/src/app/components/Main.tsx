import { styled } from "styled-components";
import { themeColor } from "../helper/constant";

export function Main() {
  return (
    <MainContainer>
      <CakeTitle data-animation="fadeInUp" data-delay=".2s" >
        Healthy Made D<Rotate>e</Rotate>licious Cake
      </CakeTitle>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  background-image: url(${"/images/cupcakebg.webp"});
  background-repeat: no-repeat;
  height: 100vh;
  height: 700px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const CakeTitle = styled.h1`
  position: absolute;
  top: 31%;
  left: 14%;
  color: white;
  font-size: 4rem;
  width: 28rem;
  font-weight: lighter;
`;
const Rotate = styled.span`
  display: inline-block;
  transform: rotate(45deg);
  color:${themeColor.yellow}
`;
