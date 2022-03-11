import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { AxiosRequestConfig } from "axios";
import CategoryModal, {
  Icategory,
} from "../../components/SalesResistration/CategoryModal";

const Wrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  margin: 3vh 7vw;
`;

const Title = styled.h1`
  span {
    color: #ff865b;
  }
`;

const ExplaneBox = styled.div`
  p {
    margin: 0;
  }
`;

const UploadBox = styled.div`
  .file-label {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background-color: #e5e5e5;
    color: black;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 500px;
    height: 300px;
    border-radius: 15px;
    cursor: pointer;
    &:active {
      background-color: #de5d30;
    }
    p {
      position: absolute;
      bottom: 22%;
    }
    div {
      /* width: inherit;
      height: inherit; */
      img {
        max-width: 480px;
        max-height: 300px;
        object-fit: cover;
      }
      .file-logo {
        width: 150px;
        height: auto;
      }
    }
  }
  .file {
    display: none;
  }
  .file-name {
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
    font-weight: bold;
    color: #de5d30;
  }
`;

const FormBox = styled.form``;

const NameInputBox = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 10px;
  input {
    border: 1px solid grey;
    border-radius: 5px;
    height: 20px;
    width: 300px;
    margin-left: 10px;
    background-color: #e5e5e5;
    font-size: 15px;
    font-family: inherit;
    :focus {
      outline: none;
    }
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 10px;
  p {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    background-color: #ff865b;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 7px 10px;
    margin: 5px 3px;
    height: 20px;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  }
`;

const DescriptionInputBox = styled.div`
  font-weight: bold;
  p {
    margin-top: 8px;
  }
  textarea {
    border: 1px solid grey;
    border-radius: 5px;
    width: 80vw;
    height: 100px;
    background-color: #e5e5e5;
    resize: none;
    font-family: inherit;
    font-size: 15px;
    :focus {
      outline: none;
    }
  }
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  img {
    display: inline;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      width: 32px;
      height: 32px;
      transition: all 0.08s ease-out;
    }
    &:active {
      background-color: #f3c8b9;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 100px;
  button {
    font-family: "Noto Sans KR", sans-serif;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff865b;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 0;
    width: 200px;
    height: 50px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      width: 202px;
      height: 52px;
    }
    &:active {
      background-color: #de5d30;
      box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    }
  }
`;

//// component
const SalesResistration = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [tokenName, setTokenName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [file, setFile] = useState<any>();

  // category modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const onClickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);

    // formdata 확인
    for (var key of formdata.keys()) {
      console.log(key);
    }

    for (var value of formdata.values()) {
      console.log(value);
    }

    // 여기서 post요청
    // (async () => {
    //   try {
    //     const config = {
    //       Headers: {
    //         "content-type": "multipart/form-data",
    //       },
    //     };
    //     const response = await axios.post("url", formdata, config as AxiosRequestConfig<FormData>);
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  };

  const encodeFileToBasek64 = (fileBlob: any) => {
    const reader: any = new FileReader();
    if (fileBlob) {
      reader.readAsDataURL(fileBlob);
    }
    return new Promise(() => {
      reader.onload = () => {
        setImageSrc(reader.result);
      };
    });
  };

  const onChangeTokenName = (e: React.ChangeEvent) => {
    setTokenName((e.target as HTMLInputElement).value);
    // console.log((e.target as HTMLInputElement).value)
  };

  const onChangeDescription = (e: React.ChangeEvent) => {
    setDescription((e.target as HTMLInputElement).value);
    console.log((e.target as HTMLInputElement).value);
  };

  const handleFileOnChange = (e: React.ChangeEvent) => {
    setFile((e.target as HTMLInputElement).files?.item(0));

    console.log((e.target as HTMLInputElement).files?.item(0));
    if ((e.target as HTMLInputElement).files) {
      encodeFileToBasek64((e.target as HTMLInputElement).files?.item(0));
    }
  };

  const previewImage = () => {
    if (file?.type.slice(0, 5) === "image") {
      return (
        <div className="preview">
          {" "}
          {imageSrc && <img src={imageSrc} alt="preview-img" />}{" "}
        </div>
      );
    } else if (file?.type.slice(0, 5) === "video") {
      return (
        <div>
          <img
            className="file-logo"
            src="/essets/images/video-file.png"
            alt="video-file"
          />
        </div>
      );
    } else if (file?.type.slice(0, 5) === "audio") {
      return (
        <div>
          <img
            className="file-logo"
            src="/essets/images/music-file.png"
            alt="audio-file"
          />
        </div>
      );
    } else if (file) {
      alert("부적절한 파일입니다.");
      return (
        <div>
          <img src="/essets/images/plus_image.png" alt="fileimage" />
          <p>파일 업로드</p>
        </div>
      );
    } else {
      return (
        <div>
          <img src="/essets/images/plus_image.png" alt="fileimage" />
          <p>파일 업로드</p>
        </div>
      );
    }
  };

  return (
    <Wrapper>
      <Title>
        <span>NFT </span>작품 등록하기
      </Title>
      <ExplaneBox>
        <p>*필수</p>
        <p>사진, 비디오, 오디오 </p>
        <br />
        <p className="secondpart">100MB 를 넘기지않는</p>
        <p>PG,PNG,GIF,SVG,MP4,MP3</p>
        <p>파일만 가능합니다.</p>
      </ExplaneBox>
      <FormBox>
        <UploadBox>
          <label className="file-label" htmlFor="chooseFile">
            {previewImage()}
          </label>
          <input
            className="file"
            id="chooseFile"
            type="file"
            accept="audio/*, video/*, image/*"
            onChange={handleFileOnChange}
          ></input>
          <p className="file-name">{file?.name}</p>
          <br></br>
          {/* {file?.type.slice(0, 5)} */}
        </UploadBox>
        <NameInputBox>
          <p>작품이름*: </p>
          <input
            type="text"
            onChange={onChangeTokenName}
            value={tokenName}
            spellCheck={false}
          />
        </NameInputBox>
        <DescriptionInputBox>
          <p>작품설명 :</p>
          <textarea
            onChange={onChangeDescription}
            value={description}
            spellCheck={false}
          />
        </DescriptionInputBox>
        <CategoryBox>
          <p>카테고리</p>
          <img
            src="/essets/images/category_add_button.png"
            alt="category add"
            onClick={handleModalOpen}
          />
        </CategoryBox>
        <Categories>
          {categories.map((category) => (
            <p key={category} onClick={handleModalOpen}>
              # {category}
            </p>
          ))}
        </Categories>

        <ButtonBox>
          <button onClick={onClickSubmit}>작품등록</button>
        </ButtonBox>
      </FormBox>
      <CategoryModal
        visible={isOpen}
        onClose={handleModalClose}
        openStateHandler={setIsOpen}
        setCategories={setCategories}
      ></CategoryModal>
    </Wrapper>
  );
};

export default SalesResistration;
