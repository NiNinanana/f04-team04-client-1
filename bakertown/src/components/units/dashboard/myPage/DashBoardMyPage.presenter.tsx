import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import * as S from "./DashBoardMyPage.styles";
import { IDashBoardMyPageProps } from "./DashBoardMyPage.types";
import { deleteUser, updatePassword } from "firebase/auth";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const DashBoardMyPagePresenter = (props: IDashBoardMyPageProps) => {
  const [password, setPassword] = useState("");
  const [myIntroduce, setIntroduce] = useState("");
  const currentUser: any = useAuth();

  const [myUser, setMyUser] = useState({
    name: "",
    introduce: "",
  });

  const dashBoardMyPageContents = async () => {
    if (myUser?.name === "") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult: any = await getDoc(userQuery);
      setMyUser(userResult.data());
    }
  };

  useEffect(() => {
    dashBoardMyPageContents();
  });

  // 패스워드 변경
  const passwordChange = async () => {
    function getASecureRandomPassword() {
      return password;
    }
    const newPassword = getASecureRandomPassword();

    try {
      await updatePassword(currentUser, newPassword);
      confirm("비밀번호변경이 완료되었습니다.");
    } catch {
      alert("비밀번호 변경 실패");
    }
  };

  return (
    <S.Wrapper>
      <S.ModifyWrapper>
        <S.LeftWrapper>
          <S.ProfileUpload src="/imgs/logo.png" />
          <S.UserName>{myUser?.name}님</S.UserName>
          <S.UserName>{currentUser?.email}</S.UserName>
          {/* <S.ImageModifyButton>프로필사진 변경하기</S.ImageModifyButton> */}
          <S.ImageModifyButton onClick={props.deleteAccount}>
            회원탈퇴
          </S.ImageModifyButton>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Header>
            <S.NameWrapper>
              <S.Title>{myUser?.name}님의 한 줄 소개</S.Title>
              <S.InputWrapper>
                <S.Label>파티시에 한 줄 소개</S.Label>
                <S.Input
                  type="text"
                  onChange={(e) => props.setIntroduce(e.target.value)}
                />
              </S.InputWrapper>
              <S.ButtonWrapper>
                <S.ModifyNameButton onClick={props.onClickIntroduce}>
                  한 줄 소개 등록하기
                </S.ModifyNameButton>
              </S.ButtonWrapper>
            </S.NameWrapper>
          </S.Header>
          <S.Header>
            <S.Title>비밀번호 변경</S.Title>
            {/* <S.InputWrapper>
              <S.Label>현재 비밀번호</S.Label>
              <S.Input type="password" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>새 비밀번호</S.Label>
              <S.Input type="password" />
            </S.InputWrapper> */}
            <S.InputWrapper>
              <S.Label>새 비밀번호 입력</S.Label>
              <S.Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.InputWrapper>
            <S.ButtonWrapper>
              <S.ModifyButton onClick={passwordChange}>
                비밀번호 변경하기
              </S.ModifyButton>
            </S.ButtonWrapper>
          </S.Header>
        </S.RightWrapper>
      </S.ModifyWrapper>
    </S.Wrapper>
  );
};

export default DashBoardMyPagePresenter;
