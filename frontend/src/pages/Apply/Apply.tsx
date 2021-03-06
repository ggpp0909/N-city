import { url } from "inspector";
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ModalBase from "../../components/Apply/ApplyModal";

//// style
const Wrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: "center";
  align-items: "center";
  height: 100vh;
  width: 100vw;
`;

const H1 = styled.h1` 
  font-size: 35px;
  margin-top: 120px;
  margin-bottom: 10vh;
  text-align: center;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 17vw;
  min-width: 1000px;
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 400px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
  :hover {
    .card {
      width: 100%;
      opacity: 100%;
      transition: all 0.2s ease-out;
    }
  }
`;

const Card = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: #a1a1ff ;
  width: 0%;
  height: 100%;
  opacity: 0;
  white-space: nowrap;

`;

const CardTextBox = styled.div`
  margin-top: 180px;
  margin-left: 10px;
  p {
    font-size: 20px;
    font-weight: 500;
    margin: 10px;
    z-index: 1;
  }
`;

const Background = styled.img`
  position: absolute;
  /* overflow: hidden; */
  width: 105%;
  height: 105%;
  object-fit: cover;
  opacity: 70%;
`;

const CardTitle = styled.div`
  margin: 50px 24px;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  z-index: 1;
`;

//// component
const Apply = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formType, setFormType] = useState<string>("");

  const handleModalOpen = (type: string) => {
    setIsOpen(true);
    setFormType(type);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setFormType("");
  };

  // const cards = [
  //   { logo: "/essets/images/influencer_logo.png", type: "influencer", name: "???????????????" },
  //   { logo: "/essets/images/designer_logo.png", type: "designer", name: "????????????" },
  //   { logo: "/essets/images/enterprise_logo.png", type: "enterprise", name:"??????" },
  // ];

  return (
    <Wrapper>
      <H1>????????? ??????????????????</H1>
      <CardBox>
        <CardWrapper
          className="influencer"
          onClick={() => handleModalOpen("influencer")}
        >
          <CardTitle className="title">???????????????</CardTitle>
          <Background
            src="essets/images/???????????????.jpg"
            alt="background"
          ></Background>
          <Card className="card">
            <CardTextBox>
              <p>?? ?????????, ??????, ????????????</p>
              <p>?? ????????? ?????? ??????</p>
            </CardTextBox>
          </Card>
        </CardWrapper>
        <CardWrapper
          className="artist"
          onClick={() => handleModalOpen("artist")}
        >
          <CardTitle>????????????</CardTitle>
          <Background
            src="essets/images/????????????.jpg"
            alt="background"
          ></Background>
          <Card className="card">
            <CardTextBox>
              <p>?? ????????? ????????????</p>
              <p>?? ????????? ?????? ?????????</p>
            </CardTextBox>
          </Card>
        </CardWrapper>
        <CardWrapper
          className="enterprise"
          onClick={() => handleModalOpen("enterprise")}
        >
          <CardTitle>??????</CardTitle>
          <Background
            src="essets/images/??????.jpeg"
            alt="background"
          ></Background>
          <Card className="card">
            <CardTextBox>
              <p>?? ??????????????? ?????????, ??????</p>
              <p>?? ??????????????? ???????????? ??????</p>
            </CardTextBox>
          </Card>
        </CardWrapper>
      </CardBox>
      <div>
        <ModalBase
          visible={isOpen}
          onClose={handleModalClose}
          formType={formType}
        ></ModalBase>
      </div>
    </Wrapper>
  );
};

export default Apply;
