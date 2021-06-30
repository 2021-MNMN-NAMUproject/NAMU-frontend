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
  font-size: 32px;
  color: #000;
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
`;

const SearchIcon = styled.div``;

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
`;

const ContentsMenu = styled.div`
  display: block;
  background-color: red;
`;

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
            </Submenu>
            <Submenu>
              <SubmenuLinks to="about">회원가입</SubmenuLinks>
            </Submenu>
            <Submenu>
              <SubmenuLinks to="about">이용약관</SubmenuLinks>
            </Submenu>
            <Submenu>
              <SearchIcon>
                <BiSearchAlt2 />
              </SearchIcon>
              <SubmenuLinks to="about">검색하기</SubmenuLinks>
            </Submenu>
          </HeaderSubmenu>

          <HeaderMainmenu>
            <Mainmenu>
              <MainmenuName>ABOUT US</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <HeaderInner>나무 알아보기</HeaderInner>
                </ContentsMenu>
              </MainmenuContents>

              <MainmenuName>활동</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <HeaderInner>나무 활동하기</HeaderInner>
                </ContentsMenu>
              </MainmenuContents>

              <MainmenuName>참여</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <HeaderInner>나무 참여하기</HeaderInner>
                </ContentsMenu>
              </MainmenuContents>

              <MainmenuName>소식</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <HeaderInner>나무 소식 듣기</HeaderInner>
                </ContentsMenu>
              </MainmenuContents>

              <MainmenuName>공지사항</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <HeaderInner>나무 알리미</HeaderInner>
                </ContentsMenu>
              </MainmenuContents>

              <MainmenuName>후원금 내역</MainmenuName>
              <MainmenuContents>
                <ContentsMenu>
                  <HeaderInner>후원금 알리미</HeaderInner>
                </ContentsMenu>
              </MainmenuContents>

              <MainmenuName className="btn btn--white">후원하기</MainmenuName>
            </Mainmenu>
          </HeaderMainmenu>
        </HeaderInner>
      </Header>
    </>
  );
};

export default Headerbar;
