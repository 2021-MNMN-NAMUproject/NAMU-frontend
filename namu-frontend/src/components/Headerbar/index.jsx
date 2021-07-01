import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = styled.header`
  background-color: #0ca678;
  border-bottom: 1px solid #343a40;
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
  display: block;
  height: 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const Title = styled.header`
  font-size: 20px;
  color: #fff4e6;
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 0;
  margin-left: 60px;
`;

const HeaderSubmenu = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
`;

const Submenu = styled.ul`
  display: flex;
`;

const SubmenuLinks = styled.div`
  position: relative;
  font-size: 12px;
  color: #ffec99;
  padding: 11px 16px;
  display: block;

  &:hover {
    color: #000;
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
  padding-left: 10px;
  padding-right: 20px;
  position: relative;
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

  &:focus {
    opacity: 0;
  }
`;

const HeaderMainmenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
`;

const Mainmenu = styled.div`
  display: flex;
`;

const MainmenuName = styled.div`
  padding: 10px 20px 34px 20px;
  font-size: 13px;

  &:hover {
    background-color: #343a40;
    color: #0ca678;
    font-weight: 700;
    border-radius: 6px 6px 0 0;
  }
`;

const MainmenuContents = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  display: none;

  &:hover {
    display: block;
  }
`;

const ContentsMenu = styled.div`
  background-color: orange;
`;

const ContentInner = styled.div``;

const Headerbar = () => {
  return (
    <>
      <Header>
        <HeaderInner>
          <HeaderLogo to="/">LOGO</HeaderLogo>

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
                <ContentsMenu>
                  <ContentInner>나무 알아보기</ContentInner>
                </ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>활동</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <ContentInner>나무 활동하기</ContentInner>
                </ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>참여</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <ContentInner>나무 참여하기</ContentInner>
                </ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>소식</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <ContentInner>나무 소식 듣기</ContentInner>
                </ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>공지사항</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <ContentInner>나무 알리미</ContentInner>
                </ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName>후원금 내역</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <ContentInner>후원금 알리미</ContentInner>
                </ContentsMenu>
              </MainmenuContents>
            </Mainmenu>

            <Mainmenu>
              <MainmenuName className="btn btn--white">후원하기</MainmenuName>
            </Mainmenu>
          </HeaderMainmenu>
        </HeaderInner>
      </Header>
    </>
  );
};

export default Headerbar;
