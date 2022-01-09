import styled from "@emotion/styled";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: 800ms;
  background-color: #fbf5ef;
  background-size: cover;
`;

export const InnerLogo = styled.div`
  width: 115px;
  height: 42px;
  transition: 300ms;
  :hover {
    cursor: pointer;
  }
`;

export const ClassTitle = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #4f3325;
  margin-left: 172px;
  cursor: pointer;

  :hover {
    color: #4f3325;
    opacity: 0.5;
    transition: 300ms;
  }
`;

export const StoreTitle = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #4f3325;
  margin-left: 50px;
  cursor: pointer;

  :hover {
    color: #4f3325;
    opacity: 0.5;
    transition: 300ms;
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

export const HeartToLogin = styled.div`
  display: flex;
  align-items: center;

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
    color: #4f3325;
    opacity: 0.5;
  }
`;

export const HeartFilled = styled.img`
  width: 12.4px;
  height: 12.4px;
  transition: 300ms;
`;

export const SeacrchBar = styled.input`
  width: 380px;
  height: 48px;
  /* margin: 10px 20px 0px 0px; */
  margin-top: 5px;
  padding: 8px 28px 8px 40px;
  border-radius: 80px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
`;

export const HeartButton = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
  margin: 8px 15px 8px 20px;
  padding: 10px 8.9px 10px 8.9px;
`;

export const SinInButton = styled.div`
  width: 60px;
  height: 25px;
  margin: 18px 0px 10.2px 20px;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  color: #4f3325;
  :hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
   width: 115px;
  height: 42px;
  margin: 5px 172px 1px 61px;
}
`;
