import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: 800ms;
  background-color: transparent;
  background-size: cover;
  scroll-behavior: smooth;

    @media ${breakPoints.tablet} {
      width: 100%;
    }
    @media ${breakPoints.mobile} {
      /* width: 100%; */
      /* border: 10px dotted green; */
      /* display: none; */
      /* justify-content: flex-start; */
      /* width: 100%; */
      /* right: 0; */
      width: 100%;
    }

  &.change_header {
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    padding-bottom: 10px;
    padding-top: 10px;
    transition: 800ms;
    box-shadow: -1px 5px 19px -3px rgba(0,0,0,0.21);
     }
  }

 

`;

export const LogoWrapper = styled.div``;

export const Img = styled.img`
  width: 115px;
  height: 42px;
  transition: 300ms;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    /* width: 100%; */
    /* padding-left: 5%; */
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    /* width: 1; */
    /* padding-left: 5%; */
  }
`;

export const CategoryClass = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #fff;
  margin-left: 172px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    /* padding-left: 5%; */
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    /* width: 100%; */
    /* padding-left: 5%; */
    margin-left: 60px;
  }

  :hover {
    color: #fafafa;
    opacity: 0.7;
  }

  &.change_header {
    color: black;
    transition: 300ms;
    :hover {
      color: #4f3325;
      opacity: 0.5;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

export const CategoryStore = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #fff;
  margin-left: 50px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    /* padding-left: 5%; */
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    /* width: 100%; */
    /* padding-left: 5%; */
  }

  :hover {
    color: #fafafa;
    opacity: 0.5;
  }

  &.change_header {
    color: black;
    transition: 300ms;
    :hover {
      color: #4f3325;
      opacity: 0.5;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

export const RoundDiv = styled.div`
  width: 380px;
  height: 48px;
  flex-grow: 0;
  margin-left: 320px;
  /* padding-bottom: 3px; */
  border-radius: 90px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
  padding-left: 40px;
  padding-right: 9.8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 500ms;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const RoundDivInnerText = styled.input`
  width: 280px;
  height: 30px;
  flex-grow: 0;
  font-size: 16px;
  border: none;
  text-align: left;
  color: #706b68;
  transition: 500ms;
  background-color: #fafafa;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
    background-color: #fafafa;
  }
`;

export const RoundDivCircle = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
  background-color: #4f3325;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 300ms;
  cursor: pointer;
`;

export const RoundDivInnerIcon = styled.img`
  width: 12.4px;
  height: 12.4px;
  overflow: hidden;
  transition: 300ms;
`;

export const HeartRoundDivCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #4f3325;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 20px;
  transition: 300ms;
  cursor: pointer;
`;

export const HeartFilled = styled.img`
  width: 12.4px;
  height: 12.4px;
  transition: 300ms;
`;

export const LoginText = styled.div`
  padding-left: 15px;
  /* width: 55px;
  height: 25px; */
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4f3325;
  text-shadow: #fff 0px 0 30px;
  transition: 300ms;
  cursor: pointer;
  :hover {
    color: #fafafa;
    opacity: 0.5;
  }

  &.change_header {
    color: black;
    transition: 300ms;
    :hover {
      color: #4f3325;
      opacity: 0.5;
    }
  }
`;

export const HeartToLogin = styled.div`
  display: flex;
  align-items: center;
  transition: 300ms;

  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    /* padding-left: 5%; */
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    display: none;
    /* padding-left: 5%; */
  }
`;

export const TopBanner = styled.div`
  width: 100%;
  height: 680px;
  background-image: url("/imgs/landing/banner03.jpg");
  position: relative;
  background-position: bottom 0px center;
  background-size: 110%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: inset 9px -300px 67px -3px rgba(0, 0, 0, 0.1);
  background-size: cover;

  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 1308px;
  height: 680px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  z-index: 1;
  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
`;

export const TextTop = styled.div`
  width: 100px;
  height: 38px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  transition: 800ms;
  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
`;

export const TextMiddle = styled.div`
  width: 453px;
  padding-top: 20px;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  transition: 800ms;
  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
`;

export const TextLow = styled.div`
  width: 639px;
  padding-top: 60px;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  transition: 800ms;
  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    width: 100%;
    padding-left: 5%;
  }
`;

export const WholeWrapper = styled.div`
  width: 100%;
  scroll-behavior: smooth;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 414px;
  }
`;

export const InnerWrapper = styled.div`
  width: 1274px;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  margin-top: 0px;
  padding-bottom: 150px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 414px;
    padding-bottom: 30px;
  }
`;

export const PopularClassWrapper = styled.div`
  width: 100%;
  padding-top: 140px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 414px;
    padding-top: 50px;
  }
`;

export const NewClassWrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 414px;
    padding-top: 0px;
  }
`;

export const EventWrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  @media ${breakPoints.tablet} {
    /* display: none; */
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    padding-top: 0px;
  }
`;

export const SubjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    justify-content: flex-start;
  }
`;

export const SubjectName = styled.div``;

export const SubjectTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const NewYearSubjectWrapper = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 300px;
`;

export const SubjectView = styled.div`
  font-size: 16px;
  padding-top: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const ClassesWrapper = styled.div`
  display: flex;
  height: 300px;
  justify-content: space-between;
  margin-top: 30px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    /* height: 400px; */
    /* justify-content: spa/; */
    flex-direction: column;
  }
`;

export const EventItemWrapper = styled.div`
  display: flex;
  height: 300px;
  justify-content: space-between;
  margin-top: 30px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    height: 370px;
    /* justify-content: spa/; */
    flex-direction: column;
  }
`;

export const SliderWrapper = styled.div`
  width: 102.8%;
  height: 1200px;

  .slick-next-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 71px;
    right: -18px;
    background-image: url("/imgs/rightarrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    @media ${breakPoints.tablet} {
      display: none;
    }
    @media ${breakPoints.mobile} {
      display: none;
      visibility: hidden;
      right: 0;
      width: 0;
    }
  }

  .slick-before-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 71px;
    left: -53px;
    background-image: url("/imgs/leftarrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    @media ${breakPoints.tablet} {
      display: none;
    }
    @media ${breakPoints.mobile} {
      display: none;
      visibility: hidden;
      right: 0;
      width: 0;
    }
  }

  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
  }
`;

export const SpecialClassesWrapper = styled.div`
  display: flex;

  width: 1274px;
  justify-content: space-between;
  margin-bottom: 100px;
  /* background-color: red; */
`;

export const MiddleBanner = styled.div`
  position: absolute;
  top: 2425px;
  width: 100%;
  height: 190px;
  background-color: #f7f0e8;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
    width: 414px;
  }
`;

export const MiddleBannerWrapper = styled.div`
  width: 1274px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
  }
`;

export const MiddleBannerText = styled.div`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4f3325;
  font-size: 32px;
`;

export const MiddleBannerArrow = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 25px;
`;

export const MiddleBannerImage = styled.img`
  width: 500px;
  position: absolute;
  top: -210px;
  left: 700px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    left: 0;
    width: 100px;
  }
`;

export const PromotionClass = styled.div`
  width: 100%;
  padding-top: 490px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* width:  */
    padding-top: 50px;
  }
`;

export const SlickWrapper = styled.div`
  background-color: pink;
  display: flex;
`;

export const ClassWrapper = styled.div`
  height: 400px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 414px;
  }
`;

export const ClassImage = styled.img`
  width: 290px;
  height: 180px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
  opacity: 0.5;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 180px;
    height: 140px;
  }
`;

export const ClassPatissier = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 180px;
  }
`;

export const ClassName = styled.div`
  width: 268px;
  font-size: 18px;
  margin-bottom: 9.5px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 180px;
  }
`;

export const SmallLine = styled.div`
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 9.5px;
  width: 290px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 180px;
  }
`;

export const ClassPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const EventImage = styled.img`
  width: 400px;
  height: 400px;
  background-color: #c4c4c4;
  border-radius: 10px;
  opacity: 0.5;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 400px;
    height: 100px;
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    padding-top: 50px;
  }
`;

export const CategoryButtonWrapper = styled.div`
  width: 1274px;
  height: 277px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 414px;
  }
`;

export const CategoryFirstWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    /* justify-content: flex-start; */
    width: 414px;
  }
`;

export const CategorySecondWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    /* justify-content: flex-start; */
    width: 414px;
  }
`;

export const CategoryDiv = styled.div`
  overflow: hidden;
  border-radius: 10px;
  height: 120px;
  position: relative;
`;

export const CategoryButton = styled.button`
  width: 400px;
  height: 120px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 1;

  background-image: ${(props) =>
    props.value === "베이킹" && "url(/imgs/baking2.jpg)"};
  background-image: ${(props) =>
    props.value === "마카롱" && "url(/imgs/macaron2.jpg)"};
  background-image: ${(props) =>
    props.value === "케이크" && "url(/imgs/cake.jpg)"};
  background-image: ${(props) =>
    props.value === "쿠키" && "url(/imgs/cookie.jpg)"};
  background-image: ${(props) =>
    props.value === "커피" && "url(/imgs/coffee.jpg)"};
  background-image: ${(props) =>
    props.value === "쇼콜라" && "url(/imgs/chocolat.jpg)"};
  background-position: center center;
  font-size: 32px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    overflow: hidden;
    /* font-size: 29px; */
    transform: scale(1.1);
    transition: ease 1000ms;
    /* color: #ff4d12; */
    opacity: 0.8;
  }

  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 120px;
  }
`;

// export const CategoryButtonTitle = styled.div`
//   position: absolute;
//   display: flex;
//   top: 40px;
//   left: 160px;
//   font-size: 32px;
//   font-weight: bold;
//   opacity: 0.9;
//   color: rgba(255, 255, 255, 0.9);
//   z-index: 1;
// `;

export const NextIcon = styled.button`
  width: 30px;
  background-color: #e1e1e1;
`;

export const BeforeIcon = styled.button`
  width: 30px;
  background-color: #e1e1e1;
`;

export const CategoryButtonTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  opacity: 0.9;
  top: 35px;
  left: 154px;
  z-index: 2;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    /* display: none; */
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    left: 16px;
    top: 36px;
  }
`;
