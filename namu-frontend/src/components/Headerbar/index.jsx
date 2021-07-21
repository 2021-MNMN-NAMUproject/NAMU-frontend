import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../Button";

const Header = styled.header`
  background-color: #0ca678;
  border-bottom: 1px solid #343a40;
  font-family: "Noto Sans CJK KR";
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  display: flex;
  color: #fff4e6;
  padding: 20px;
`;

const HeaderInner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 120px;
`;

const HeaderLogo = styled.div`
  display: inline-block;
  position: absolute;
  background-color: #fff;
  border-radius: 50px;
  left: 0;
  margin: auto;
  z-index: 10;
`;

const Title = styled.header`
  font-size: 20px;
  color: #fff4e6;
  display: inline-block;
  position: absolute;
  top: 35px;
  left: 0;
  margin-left: 120px;
`;

const HeaderSubmenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

const Submenu = styled.ul`
  display: flex;
  margin-left: 7px;
`;

const SubmenuLinks = styled.div`
  position: relative;
  font-size: 12px;
  color: #ffec99;
  padding: 11px 16px;
  display: block;
  cursor: pointer;

  &:hover {
    color: #343a40;
    font-weight: 700;
  }

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 12px;
    background-color: #ffec99;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1px;
    margin: auto;
  }

  &:first-child::before {
    display: none;
  }
`;

const SearchMenu = styled.div`
  height: 34px;
  padding-left: 5px;
  padding-right: 20px;
  position: relative;
  cursor: pointer;
`;

const SearchInput = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 3px;
  padding: 4px 10px;
  border: 1px solid #ffec99;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  background-color: #fff4e6;
  color: #343a40;
  font-size: 12px;
  transition: width 0.4s;

  &:hover {
    width: 190px;
    border: 2px solid #ffec99;
  }
`;

const SearchIcon = styled.div`
  font-size: 20px;
  position: absolute;
  color: #000;
  padding-left: 5px;
  top: 6px;
  margin: auto;
  transition: 0.4s;

  &:hover {
    opacity: 0;
  }
`;

const HeaderMainmenu = styled.div`
  position: absolute;

  bottom: -20px;
  right: 0;
  z-index: 1;
  display: flex;
`;

const MainmenuName = styled.div`
  padding: 10px 20px 34px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #343a40;
    color: #0ca678;
    font-weight: 700;
    border-radius: 6px 6px 0 0;
  }
`;

const MainmenuContents = styled.div`
  width: 100%;
  background-color: #343a40;
  position: fixed;
  left: 0;
  display: none;
`;

const Mainmenu = styled.div`
  &:hover ${MainmenuContents} {
    display: block;
  }
`;

const ContentsMenu = styled.div`
  background-color: #ffec99;
  height: 40px;
  color: #343a40;
  font-size: 16px;
`;

const ContentInner = styled.div`
  background-color: #343a40;
  height: 100px;
  margin-top: 50px;
`;

const Headerbar = () => {
  return (
    <>
      <Header>
        <HeaderInner>
          <HeaderLogo to="">
            <img src="/NAMUlogo.png" width="100px" height="100px" />
          </HeaderLogo>

          <Title>후원 플랫폼 나무 | 멍냥멍냥</Title>

          <HeaderSubmenu>
            <Submenu>
              <SubmenuLinks to="about">로그인</SubmenuLinks>
              <SubmenuLinks to="about">회원가입</SubmenuLinks>
              <SubmenuLinks to="about">이용약관</SubmenuLinks>
            </Submenu>

            <Submenu>
              <SearchMenu>
                <SearchIcon>
                  <BiSearchAlt2 />
                </SearchIcon>

                <SearchInput></SearchInput>
              </SearchMenu>
            </Submenu>
          </HeaderSubmenu>

          <HeaderMainmenu>
            <Mainmenu>
              <MainmenuName>ABOUT US</MainmenuName>
              <MainmenuContents>
                <ContentInner>나무 알아보기</ContentInner>
                <ContentsMenu>나무에 대해서 알아봅시다</ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>활동</MainmenuName>
              <MainmenuContents>
                <ContentInner>나무 활동하기</ContentInner>
                <ContentsMenu>나무 활동에 대해서 알아봅시다</ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>참여</MainmenuName>
              <MainmenuContents>
                <ContentInner>나무 참여하기</ContentInner>
                <ContentsMenu>나무에 같이 이렇게 참여해봅시다</ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>소식</MainmenuName>
              <MainmenuContents>
                <ContentInner>나무 소식 듣기</ContentInner>
                <ContentsMenu>나무의 소식을 들어봅시다</ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>공지사항</MainmenuName>
              <MainmenuContents>
                <ContentInner>나무 알리미</ContentInner>
                <ContentsMenu>나무의 공지사항을 알려줍니다</ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>후원금 내역</MainmenuName>
              <MainmenuContents>
                <ContentInner>후원금 알리미</ContentInner>
                <ContentsMenu>후원금 내역을 공개합니다</ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <Button>후원버튼</Button>
            </Mainmenu>
          </HeaderMainmenu>
        </HeaderInner>
      </Header>
    </>
  );
};

export default Headerbar;
