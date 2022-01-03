import * as S from "./Landing.styles";
import { v4 as uuidv4 } from "uuid";
import { ClassSubject } from "./LandingSubject";
import { ILandingPresenterProps } from "./Landing.types";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPresenter = (props: ILandingPresenterProps) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <S.TopBanner>배너자리</S.TopBanner>
      <S.Wrapper>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>인기 클래스</S.SubjectTitle>
            <S.SubjectView>전체 인기 클래스 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.ClassesWrapper>
            {/* {new Array(4).fill(1).map((el) => (
              <S.ClassWrapper key={uuidv4()}>
                <S.ClassImage />
                <S.ClassPatissier>빵순이의 하루</S.ClassPatissier>
                <S.ClassName>
                  세상에서 단 하나뿐인 나만의 케이크 만들기
                </S.ClassName>
                <S.SmallLine></S.SmallLine>
                <S.ClassPrice>50,000 원</S.ClassPrice>
              </S.ClassWrapper>
            ))} */}

            {props.popular.map((el: any) => (
              <ClassSubject el={el} key={uuidv4()} />
            ))}
          </S.ClassesWrapper>
        </S.SubjectName>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>신규 클래스</S.SubjectTitle>
            <S.SubjectView>전체 신규 클래스 보기</S.SubjectView>
          </S.SubjectWrapper>{" "}
          <S.ClassesWrapper>
            <div
              style={{
                width: "100%",
                height: "300px",
              }}
            >
              <Slider {...settings}>
                {/* {props.recent.map((el: any, idx) => (
                  <div key={idx}>
                    <div style={{ backgroundColor: "black" }}>{el}</div>
                  </div>
                ))} */}
                {new Array(3).fill(1).map((el, idx) => (
                  <div>{el}</div>
                ))}
              </Slider>
            </div>
          </S.ClassesWrapper>
        </S.SubjectName>
        <S.EventSubject>
          <S.SubjectWrapper>
            <S.SubjectTitle>새해 핫 아이템</S.SubjectTitle>
            <S.SubjectView>스토어 전체 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.ClassesWrapper>
            {new Array(3).fill(1).map((el) => (
              <S.EventImage key={uuidv4()} />
            ))}
          </S.ClassesWrapper>
        </S.EventSubject>
        <S.MiddleBanner>중간배너 자리</S.MiddleBanner>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>기획 클래스</S.SubjectTitle>
            <S.SubjectView>전체 기획 클래스 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.ClassesWrapper>
            {new Array(4).fill(1).map((el) => (
              <S.ClassWrapper key={uuidv4()}>
                <S.ClassImage />
                <S.ClassPatissier>베이킹 월드</S.ClassPatissier>
                <S.ClassName>
                  알록달록 바삭한 마카롱 함께 만들어 보아요
                </S.ClassName>
                <S.SmallLine></S.SmallLine>
                <S.ClassPrice>30,000 원</S.ClassPrice>
              </S.ClassWrapper>
            ))}
          </S.ClassesWrapper>
        </S.SubjectName>
        <S.CategoryWrapper>
          <S.SubjectTitle>클래스 카테고리</S.SubjectTitle>
          <S.CategoryButtonWrapper>
            <S.CategoryFirstWrapper>
              <S.CategoryButton>베이킹</S.CategoryButton>
              <S.CategoryButton>마카롱</S.CategoryButton>
              <S.CategoryButton>케이크</S.CategoryButton>
            </S.CategoryFirstWrapper>
            <S.CategorySecondWrapper>
              <S.CategoryButton>쿠 키</S.CategoryButton>
              <S.CategoryButton>커 피</S.CategoryButton>
              <S.CategoryButton>쇼콜라</S.CategoryButton>
            </S.CategorySecondWrapper>
          </S.CategoryButtonWrapper>
        </S.CategoryWrapper>
      </S.Wrapper>
    </>
  );
};

export default LandingPresenter;
