import styled from "styled-components";
const Wrapper = styled.main`
  .conversation {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
  }

  .conversation:hover {
    background-color: rgb(245, 243, 243);
  }

  .conversationImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  .conversationName {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    .conversationName {
      display: none;
    }
  }
`;
export default Wrapper;
