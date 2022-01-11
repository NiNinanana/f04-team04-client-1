import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background: #fbf5ef; */
`;

export const SignUpWrapper = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 100ms;

  :hover {
    color: #4f3325;
    opacity: 0.5;
  }
`;

export const SignUpInnerWrapper = styled.div`
  width: 50%;
  /* height: 100%; */
  /* background: gray; */
`;
export const Label = styled.div`
  /* position: absolute;
  padding: 60px 24px 0px;
  left: 950px;
  right: 0px;
  font-size: 50px;
  font-weight: bold; */
  font-size: 39px;
`;

export const NameLabel = styled.div`
  font-size: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 50px;
  /* color: #4f3325; */
  color: rgba(0, 0, 0, 0.7.5);
`;

export const PhoneLabel = styled.div`
  font-size: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 50px;
  /* color: #4f3325; */
  color: rgba(0, 0, 0, 0.7.5);
`;

export const EmailLabel = styled.div`
  font-size: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 50px;
  /* color: #4f3325; */
  color: rgba(0, 0, 0, 0.7.5);
`;

export const PasswordLabel = styled.div`
  font-size: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 16px;
  color: rgba(0, 0, 0, 0.7.5);
`;

export const Name = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 8%;
  font-size: 20px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
`;

export const Email = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 8%;
  font-size: 20px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
`;

export const Check = styled.input`
  /* border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 8%;
  font-size: 15px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
  margin-top: 40px;
`;

export const Password = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 8%;
  font-size: 20px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
}
`;

export const Phone = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 8%;
  font-size: 20px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
}
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 65px;
  border-radius: 0.5px;
  background-color: #4f3325;
  color: #f3f3f3;
  border: 0px solid gray;
  margin-top: 70px;
  font-size: 24px;
  cursor: pointer;
  transition: 100ms;

  :hover {
    color: white;
    opacity: 0.95;
  }
`;
export const Error = styled.div`
  color: red;
`;

export const PhotoWrapper = styled.div`
  background-image: url("/imgs/login/login03.jpg");
  width: 50vw;
  height: 100vh;
  border: 0px solid gray;
  background-position: bottom -100px center;
  /* opacity: 0.9; */
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;
  /* box-shadow: inset 9px -300px 67px -3px rgba(0, 0, 0, 0.1); */
  background-size: cover;
`;

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoLabel = styled.img`
  width: 20%;
  height: 100%;
  /* height: 100%; */
`;

export const SignInLabel = styled.div`
  font-size: 15px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
`;

export const Rightarrow = styled.img`
  margin-left: 12px;
  margin-bottom: 4px;
  width: 13px;
  height: 13px;
`;

export const SignUpLabel = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 90px;
  color: color: rgba(0, 0, 0, 0.7.5);
`;
