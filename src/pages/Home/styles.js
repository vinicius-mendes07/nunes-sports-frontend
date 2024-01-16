import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;

  h1 {
    font-size: 24px;
  }

  span {
    display: block;
    font-weight: bold;
    margin-top: 16px;
  }
`

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
`
export const InputSearchContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  margin-top: 16px;

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
`
