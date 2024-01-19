import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
