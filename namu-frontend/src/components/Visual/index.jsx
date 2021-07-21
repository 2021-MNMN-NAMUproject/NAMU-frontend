import React from "react";
import styled from "styled-components";
import Button from "../Button";

const VisualSection = styled.section`
  top: 1000px;
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

const VisualInner = styled.div`
  top: 1000px;
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 120px;
`;

const MainmenuContents = styled.div`
  width: 100%;
  background-color: #343a40;
  position: fixed;
  left: 0;
  display: none;
`;

const Visual = () => {
  return (
    <>
      <VisualSection>
        <VisualInner></VisualInner>
      </VisualSection>
    </>
  );
};

export default Visual;
