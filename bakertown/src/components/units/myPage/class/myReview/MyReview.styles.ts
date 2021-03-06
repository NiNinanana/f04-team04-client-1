import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 77px;
  @media ${breakPoints.tablet} {
    padding-left: 2%;
    padding-right: 2%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    height: 100%;
  }
`;

export const ClassList = styled.div`
  margin-left: 40px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    margin-left: 3%;
    margin-right: 3%;
  }
`;

export const ListTitle = styled.div``;

export const ListTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    font-size: 1.5em;
    margin-bottom: 5%;
  }
`;

export const ListContents = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* background-color: red; */
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
  }
`;

export const ClassWrapper = styled.div`
  width: 987px;
  /* height: 180px; */
  margin-bottom: 24px;
  padding-left: 30px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 0.5px #e2e2e2;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    height: 100%;
    padding-top: 2%;
    padding-left: 3%;
    padding-bottom: 2%;
    margin-bottom: 10%;
  }
`;

export const Class = styled.div`
  /* background-color: pink; */
  display: flex;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
  }
`;

export const ClassInfoWrapper = styled.div`
  padding-left: 29.5px;
  @media ${breakPoints.tablet} {
    /* width: 70%; */
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 70%;
    height: 85%;
    padding-left: 3%;
  }
`;

export const ClassImage = styled.img`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: yellow;
  @media ${breakPoints.tablet} {
    /* width: 120px; */
    /* height: 100px; */
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100px;
    height: 80px;
  }
`;

export const ClassPatissier = styled.div`
  width: 166px;
  height: 25px;
  margin-bottom: 9px;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  color: rgba(79, 51, 37, 0.9);
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    font-size: 0.7em;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const Label = styled.div`
  width: 150px;
  height: 55px;
  font-family: NotoSans;
  font-size: 18px;
  @media ${breakPoints.tablet} {
    padding-top: 0.5%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    padding-top: 1.3%;
    padding-left: 8%;
  }
`;

export const ReviewEdit = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
`;

export const ReviewDelete = styled.button`
  background-color: transparent;
  border: none;
`;

export const ClassName = styled.div`
  width: 419px;
  height: 33px;
  margin-bottom: 48px;
  font-family: NotoSans;
  font-size: 24px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    font-size: 0.9em;
    margin-bottom: 0;
  }
`;

export const ClassDate = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    font-size: 0.8em;
    margin-bottom: 0;
  }
`;

export const Line = styled.div`
  width: 920px;
  height: 1px;
  background-color: #bdb7b3;
  margin-top: 35px;
  @media ${breakPoints.tablet} {
    width: 95%;
    margin-top: 0;
    margin-bottom: 2%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 95%;
    margin-top: 5%;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    margin-top: 3%;
  }
`;

export const ClassReview = styled.div``;

export const SubTheme = styled.div`
  display: flex;
  align-items: center;
`;

export const ClassStarRate = styled.div`
  display: flex;
`;

export const PersonalRate = styled.img`
  width: 27px;
  margin-top: 12px;
`;

export const CreatedDate = styled.div`
  margin-left: 16px;
  margin-top: 5px;
  color: #bdb7b3;
  @media ${breakPoints.tablet} {
    margin-top: 3%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    margin-top: 3%;
  }
`;

export const ReviewRemarks = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

export const Review = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`;
